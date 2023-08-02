import { API, graphqlOperation} from 'aws-amplify';
import { createUser, createUserInput, updateUser, createScore } from '../../../graphql/mutations';
import { getUserByUsername, userResult , getUser} from '../../../graphql/queries';
import { Amplify } from 'aws-amplify';
import React from 'react';
import { Button, View, Text, StyleSheet} from 'react-native';
import AddScoreToUser from './AddScoreToUser';
import "../amplifyConfig";


export default async function GetUserFromID(userID) {

    try {
        let result = await API.graphql(graphqlOperation( getUser , {id : userID} ));
        console.log(result.data.getUser.username);
        console.log('geting user');
        return result.data.getUser.username;

    }
    catch {
        console.log("couldnt get user")
    }
}