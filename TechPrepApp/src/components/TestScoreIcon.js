import React from 'react';
import { Button, View, Text, StyleSheet, Pressable} from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 

export default function TestScoreIcon({correctAnswers, totalAnswers}) {

    return (
       <View style = {styles.container}>
        <Text style = {styles.text}> {correctAnswers}  / </Text>
        <Text style = {styles.text}> {totalAnswers} </Text>
       </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
        flex: 1,
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'black',
        textAlign: 'center',
    }

});