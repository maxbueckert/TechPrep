import React from 'react';
import { View, StyleSheet } from 'react-native';

export default function BottomPanel({ children, style }){
  return (
    <View style={[styles.container, style]}>
    {children}
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    // paddingTop: 70,
    // paddingBottom: 120,
    backgroundColor: '#fee', // Give it a background color so you can see it
  },
});