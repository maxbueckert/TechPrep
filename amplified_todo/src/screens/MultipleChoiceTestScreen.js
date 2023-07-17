import React, { useEffect, useState } from 'react';
import { Button, View, Text, StyleSheet} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Title from '../components/Title';
import TextBody from '../components/TextBody';
import TestButton from '../components/TestButton';
import ButtonPanel from '../components/ButtonPanel';


import getChatGptQuestion from '../hooks/getChatGptQuestion'

export default function MultipleChoiceTestScreen({ navigation }) {

    const [question, setQuestion] = useState(null);

    useEffect(() => {
        setQuestion(getChatGptQuestion());
    }, []);


    return (
    <View style = {styles.container}>
        <Title></Title>
        <TextBody words = {question} style = {styles.text}></TextBody>
            <ButtonPanel style = {styles.buttons}>
            <TestButton title = "Start New Test" onPress={() => navigation.navigate('ConfigureTestScreen')}></TestButton>
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

