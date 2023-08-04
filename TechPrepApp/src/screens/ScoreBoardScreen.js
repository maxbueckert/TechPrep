import React, { useEffect , useState, useRef} from 'react';
import { Button, View, Text, StyleSheet, Dimensions, ScrollView} from 'react-native';

import Title from '../components/Title';
import TextBody from '../components/TextBody';
import TestButton from '../components/TestConfigButton';
import TestConfigBottomPanel from '../components/TestConfigButtonPanel';

import performCreateUser, {performActions} from '../services/awsGraphQLaccess/scoreData/CheckValidUserAndAddScore';


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

import GenerateScoreBoard from '../services/awsGraphQLaccess/scoreData/GenerateScoreBoard';
import GetUserFromID from '../services/awsGraphQLaccess/scoreData/GetUserFromID';
 

// export default function ScoreBoardScreen({ navigation }) {
  // const [scores, setScores] = useState([]);
  // const [idMap, setIdMap] = useState({});

  // const [loaded, setLoaded] = useState(false);

  // async function fetchScores() {
  //  let newScores = await GenerateScoreBoard();
  //  await setUpIdMap(newScores);
  //  setScores(newScores);
  // }

  // async function setUpIdMap(newScores) {
  //   let curMap = {...idMap}; // create a new copy
  //   for (let i = 0; i < newScores.length; i++) {
  //     let id = newScores[i].userScoresId;
  //     console.log(id);
  //     if (id) {
  //       let username = await GetUserFromID(id);
  //       curMap[id] = username;
  //     }
  //   }
  //   setIdMap(curMap); // set the updated map to the state
  // }
  

  // useEffect(() => {
  //   fetchScores();
  // }, []);

  // const initialRender = useRef(true);

  // useEffect(() => {
  //   if (initialRender.current) {
  //     initialRender.current = false;
  //   } else {
  //     setLoaded(true);
  //   }
  // }, [scores]);

//   return (
//     <View style = {styles.container}>
//       <Title home = {false}></Title>
//         <TextBody words = {loaded? "ScoreBoard" : "Loading ScoreBoard"} style = {styles.text} tick = {loaded? false : true}></TextBody>
//         <View style = {styles.mapbox}>
//         {scores.map((score, index) => (
//           <View style = {styles.scoreContainer} key = {index}>
//             <Text style ={styles.entry}> {"Score: "+ score.correct + ' / ' + score.total} </Text>
//             <Text style ={styles.entry}> {score.userScoresId ? "User: " + idMap[score.userScoresId] :null }</Text>
//             <Text style ={styles.entry}> {score.date ? "Date: " + score.date.split('T')[0] : null}</Text>
//           </View>
//         ))}
//         </View>
//     </View>
//   );
// }


// import * as React from 'react';
import { DataTable, useTheme  } from 'react-native-paper';
import { loadingBar } from 'aws-amplify';

const MyComponent = () => {

  const [scores, setScores] = useState([]);
  const [idMap, setIdMap] = useState({});

  const [loaded, setLoaded] = useState(false);

  const navigation = useNavigation();

  const theme = useTheme();

  const [page, setPage] = useState(0);
  const [numberOfItemsPerPageList] = useState([5, 10, 15, 30, 50, 100]);
  const [itemsPerPage, onItemsPerPageChange] = useState(
    numberOfItemsPerPageList[1]
  );

  const initialRender = useRef(true);

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


  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
    } else {
      setLoaded(true);
    }
  }, [scores]);


  useEffect(() => {
    setPage(0);
  }, [itemsPerPage]);


  const from = page * itemsPerPage;
  const to = Math.min((page + 1) * itemsPerPage, scores.length);


  return (
    <ScrollView style = {{backgroundColor:theme.colors.background}}>
    <Title backButtonFn={() => navigation.navigate("HomeScreen")}></Title>
    {!loaded && (
      <TextBody words = {"Loading..."}></TextBody>
    )}
    {loaded && (
    <DataTable style = {{flex:1}}>
      <DataTable.Header style = {{backgroundColor:theme.colors.inverseOnSurface}}>
        <DataTable.Title >Score</DataTable.Title>
        <DataTable.Title >Username</DataTable.Title>
        <DataTable.Title >Domain</DataTable.Title>
        <DataTable.Title >Difficulty</DataTable.Title>
        <DataTable.Title >Date</DataTable.Title>
      </DataTable.Header>

      {scores.slice(from, to).map((item) => (
        <DataTable.Row style = {{backgroundColor:theme.colors.background}} key={item.id}>
          <DataTable.Cell >{item.correct + ' / ' + item.total}</DataTable.Cell>
          <DataTable.Cell>{idMap[item.userScoresId]}</DataTable.Cell>
          <DataTable.Cell>{"N/A"}</DataTable.Cell>
          <DataTable.Cell>{"N/A"}</DataTable.Cell>
          <DataTable.Cell >{item.date? item.date.split('T')[0]: "N/A"}</DataTable.Cell>
        </DataTable.Row>
      ))}

      <DataTable.Pagination
      style = {{backgroundColor:theme.colors.surface}}
        page={page}
        numberOfPages={Math.ceil(scores.length / itemsPerPage)}
        onPageChange={(page) => setPage(page)}
        label={`${from + 1}-${to} of ${scores.length}`}
        numberOfItemsPerPageList={numberOfItemsPerPageList}
        numberOfItemsPerPage={itemsPerPage}
        onItemsPerPageChange={onItemsPerPageChange}
        showFastPaginationControls
        selectPageDropdownLabel={'Rows per page'}
      />
    </DataTable>
    )}
    </ScrollView>
  )
};

export default MyComponent;

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

