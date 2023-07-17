import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';

import TitleButton from '../components/TitleButton';

export default function Title({ style, home = false }) {
  // const { height } = Dimensions.get('window');
  // const titleHeight = height * 0.15; // 15% of the screen height
  const navigation = useNavigation();
  return (
    <View style={[styles.container, style, home? styles.adjustedSize : null]}>
      {!home && <TitleButton fn="back" />}
      <View style={styles.titleContainer}>
        <Text style={styles.text}>TechPrep</Text>
      </View>
      {!home && <TitleButton fn="home" onPress = {() => navigation.navigate('HomeScreen')}/>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffa',
    flexDirection: 'row',
    padding: 20,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    flex: 1,
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
  },
  text: {
    fontSize: 40, // Adjust the font size as needed
  },
  adjustedSize: {
    flex:1.14,
  }
});
