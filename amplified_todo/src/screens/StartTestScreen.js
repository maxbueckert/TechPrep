
import { Button, View, Text, StyleSheet } from 'react-native';
import React, { useState } from 'react';

import Title from '../components/Title';
import TextBody from '../components/TextBody';
import ButtonPanel from '../components/ButtonPanel';
import TestButton from '../components/TestButton';


export default function StartTestScreen() {

  const [difficulty, setDifficulty] = useState(0);
  const [domain, setDomain] = useState(null);

  const [difficultyChosen, setDifficultyChosen] = useState(false);

  return (
    <View style = {styles.container}>
      <Title></Title>

      {!difficultyChosen && (
      <View style = {{flex: 1}}>
        <TextBody
              words = "Select your difficulty"
              style = {styles.text}>
        </TextBody>

      <ButtonPanel style = {styles.buttons}>
            <TestButton title = "Beginner" 
                      onPress={() => {
                          setDifficulty(0)
                          setDifficultyChosen(true);
                          }}>
              </TestButton>
              <TestButton title = "Intermediate" 
                      onPress={() => {
                          setDifficulty(1)
                          setDifficultyChosen(true);
                          }}>
              </TestButton>
              <TestButton title = "Advanced" 
                      onPress={() => {
                          setDifficulty(2)
                          setDifficultyChosen(true);
                          }}>
              </TestButton>
      </ButtonPanel>
      </View>)};

      {difficultyChosen && (
      <View style = {{flex: 1}}>
      <TextBody
            words = "Select your domain"
            style = {styles.text}>
      </TextBody>
        <ButtonPanel style = {styles.buttons}>
            <TestButton title = "Frontend" 
                      onPress={() => {
                          setDomain('frontend');
                          }}>
              </TestButton>
              <TestButton title = "Backend" 
                      onPress={() => {
                        setDomain('backend');
                          }}>
              </TestButton>
              <TestButton title = "Fullstack" 
                      onPress={() => {
                        setDomain('fullstack');
                          }}>
              </TestButton>
        </ButtonPanel> 
        </View>)}
  
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    },
    text: {
      flex: 1,
    },
    buttons: {
      flex: 7,
    }
});



