import { Text, View, TouchableOpacity, TextInput, StyleSheet} from 'react-native';
import React, { useEffect, useState, useRef } from 'react';
import CheckValidUserAndAddScore from '../services/awsGraphQLaccess/scoreData/CheckValidUserAndAddScore';

function SignInPopup({style, onPress, correct, total}) {
    const [userText, setUserText] = useState('');

    const [submitted, setSubmitted] = useState(false);

    const onChangeText = (inputText) => {
        setUserText(inputText);
    };

    const submitUserName = () => {

        CheckValidUserAndAddScore(userText, correct, total);
        setSubmitted(true);
        setTimeout(() => onPress(), 2000);
    }

    return (
      <View style = {style}>
        
        {!submitted && (
        <View> 
        <Text style = {styles.instruction}>Enter your name</Text>
        <TextInput 
                style = {styles.input}
                placeholder = {'...'}
                value = {userText}
                onChangeText = {onChangeText}
                >
        </TextInput>


        <View style = {styles.buttons}>

            <TouchableOpacity onPress={onPress}>
            <Text>Cancel</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                style = {styles.buttonStyle}
                onPress={submitUserName}>
            <Text>Submit</Text>
            </TouchableOpacity>
        </View>

        </View>
        )}

        {submitted && (
            <View>
                <Text
                style = {{fontSize:15}}>
                    Your Score Has Been Saved</Text> 
            </View>
        )}


      </View>
    );
  };

  const styles = StyleSheet.create({
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 10,
    },
    buttonStyle: {
        margin: 7,
    },
    instruction: {
        margin: 10,
        fontSize: 20,
    }, 
    input: {
        borderColor: 'black',
        padding: 5,
    }
  });

  export default SignInPopup;