import React from 'react';
import { Text, View, StyleSheet, Pressable, Dimensions } from 'react-native';
import { useTheme } from 'react-native-paper';


export default function TestButton(props) {
  const { onPress, title = 'Save', style, bottom} = props;
  const theme = useTheme();
  return (
    <Pressable
    style={[({ pressed }) => [
        { opacity: pressed ? 0.4 : 1.0 },
        {borderBottomWidth: pressed? 0.0 : 1.0}
      ], 
      styles.button,
      style, 
      bottom? {borderBottomWidth: 0} : {borderBottomWidth: 1},
      {borderBottomColor: theme.colors.outlineVariant}]}
    onPress={onPress}>
      <Text style={[styles.text, theme.colors.theme == "light" ? {color:'black'} : {color:'white'}]}>{title}</Text>
    </Pressable>
  );
}
let {height} = Dimensions.get('window');


const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    backgroundColor: '#F8F8F8',
    borderTopColor:'#F8F8F8',
    width: '100%',
    flex:1,
    
  },
  text: {
    fontSize: 14,
    lineHeight: 21,
    letterSpacing: 0.25,
    // color: 'black',
    opacity: 1,
    textAlign: 'center',
  },
});
