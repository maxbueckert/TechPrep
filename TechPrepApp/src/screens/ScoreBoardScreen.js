import React, { useEffect , useState } from 'react';
import { Button, View, Text, StyleSheet, Dimensions} from 'react-native';

import Title from '../components/Title';
import TextBody from '../components/TextBody';
import TestButton from '../components/TestConfigButton';
import TestConfigBottomPanel from '../components/TestConfigButtonPanel';

import performCreateUser, {performActions} from '../services/awsAPIaccess/CheckValidUserAndAddScore';


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import GenerateScoreBoard from '../services/awsAPIaccess/GenerateScoreBoard';
import GetUserFromID from '../services/awsAPIaccess/GetUserFromID';
 

export default function ScoreBoardScreen({ navigation }) {
  const [scores, setScores] = useState([]);
  const [idMap, setIdMap] = useState({});

  async function fetchScores() {
   let newScores = await GenerateScoreBoard();
   await setUpIdMap(newScores);
   setScores(newScores);
  }

  async function setUpIdMap(newScores) {
    let curMap = {...idMap}; // create a new copy
    for (let i = 0; i < newScores.length; i++) {
      let id = newScores[i].userScoresId;
      console.log(id);
      if (id) {
        let username = await GetUserFromID(id);
        curMap[id] = username;
      }
    }
    setIdMap(curMap); // set the updated map to the state
  }
  

  useEffect(() => {
    fetchScores();
  }, []);

  return (
    <View style = {styles.container}>
      <Title home = {false}></Title>
        <TextBody words = {"ScoreBoard"} style = {styles.text}></TextBody>
        <View style = {styles.mapbox}>
        {scores.map((score, index) => (
          <View style = {styles.scoreContainer} key = {index}>
            <Text style ={styles.entry}> {"Score: "+ score.correct + ' / ' + score.total} </Text>
            <Text style ={styles.entry}> {score.userScoresId ? "User: " + idMap[score.userScoresId] :null }</Text>
            <Text style ={styles.entry}> {score.date ? "Date: " + score.date.split('T')[0] : null}</Text>
          </View>
        ))}
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    },
    scoreContainer : {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    entry: {
      width: Dimensions.get('window').width * 0.33333,
      textAlign: 'center',
      margin: 5,
    },
    mapbox: {
      flex:8,
    }


});

