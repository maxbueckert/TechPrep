import { API, graphqlOperation} from 'aws-amplify';
import { createUser, createUserInput, updateUser, createScore } from '../../../graphql/mutations';
import { getUserByUsername, userResult } from '../../../graphql/queries';
import { Amplify } from 'aws-amplify';
import React from 'react';
import { Button, View, Text, StyleSheet} from 'react-native';
import AddScoreToUser from './AddScoreToUser';
import "../amplifyConfig";

export default async function CreateUser(username) {
    try {
        const CreateUserInput = {
            username: username
        }
        const response = await API.graphql(graphqlOperation(createUser, {input: {username: username}}));
        let id = response.data.createUser.id;
        return response.data.createUser.id;
    } catch (error) {
        console.error('Error creating user:', error);
    }
}
