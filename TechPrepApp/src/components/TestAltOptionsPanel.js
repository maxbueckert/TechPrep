import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';

import TestScoreIcon from '../components/TestScoreIcon';

import { ProgressBar, MD3Colors } from 'react-native-paper';

import FinishTestButton from '../components/FinishTestButton';

// export default function TestAltOptionsPanel({style, correctAnswers, totalAnswers}) {
//   const navigation = useNavigation();
//   return (
//     <View style={[styles.container, style]}>
//         <TestScoreIcon correctAnswers = {correctAnswers} totalAnswers = {totalAnswers}></TestScoreIcon>
//         <FinishTestButton correctAnswers = {correctAnswers} totalAnswers = {totalAnswers}></FinishTestButton>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: '#89CFF0',
//     flexDirection: 'row',
//     padding: 20,
//     paddingHorizontal: 30,
//     alignItems: 'center',
//     justifyContent: 'space-between',
//   },
// });


import { Button, Appbar, FAB, useTheme } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';






const TestAltOptionsPanel = ({style, correctAnswers, totalAnswers, validF, validB, backfn, forwardfn}) => {
  const { bottom } = useSafeAreaInsets();
  const theme = useTheme();
  const navigation = useNavigation();
  return (
    <View 
      style={[
        style,
        styles.bottom,
        {backgroundColor: theme.colors.elevation.level2},
      ]}
      safeAreaInsets={{ bottom }}
    > 
      <Button disabled = {validB? false: true} icon="step-backward" onPress={backfn} />

      <FAB
        icon="check-all"
        label = "Submit"
        size = 'large'
        onPress={() => navigation.navigate('FinishTestScreen', {correctAnswers : correctAnswers, totalAnswers: totalAnswers})}> </FAB>
    
      <Button disabled = {validF? false: true} icon="step-forward"  onPress={forwardfn}/>
    </View>
  );
};

const styles = StyleSheet.create({
  bottom: {
    flexDirection: 'row',
    backgroundColor: 'aquamarine',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 30,
    height: 110,

  },
});

export default TestAltOptionsPanel;