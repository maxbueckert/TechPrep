import { API, graphqlOperation} from 'aws-amplify';
import { createUser, createUserInput, updateUser, createScore } from '../../graphql/mutations';
import { getUserByUsername, userResult, listScores } from '../../graphql/queries';
import { Amplify } from 'aws-amplify';
import React from 'react';
import { Button, View, Text, StyleSheet} from 'react-native';
import  CreateUser from './createUser';
import AddScoreToUser from './AddScoreToUser';


export default async function GetScores() {
    Amplify.configure({
      aws_appsync_authenticationType: 'API_KEY',
      aws_appsync_apiKey: 'KEY',
    });

    try {
        const response = await API.graphql(graphqlOperation(listScores));
        console.log('fetched scores');
        let scores = response.data.listScores.items;
        console.log('Scores:', scores);
        return scores;
    } catch (error) {
        console.error('Error fetching scores:', error);
    }
}
