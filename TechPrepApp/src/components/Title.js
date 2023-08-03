import React from 'react';
import { View, Text, StyleSheet, Dimensions, Platform } from 'react-native';
import { Appbar } from 'react-native-paper';
import { useTheme } from 'react-native-paper';

import { useNavigation } from '@react-navigation/native';


import TitleButton from '../components/TitleButton';
import { nav } from 'aws-amplify';

// export default function Title({ style, home = false, backButtonFn = () => {}, forwardButtonFn = () => {}, validB = true, validF = false, mcScreen = false}){
  // const navigation = useNavigation();
//   let {height} = Dimensions.get('window');
//   return (
//     <View style={[styles.container, style, home? styles.adjustedSize : null, Platform.OS == 'web' ? {height : 0.15 * height} : {height : 0.16 * height}]}>
//       {!home && <TitleButton fn="back" onPress = {backButtonFn} validB = {validB}/>}
//       <View style={styles.titleContainer}>
//         <Text style={styles.text}>TechPrep</Text>
//       </View>
//       {!home && !mcScreen && <TitleButton fn="home" onPress = {() => navigation.navigate('HomeScreen')}/>}
//       {mcScreen && <TitleButton fn="forward" onPress = {forwardButtonFn} validF = {validF}></TitleButton>}
//     </View>
//   );
// } 

const Title = ({style, home, backButtonFn, mcScreen}) => {
  const theme = useTheme();
  const navigation = useNavigation();
  return (
    <Appbar.Header elevatated = {true} mode = {'small'}>
    <Appbar.BackAction onPress={backButtonFn} disabled = {home || mcScreen? true:false} />
    <Appbar.Content title="TechPrep" />
    <Appbar.Action icon='home-circle' onPress={() => {navigation.navigate('HomeScreen')}} disabled = {home ?true:false} />
    <Appbar.Action icon='cog' onPress={() =>  {}} />
  </Appbar.Header>
  )
}


export default Title;
 

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: '#89CFF0',
//     flexDirection: 'row',
//     padding: 20,
//     alignItems: 'flex-end',
//     justifyContent: 'flex-end',
//     // flex: 1,
//     height: 15
//   },
//   titleContainer: {
//     flex: 1,
//     alignItems: 'center',
//   },
//   text: {
//     fontSize: 40, // Adjust the font size as needed
//   },
//   adjustedSize: {
//     // flex:1.14,
//   }
// });
