import React from 'react';
import { Button, View, Text, StyleSheet, Pressable} from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';

export default function FinishTestButton({correctAnswers, totalAnswers}) {
    const navigation = useNavigation();
    return (
       <View style = {styles.container}>
        <Pressable onPress = {() => navigation.navigate('FinishTestScreen', {correctAnswers : correctAnswers, totalAnswers: totalAnswers})}>
            <Text style = {styles.text}>
                Finish Test
            </Text>
        </Pressable>
       </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'flex-end',
        alignItems: 'center',
        flexDirection: 'row',
        flex: 1,
    },
    text: {
        fontSize: 15,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'black',
        textAlign: 'center',
    }

});