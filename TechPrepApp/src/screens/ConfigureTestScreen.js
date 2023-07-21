
import { Button, View, Text, StyleSheet } from 'react-native';
import React, { useState } from 'react';

import Title from '../components/Title';
import TextBody from '../components/TextBody';
import TestConfigBottomPanel from '../components/TestConfigButtonPanel';
import TestButton from '../components/TestConfigButton';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function ConfigureTestScreen({navigation}) {

  const [difficulty, setDifficulty] = useState(0);
  const [domain, setDomain] = useState(null);

  const [difficultyChosen, setDifficultyChosen] = useState(false);

  return (
    <View style = {styles.container}>
      <Title backButtonFn = {() => navigation.navigate('HomeScreen')}></Title>

      {!difficultyChosen && (
        <View style={{flex: 8}}>
          <TextBody words = "Select your difficulty" style = {styles.text}/>
          <TestConfigBottomPanel style = {styles.buttons}>
            <TestButton title = "Beginner" onPress={() => { setDifficulty("beginner"); setDifficultyChosen(true); }}/>
            <TestButton title = "Intermediate" onPress={() => { setDifficulty("intermediate"); setDifficultyChosen(true); }}/>
            <TestButton title = "Advanced" onPress={() => { setDifficulty("expert"); setDifficultyChosen(true); }}/>
          </TestConfigBottomPanel>
        </View>
      )}

      {difficultyChosen && (
        <View style={{flex: 8}}>
          <TextBody words = "Select your domain" style = {styles.text}/>
          <TestConfigBottomPanel style = {styles.buttons}>
            <TestButton title = "Frontend" onPress={() => { setDomain('frontend'); navigation.navigate('PressToStartTestScreen')}}/>
            <TestButton title = "Backend" onPress={() => { setDomain('backend'); navigation.navigate('PressToStartTestScreen') }}/>
            <TestButton title = "Fullstack" onPress={() => { setDomain('fullstack');navigation.navigate('PressToStartTestScreen')}}/>
          </TestConfigBottomPanel>
        </View>
      )}
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



