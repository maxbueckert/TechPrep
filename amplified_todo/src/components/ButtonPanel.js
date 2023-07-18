import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';

export default function BottomPanel({ children, style }){
  return (
    <View style={[styles.container, style]}>
    {children}
    </View>
  );
};

let {height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: height * 0.1,
    backgroundColor: '#F8F8F8', // Give it a background color so you can see it
  },
});