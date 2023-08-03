import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { useTheme } from 'react-native-paper';

export default function TestConfigBottomPanel({ children, style }){
  const theme = useTheme();
  return (
    <View style={[styles.container, style, {backgroundColor: theme.colors.background}]}>
    {children}
    </View>
  );
};

let {height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingBottom: height * 0.1,
  },
});