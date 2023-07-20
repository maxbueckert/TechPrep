import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet } from 'react-native';

import Title from '../components/Title';

import StartTestButton from '../components/StartTestButton';
import TestConfigButtonPanel from '../components/TestConfigButtonPanel';
import TestConfigButton from '../components/TestConfigButton';

export default function FinishTestScreen({navigation, route}) {
    let {correctAnswers, totalAnswers} = route.params;
    if (!correctAnswers) {
        correctAnswers = 0;
    }
    if (!totalAnswers) {
        totalAnswers = 0;
    }
    console.log(correctAnswers);
    console.log(totalAnswers);
    return (
        <View style = {styles.container}>
            <Title validB = {false}></Title>
            <TestConfigButtonPanel style = {styles.buttonContainer}>
            <Text style = {styles.text}>{"Final Score: " + correctAnswers + " / " + totalAnswers}</Text>
                <TestConfigButton title = {"Save to Scoreboard"}></TestConfigButton>
                <TestConfigButton title = {"Main Menu"} onPress={()=>navigation.navigate('HomeScreen')}></TestConfigButton>
            </TestConfigButtonPanel>
        </View> 
    ); 
} 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        },
    buttonContainer: {
        flex: 7,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#F8F8F8',
    },
    text: {
        fontSize: 30,
    }
});

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     },
//     text: {
//       flex: 1,
//     },
//     buttons : {
//       flex: 7,
//     }

// });

