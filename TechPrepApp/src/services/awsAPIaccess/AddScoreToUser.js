import { API, graphqlOperation} from 'aws-amplify';
import { createUser, createUserInput, updateUser, createScore } from '../../graphql/mutations';
import { getUserByUsername, userResult, getUser } from '../../graphql/queries';
import { Amplify } from 'aws-amplify';
import React from 'react';
import { Button, View, Text, StyleSheet} from 'react-native';


export default async function AddScoreToUser(userid, correct, total) {
    Amplify.configure({
        // Other configuration
        aws_appsync_authenticationType: 'API_KEY',
        aws_appsync_apiKey: 'KEY',
      });

    try {
        let now = new Date
        await API.graphql(graphqlOperation(createScore, {input: {correct: correct, total: total, userScoresId: userid, date:now.toISOString()}}));
    } catch (error) {
        console.log('error adding score', error);
        throw error;  // propagate the error
    }
}