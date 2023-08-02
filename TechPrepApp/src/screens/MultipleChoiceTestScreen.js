import React, { useEffect, useState, useRef } from 'react';
import { Button, View, Text, StyleSheet} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Title from '../components/Title';
import TextBody from '../components/TextBody';
import TestButton from '../components/TestButton';
import TestBottomPanel from '../components/TestButtonPanel';

import getChatGptQuestion from '../services/getChatGptQuestion'
import proccessChatGptQuestion from '../services/proccessChatGptQuestion'

import {useDifficulty} from '../components/Context/TestContext'

import TestAltOptionsPanel from '../components/TestAltOptionsPanel'
import { setStatusBarNetworkActivityIndicatorVisible } from 'expo-status-bar';

import GetQuestion from '../services/awsGraphQLaccess/questionData/GetQuestion';
import StoreQuestion from '../services/awsGraphQLaccess/questionData/StoreQuestion';
import { ConsoleLogger } from '@aws-amplify/core';


export default function MultipleChoiceTestScreen({ navigation }) {

  // reveal anwer states
  const [revealAnswer, setRevealAnswer] = useState(false);
  const [falseIndex, setFalseIndex] = useState(null);
  
  // user setting state
  const {difficulty, setDifficulty, domain, setDomain} = useDifficulty();

  // score states
  const [numCorrectAnswers, setNumCorrectAnswers] = useState(0);
  const [totalAnswers, setTotalAnswers] = useState(0);

  // screenstate (current question/answer being displayed)
  const [screenState, setScreenState] = useState({"Q": null, "A": [null, null, null, null]})
  const [prevScreenStates, setPrevScreenStates] = useState([screenState])
  const [curScreenIndex, setCurScreenIndex] = useState(0);
  const [backInTime, setBackInTime] = useState(false);
 
  const fetchQuestion = async () => {

    // generate random number between 0 and 10
    // if even, we choose a question we already have in our database
    // if odd, we choose to generate a new question from chatGPT, and store it in our database

      let randomNumber = Math.floor(Math.random() * 10) + 1;
      let question, correctAnswer, wrongAnswerOne, wrongAnswerTwo, wrongAnswerThree;

      if (randomNumber % 2) {
        // GENERATE QUESTION FROM OUR DATABASE
        console.log("local question: ")
        let questionData;
        try {
          questionData = await GetQuestion(difficulty, domain);
        } catch (e) {
          console.log('error getting quetion locally (likley no questions stored for these conditions');
          fetchQuestion();
          return;
        }
        ({question, correctAnswer, wrongAnswerOne, wrongAnswerTwo, wrongAnswerThree} = questionData);
      }
      
      
  
      else {
        // GENERATE QUESTION FROM CHATGPT, AND STORE
        console.log("chatGPT question: ")
        let validResponse;
        // generate quetion from ChatGPT 
        const result = await getChatGptQuestion(difficulty, domain);
         ({question, correctAnswer, wrongAnswerOne, wrongAnswerTwo, wrongAnswerThree, validResponse} = proccessChatGptQuestion(result));
        if (!validResponse) {
          fetchQuestion(); // recursivley call until valid gpt response is received (need to  add error handling here)
          return; 
        }
        // store chatGPT generate questions
        await storeQuestionsInDatabase(question, correctAnswer, wrongAnswerOne, wrongAnswerTwo, wrongAnswerThree, difficulty, domain);
    }


      setRevealAnswer(false); 
      setFalseIndex(null); 
      const answers = [
        {text: correctAnswer, isCorrect: true, chosen : false}, 
        {text: wrongAnswerOne, isCorrect: false, chosen : false}, 
        {text: wrongAnswerTwo, isCorrect: false, chosen : false}, 
        {text: wrongAnswerThree, isCorrect: false, chosen : false}
    ];
      let tempShuffledAnswersVariable = shuffleArray(answers)
      const newScreenState = {"Q" : question, "A" : tempShuffledAnswersVariable};
      setPrevScreenStates(prevScreenStates => [...prevScreenStates, newScreenState]);
      setScreenState(newScreenState);
      setCurScreenIndex(prev=>prev+1);
  }

  const storeQuestionsInDatabase = async (question, correctAnswer, wrongAnswerOne, wrongAnswerTwo, wrongAnswerThree, difficulty, domain) => {
    try {
      await StoreQuestion({
        question : question,
        correctAnswer: correctAnswer, 
        wrongAnswerOne: wrongAnswerOne,
        wrongAnswerTwo: wrongAnswerTwo,
        wrongAnswerThree: wrongAnswerThree,
        difficulty: difficulty,
        domain: domain
      })
      console.log('stored')
    }
    catch (err) {
      console.log("couldnt store question, caught in FE")
    }
  }


  useEffect(() => {
      fetchQuestion();
  }, []);

  const handleAnswer = (answer, index) => {
      let correct = answer.isCorrect;
      registerAnswerIsChosen(index);
      setRevealAnswer(true); 
      setTotalAnswers(totalAnswers+1);
      if (!correct) {
        setFalseIndex(index);
      }
      if (correct) {
        setNumCorrectAnswers(numCorrectAnswers + 1);
      }
      setTimeout(fetchQuestion, .5); // fetch a new question after .5 seconds
  }


  const registerAnswerIsChosen = (index) => {
    setPrevScreenStates(prev => {
      let state = [...prev];
      let st = state[state.length - 1];
      st.A[index].chosen = true;
      return state;
    })
  }


    // Shuffles an array and returns the shuffled array
    // used to shuffle gpt answers (gpt always returns correct answer in index 0)
    const shuffleArray = (arr) => {
      for(let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
      return arr;
    } 

    const viewNextScreen = () => {
      if (curScreenIndex < prevScreenStates.length-1) {
        setScreenState(prevScreenStates[curScreenIndex+1]);
        let oldIndex = curScreenIndex;
        setCurScreenIndex(prev=>prev+1);
        if (oldIndex == prevScreenStates.length - 2) {
          setBackInTime(false); //
        }
    }}

    const viewPrevScreen = () => {
      if (curScreenIndex > 1) {
        setScreenState(prevScreenStates[curScreenIndex-1]);
        setCurScreenIndex(prev=>prev-1);
        setBackInTime(true); //
    }}
    console.log(curScreenIndex);
    console.log(prevScreenStates.length);  
    console.log(curScreenIndex == prevScreenStates.length-1);
    console.log(backInTime);
 
  return (
      <View style={styles.container}>
          <Title backButtonFn={viewPrevScreen} forwardButtonFn = {viewNextScreen} mcScreen = {true} validF = {(curScreenIndex == prevScreenStates.length - 1) ? false : true} validB = {(curScreenIndex > 1) ? true : false}></Title>
          <TextBody words={screenState.Q ? screenState.Q : 'Loading Question...'} style={styles.text} tick = {screenState.Q ? false : true}></TextBody>
          <TestBottomPanel style={styles.buttons}>
              {screenState.A.map((answer, index) => 
              <TestButton 
                  key={index} 
                  title={answer? answer.text : null} 
                  onPress={(answer && !revealAnswer && !backInTime) ? () => {handleAnswer(answer, index)}: null}
                  style={[((revealAnswer || backInTime) && answer.isCorrect) ? {backgroundColor: 'green'} : {backgroundColor: '#F8F8F8'}, ((falseIndex !== null && index == falseIndex) || backInTime && answer.chosen && !answer.isCorrect) ? {backgroundColor: 'red'} : null]}
              />
              )} 
          </TestBottomPanel>
          <TestAltOptionsPanel correctAnswers={numCorrectAnswers} totalAnswers = {totalAnswers} style = {styles.altOptions}></TestAltOptionsPanel>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    },
    text: {
      padding: 10,
      // let div fit to content, no flex added
    },
    buttons : {
      flex: 7,
    },
    altOptions: {
      flex: 0.5,
    }

});
