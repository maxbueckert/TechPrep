import React from 'react';
import { Button, View, Text, StyleSheet} from 'react-native';

import Title from '../components/Title';
import TextBody from '../components/TextBody';
import TestButton from '../components/TestButton';
import ButtonPanel from '../components/ButtonPanel';

import introText from '../hooks/IntroText'

export default function HomeScreen({ navigation }) {
  return (
    <View style = {styles.container}>
      <Title style = {styles.title}></Title>
        {/* <TextBody words = {introText} style = {styles.text}></TextBody> */}
          <ButtonPanel style = {styles.buttons}>
            <TestButton title = "Start New Test"></TestButton>
            <TestButton title = "Scoreboard"></TestButton>
            <TestButton title = "Settings"></TestButton>
          </ButtonPanel>

      {/* <Button
        title="Go to Details"
        onPress={() => navigation.navigate('StartTestScreen')}
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    },
    // text: {
    //   flex: .4,
    // },
    buttons : {
      flex: 1,
    }

});

