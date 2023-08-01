import { API, graphqlOperation} from 'aws-amplify';
import { createUser, createUserInput, updateUser, createScore } from '../../graphql/mutations';
import { getUserByUsername, userResult } from '../../graphql/queries';
import { Amplify } from 'aws-amplify';
import React from 'react';
import { Button, View, Text, StyleSheet} from 'react-native';
import  CreateUser from './createUser';
import AddScoreToUser from './AddScoreToUser';
import GenerateScoreBoard from './GenerateScoreBoard';


export default async function CheckValidUserAndAddScore(username = 'newUsername', correct = 0, total = 0) {
  Amplify.configure({
    // Other configuration
    aws_appsync_authenticationType: 'API_KEY',
    aws_appsync_apiKey: 'KEY',
  });

  try {
    let response = await API.graphql(graphqlOperation(getUserByUsername, { username: username }));
        if (response.data.getUserByUsername.items[0]) {
          // username Exists
          console.log('found username: ' + response.data.getUserByUsername.items[0].username);
          console.log('found id: ' + response.data.getUserByUsername.items[0].id);
          AddScoreToUser(response.data.getUserByUsername.items[0].id, correct, total);
        } else {
          //userName does not exist
          console.log('not found');
          CreateUser(username).then(response => {AddScoreToUser(response, correct, total)});
        }
    
  }
    catch {
      console.log('error checking if valid user')
    }
  }

