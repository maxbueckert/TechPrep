import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';

export default function TestButtonPanel({ children, style }){
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
    alignItems: 'center',
    backgroundColor: '#F8F8F8', 
  },
});