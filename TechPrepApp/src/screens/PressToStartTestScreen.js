import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet } from 'react-native';

import Title from '../components/Title';

import StartTestButton from '../components/StartTestButton';

export default function PressToStartTestScreen({navigation}) {
    return (
        <View style = {styles.container}>
            <Title backButtonFn={() => navigation.navigate('ConfigureTestScreen')}></Title>
            <View style = {styles.buttonContainer}>
                <StartTestButton></StartTestButton>
            </View>
        </View> 
    ); 
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        },
    buttonContainer: {
        flex: 8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#F8F8F8',
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

