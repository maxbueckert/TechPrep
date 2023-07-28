import { API, graphqlOperation} from 'aws-amplify';
import { createUser, createUserInput, updateUser, createScore } from '../../graphql/mutations';
import { getUserByUsername, userResult } from '../../graphql/queries';
import { Amplify } from 'aws-amplify';
import React from 'react';
import { Button, View, Text, StyleSheet} from 'react-native';


export default async function performCreateUser() {
  // Replace "newUsername" with the actual username

  Amplify.configure({
    // Other configuration
    aws_appsync_authenticationType: 'API_KEY',
    aws_appsync_apiKey: 'KEY',
  });

  try {
    const username = "newUsername";

    // Prepare the input for the createUser mutation
    const createUserInput = {
      username: username
    };

    // Execute the createUser mutation
    const result = await API.graphql({
      query: createUser,
      variables: { input: createUserInput },
    });

    console.log(result);
  } catch (error) {
    console.error("Error creating user:", error);
    if (error.errors && error.errors.length > 0) {
        console.error("GraphQL Errors:", error.errors);
    }
}
}



export async function performActions() {
  Amplify.configure({
    // Other configuration
    aws_appsync_authenticationType: 'API_KEY',
    aws_appsync_apiKey: 'KEY',
  });

  const usernameToQuery = 'newUsername';

  API.graphql(graphqlOperation(getUserByUsername, { username: usernameToQuery }))
      .then(response => {
          const users = response.data.getUserByUsername.items;
          users.forEach(user => {
              console.log(user.username);
          });
      })
      .catch(err => console.error(err));
  // const username = "newUsername";

  // // Get the user by username
  // const userResult = await API.graphql({
  //   query: getUserByUsername,
  //   variables: { username },
  // }); 
  // let user = userResult;
  // console.log(user.items[1]);
  // return;
  // const user = userResult.data.getUserByUsername.items[0];
  // const user = userResult.data.getUserByUsername.items;

  // if (user) {
  //   const userId = user.id;

  //   // Update the user
  //   const updateUserInput = {
  //     id: userId,
  //     username: "newUsername"
  //   };

  //   const updateUserResult = await API.graphql({
  //     query: updateUser,
  //     variables: { input: updateUserInput },
  //   });

  //   // Create a score for the user
  //   const createScoreInput = {
  //     correct: 10,
  //     total: 10,
  //     date: "2023-07-27T20:00:00Z",
  //     userId: userId,
  //   };

  //   const createScoreResult = await API.graphql({
  //     query: createScore,
  //     variables: { input: createScoreInput },
  //   });
  // } else {
  //   console.log("User not found");
  // }
}

