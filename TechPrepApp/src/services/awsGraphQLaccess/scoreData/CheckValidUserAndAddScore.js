import { API, graphqlOperation} from 'aws-amplify';
import { createUser, createUserInput, updateUser, createScore } from '../../../graphql/mutations';
import { getUserByUsername, userResult } from '../../../graphql/queries';
import { Amplify } from 'aws-amplify';
import React from 'react';
import { Button, View, Text, StyleSheet} from 'react-native';
import  CreateUser from './CreateUser';
import AddScoreToUser from './AddScoreToUser';
import GenerateScoreBoard from './GenerateScoreBoard';
import "../amplifyConfig";


export default async function CheckValidUserAndAddScore(username = 'newUsername', correct = 0, total = 0) {

  try {
    let response = await API.graphql(graphqlOperation(getUserByUsername, { username: username }));
        if (response.data.getUserByUsername.items[0]) {
          // username Exists
          AddScoreToUser(response.data.getUserByUsername.items[0].id, correct, total);
          console.log('found user, added score')
        } else {
          //userName does not exist
          console.log('user not found, creating user then adding score');
          CreateUser(username).then(response => {AddScoreToUser(response, correct, total)});
        }
    
  }
    catch {
      console.log('error checking if valid user or adding score')
    }
  }

