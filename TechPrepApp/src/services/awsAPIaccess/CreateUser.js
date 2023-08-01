import { API, graphqlOperation} from 'aws-amplify';
import { createUser, createUserInput, updateUser, createScore } from '../../graphql/mutations';
import { getUserByUsername, userResult } from '../../graphql/queries';
import { Amplify } from 'aws-amplify';
import React from 'react';
import { Button, View, Text, StyleSheet} from 'react-native';
import AddScoreToUser from './AddScoreToUser';

export default async function CreateUser(username) {
    Amplify.configure({
      aws_appsync_authenticationType: 'API_KEY',
      aws_appsync_apiKey: 'KEY',
    });

    try {
        const CreateUserInput = {
            username: username
        }
        const response = await API.graphql(graphqlOperation(createUser, {username: username}));
        let id = response.data.createUser.id;
        console.log('User ID: ', id);
        return response.data.createUser.id;
    } catch (error) {
        console.error('!!! Error creating user:', error);
    }
}
