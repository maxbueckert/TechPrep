import React from 'react';
import { View, Text, StyleSheet, Dimensions, Platform } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';

import TitleButton from '../components/TitleButton';

export default function Title({ style, home = false, backButtonFn = () => {}, forwardButtonFn = () => {}, validB = true, validF = false, mcScreen = false}){
  const navigation = useNavigation();
  let {height} = Dimensions.get('window');
  return (
    <View style={[styles.container, style, home? styles.adjustedSize : null, Platform.OS == 'web' ? {height : 0.12 * height} : {height : 0.16 * height}]}>
      {!home && <TitleButton fn="back" onPress = {backButtonFn} validB = {validB}/>}
      <View style={styles.titleContainer}>
        <Text style={styles.text}>TechPrep</Text>
      </View>
      {!home && !mcScreen && <TitleButton fn="home" onPress = {() => navigation.navigate('HomeScreen')}/>}
      {mcScreen && <TitleButton fn="forward" onPress = {forwardButtonFn} validF = {validF}></TitleButton>}
    </View>
  );
} 

 

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#89CFF0',
    flexDirection: 'row',
    padding: 20,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    // flex: 1,
    height: 15
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
  },
  text: {
    fontSize: 40, // Adjust the font size as needed
  },
  adjustedSize: {
    // flex:1.14,
  }
});
