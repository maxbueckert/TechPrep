import React from 'react';
import { Button, View, Text, StyleSheet} from 'react-native';

import Title from '../components/Title';
import TextBody from '../components/TextBody';
import TestButton from '../components/TestButton';
import ButtonPanel from '../components/ButtonPanel';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import introText from '../hooks/IntroText'

export default function HomeScreen({ navigation }) {
  return (
    <View style = {styles.container}>
      <Title home = {true} ></Title>
        <TextBody words = {introText} style = {styles.text}></TextBody>
          <ButtonPanel style = {styles.buttons}>
            <TestButton title = "Start New Test" onPress={() => navigation.navigate('StartTestScreen')}></TestButton>
            <TestButton title = "Scoreboard"></TestButton>
            <TestButton title = "Settings"></TestButton>
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

