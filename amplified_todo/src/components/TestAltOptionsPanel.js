import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';

import TestScoreIcon from '../components/TestScoreIcon';


import FinishTestButton from '../components/FinishTestButton';

export default function TestAltOptionsPanel({style, correctAnswers, totalAnswers}) {
  const navigation = useNavigation();
  return (
    <View style={[styles.container, style]}>
        <TestScoreIcon correctAnswers = {correctAnswers} totalAnswers = {totalAnswers}></TestScoreIcon>
        <FinishTestButton correctAnswers = {correctAnswers} totalAnswers = {totalAnswers}></FinishTestButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#89CFF0',
    flexDirection: 'row',
    padding: 20,
    paddingHorizontal: 30,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
