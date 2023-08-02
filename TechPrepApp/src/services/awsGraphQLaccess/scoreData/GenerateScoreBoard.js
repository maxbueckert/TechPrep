import { API, graphqlOperation} from 'aws-amplify';
import { createUser, createUserInput, updateUser, createScore } from '../../../graphql/mutations';
import { getUserByUsername, userResult, listScores } from '../../../graphql/queries';
import { Amplify } from 'aws-amplify';
import React from 'react';
import { Button, View, Text, StyleSheet} from 'react-native';
import  CreateUser from './CreateUser';
import AddScoreToUser from './AddScoreToUser';
import "../amplifyConfig";


export default async function GetScores() {

    try {
        const response = await API.graphql(graphqlOperation(listScores));
        let scores = response.data.listScores.items;
        console.log('getting scores');
        return scores;
    } catch (error) {
        console.error('Error fetching scores:', error);
    }
}
