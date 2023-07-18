import React, { useEffect, useState } from 'react';
import { Button, View, Text, StyleSheet} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Title from '../components/Title';
import TextBody from '../components/TextBody';
import TestButton from '../components/TestButton';
import ButtonPanel from '../components/ButtonPanel';

import getChatGptQuestion from '../hooks/getChatGptQuestion'
import proccessChatGptQuestion from '../hooks/proccessChatGptQuestion'


let prevShuffledAnswer = null;


export default function MultipleChoiceTestScreen({ navigation }) {

  const [question, setQuestion] = useState(null);
  const [correctAnswer, setCorrectAnswer] = useState(null);
  const [wrongAnswerOne, setWrongAnswerOne] = useState(null);
  const [wrongAnswerTwo, setWrongAnswerTwo] = useState(null);
  const [wrongAnswerThree, setWrongAnswerThree] = useState(null);
  const [revealAnswer, setRevealAnswer] = useState(false);
 
  const fetchQuestion = async () => {
      const result = await getChatGptQuestion("advanced", "backend");
      const {question, correctAnswer, wrongAnswerOne, wrongAnswerTwo, wrongAnswerThree} = proccessChatGptQuestion(result);
      setQuestion(question);
      setCorrectAnswer(correctAnswer);
      setWrongAnswerOne(wrongAnswerOne);
      setWrongAnswerTwo(wrongAnswerTwo);
      setWrongAnswerThree(wrongAnswerThree);
      setRevealAnswer(false); // reset revealAnswer
  }

  useEffect(() => {
      fetchQuestion();
  }, []);

  const handleAnswer = () => {
      setRevealAnswer(true); // reveal the correct answer
      setTimeout(fetchQuestion, 1000); // fetch a new question after 1 second
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

  const shuffledAnswers = revealAnswer? prevShuffledAnswer : shuffleArray(answers);
  if (!revealAnswer) {
    prevShuffledAnswer = shuffledAnswers;
  }
  

  return (
      <View style={styles.container}>
          <Title></Title>
          <TextBody words={question ? question : 'Loading Question...'} style={styles.text}></TextBody>
          <ButtonPanel style={styles.buttons}>
              {shuffledAnswers.map((answer, index) => 
              <TestButton 
                  key={index} 
                  title={answer.text} 
                  onPress={handleAnswer}
                  style={revealAnswer && answer.isCorrect ? {backgroundColor: 'green'} : null}
              />
              )} 
          </ButtonPanel>
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
    }

});
