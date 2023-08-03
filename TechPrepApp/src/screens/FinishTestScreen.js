import React, { useEffect, useState, useRef } from 'react';
import {View, TouchableOpacity, Text, StyleSheet, Modal } from 'react-native';

import Title from '../components/Title';

import StartTestButton from '../components/StartTestButton';
import TestConfigButtonPanel from '../components/TestConfigButtonPanel';
import TestConfigButton from '../components/TestConfigButton';
import SignInPopup from '../components/SignInPopup';

export default function FinishTestScreen({navigation, route}) {

    const [signInPopUp, setSignInPopUp] = useState(false);

    let {correctAnswers, totalAnswers} = route.params;
    if (!correctAnswers) {
        correctAnswers = 0;
    }
    if (!totalAnswers) {
        totalAnswers = 0;
    }


    return (
        <View style = {styles.container}>
            <Title mcScreen = {true}></Title>
            <TestConfigButtonPanel style = {styles.buttonContainer}>
            <Text style = {styles.text}>{"Final Score: " + correctAnswers + " / " + totalAnswers}</Text>
                <TestConfigButton title = {"Save to Scoreboard"} onPress = {() => setSignInPopUp(true)}></TestConfigButton>
                <TestConfigButton title = {"Main Menu"} onPress={()=>navigation.navigate('HomeScreen')}></TestConfigButton>
            </TestConfigButtonPanel>


            <Modal visible={signInPopUp} animationType="slide" transparent>
                <View style = {styles.popupContainer}>
                <SignInPopup
                    style = {styles.popupContent}
                    onPress = {() => setSignInPopUp(false)}
                    correct = {correctAnswers}
                    total = {totalAnswers}
                    ></SignInPopup> 
                <TouchableOpacity>
                    <Text>Close Popup</Text>
                </TouchableOpacity>
            </View>
        </Modal>

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
        alignItems: 'center',
        backgroundColor:'#F8F8F8',
    },
    text: {
        fontSize: 30,
    },
    popupContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Transparent background overlay
      },
      popupContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
      },
});

