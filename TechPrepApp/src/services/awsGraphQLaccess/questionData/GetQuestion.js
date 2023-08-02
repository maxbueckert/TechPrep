import { API, graphqlOperation} from 'aws-amplify';
import { createUser, createUserInput, updateUser, createScore } from '../../../graphql/mutations';
import { getQuestionDifficulty, getUserByUsername, userResult, getUser } from '../../../graphql/queries';
import { Amplify } from 'aws-amplify';
import React from 'react';
import { Button, View, Text, StyleSheet} from 'react-native';
import "../amplifyConfig";


export default async function GetQuestion(difficulty, domain) {
    try {
        let response = await API.graphql(graphqlOperation(getQuestionDifficulty, 
            {difficulty: difficulty}));
        if (!response.data.getQuestionDifficulty.items[0]) {
            throw error('no questions for this setting');
        }

        let randomNumber = Math.floor(Math.random() * response.data.getQuestionDifficulty.items.length);
        return {
            question: response.data.getQuestionDifficulty.items[randomNumber].question, 
            correctAnswer: response.data.getQuestionDifficulty.items[randomNumber].correctAnswer,
            wrongAnswerOne: response.data.getQuestionDifficulty.items[randomNumber].wrongAnswerOne,
            wrongAnswerTwo: response.data.getQuestionDifficulty.items[randomNumber].wrongAnswerTwo,
            wrongAnswerThree: response.data.getQuestionDifficulty.items[randomNumber].wrongAnswerThree,
        }


    } catch (error) {
        console.log('error getting question', error);
        // throw error;  // propagate the error
    }
}