import React from 'react';
import { View, StyleSheet} from 'react-native';

import Title from '../components/Title';
import TextBody from '../components/TextBody';
import TestButton from '../components/TestConfigButton';
import TestConfigBottomPanel from '../components/TestConfigButtonPanel';
 

export default function HomeScreen({ navigation }) {
  return (
    <View style = {styles.container}>
      <Title home = {true}></Title>
          <TestConfigBottomPanel style = {styles.buttons}>
            <TestButton icon = 'head-question-outline' title = "Start New Test" onPress={() => navigation.navigate('ConfigureTestScreen')}></TestButton>
            <TestButton icon = 'view-list-outline' title = "Scoreboard" onPress={() => navigation.navigate('ScoreBoardScreen')}></TestButton>
            <TestButton icon = 'cog-outline' title = "Settings" onPress={() => navigation.navigate('ScoreBoardScreen')}></TestButton>
          </TestConfigBottomPanel>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    },
    text: {
      flex: 1,
    },
    buttons : {
      flex: 7,
    }

});

