import { API, graphqlOperation} from 'aws-amplify';
import { createQuestion, createUser, createUserInput, updateUser, createScore } from '../../../graphql/mutations';
import { getUserByUsername, userResult, getUser } from '../../../graphql/queries';
import { Amplify } from 'aws-amplify';
import React from 'react';
import { Button, View, Text, StyleSheet} from 'react-native';
import "../amplifyConfig";

export default async function StoreQuestion(questionObject) {
    let {question, correctAnswer, wrongAnswerOne, wrongAnswerTwo, wrongAnswerThree, difficulty, domain} = questionObject;
    try {
        const result = await API.graphql(graphqlOperation(createQuestion, { input: {
          question: question,
          correctAnswer: correctAnswer,
          wrongAnswerOne: wrongAnswerOne,
          wrongAnswerTwo: wrongAnswerTwo,
          wrongAnswerThree: wrongAnswerThree,
          difficulty: difficulty,
          domain: domain,
        }}));
        console.log(result); // check if mutation was successful
    } catch (error) {
        console.log('Error storing question: ', error);
    }      
}

