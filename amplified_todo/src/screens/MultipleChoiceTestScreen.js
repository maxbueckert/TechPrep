import React, { useEffect, useState, useRef } from 'react';
import { Button, View, Text, StyleSheet} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Title from '../components/Title';
import TextBody from '../components/TextBody';
import TestButton from '../components/TestButton';
import TestBottomPanel from '../components/TestButtonPanel';

import getChatGptQuestion from '../hooks/getChatGptQuestion'
import proccessChatGptQuestion from '../hooks/proccessChatGptQuestion'

import {useDifficulty} from '../components/Context/TestContext'

import TestAltOptionsPanel from '../components/TestAltOptionsPanel'





export default function MultipleChoiceTestScreen({ navigation }) {

  // question & answer states
  const [question, setQuestion] = useState(null);
  const [correctAnswer, setCorrectAnswer] = useState(null);
  const [wrongAnswerOne, setWrongAnswerOne] = useState(null);
  const [wrongAnswerTwo, setWrongAnswerTwo] = useState(null);
  const [wrongAnswerThree, setWrongAnswerThree] = useState(null);

  let prevShuffledAnswer = useRef([]);

  // reveal anwer states
  const [revealAnswer, setRevealAnswer] = useState(false);
  const [falseIndex, setFalseIndex] = useState(null);
  
  // user setting state
  const {difficulty, setDifficulty, domain, setDomain} = useDifficulty();

  // score states
  const [numCorrectAnswers, setNumCorrectAnswers] = useState(0);
  const [totalAnswers, setTotalAnswers] = useState(0);
 
  const fetchQuestion = async () => {

      const result = await getChatGptQuestion(difficulty, domain);
      const {question, correctAnswer, wrongAnswerOne, wrongAnswerTwo, wrongAnswerThree, validResponse} = proccessChatGptQuestion(result);

      if (!validResponse) {
        fetchQuestion();
        return;
      }

      setQuestion(question);
      setCorrectAnswer(correctAnswer);
      setWrongAnswerOne(wrongAnswerOne);
      setWrongAnswerTwo(wrongAnswerTwo);
      setWrongAnswerThree(wrongAnswerThree);
      setRevealAnswer(false); // reset revealAnswer
      setFalseIndex(null); // reset revealAnswer
  }

  useEffect(() => {
      fetchQuestion();
  }, []);

  const handleAnswer = (correct, index) => {
      setRevealAnswer(true); // reveal the correct answer
      setTotalAnswers(totalAnswers+1);
      if (!correct) {
        setFalseIndex(index);
      }
      if (correct) {
        setNumCorrectAnswers(numCorrectAnswers + 1);
      }
      setTimeout(fetchQuestion, .5); // fetch a new question after .3 seconds
  }

  const answers = [
      {text: correctAnswer, isCorrect: true}, 
      {text: wrongAnswerOne, isCorrect: false}, 
      {text: wrongAnswerTwo, isCorrect: false}, 
      {text: wrongAnswerThree, isCorrect: false}
  ];

    // Shuffles an array and returns the shuffled array
    const shuffleArray = (arr) => {
      for(let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
      return arr;
    }

  const shuffledAnswers = revealAnswer? prevShuffledAnswer.current : shuffleArray(answers);
  prevShuffledAnswer.current = shuffledAnswers;
  

  

  return (
      <View style={styles.container}>
          <Title></Title>
          <TextBody words={question ? question : 'Loading Question...'} style={styles.text} tick = {question ? false : true}></TextBody>
          <TestBottomPanel style={styles.buttons}>
              {shuffledAnswers.map((answer, index) => 
              <TestButton 
                  key={index} 
                  title={answer.text} 
                  onPress={(question && !revealAnswer) ? () => {handleAnswer(answer.isCorrect, index)}: null}
                  style={[revealAnswer && answer.isCorrect ? {backgroundColor: 'green'} : null, (falseIndex !== null && index == falseIndex) ? {backgroundColor: 'red'} : null]}
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
      flex: 1,
    },
    buttons : {
      flex: 7,
    },
    altOptions: {
      flex: 0.5,
    }

});
