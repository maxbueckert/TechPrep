import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet } from 'react-native';

import Title from '../components/Title';

import StartTestButton from '../components/StartTestButton';

export default function TestScreen({ onPress = () => {return null}, title = "Button" }) {
    return (
        <View style = {styles.container}>
            <Title></Title>
            <StartTestButton></StartTestButton>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        },
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

