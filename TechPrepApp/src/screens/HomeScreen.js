import React from 'react';
import { Button, View, Text, StyleSheet} from 'react-native';

import Title from '../components/Title';
import TextBody from '../components/TextBody';
import TestButton from '../components/TestConfigButton';
import TestConfigBottomPanel from '../components/TestConfigButtonPanel';

import performCreateUser, {performActions} from '../services/awsAPIaccess/CheckValidUserAndAddScore';


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
 

export default function HomeScreen({ navigation }) {
  return (
    <View style = {styles.container}>
      <Title home = {true}></Title>
        <TextBody words = {"Main Menu"} style = {styles.text}></TextBody>
          <TestConfigBottomPanel style = {styles.buttons}>
            <TestButton title = "Start New Test" onPress={() => navigation.navigate('ConfigureTestScreen')}></TestButton>
            <TestButton title = "Scoreboard" onPress={() => navigation.navigate('ScoreBoardScreen')}></TestButton>
            <TestButton title = "Settings"></TestButton>
          </TestConfigBottomPanel>
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

