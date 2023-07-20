import React from 'react';
import { Text, View, StyleSheet, Pressable, Dimensions } from 'react-native';

export default function TestButton(props) {
  const { onPress, title = 'Save', style} = props;
  return (
    <Pressable
    style={({ pressed }) => [
        styles.button,
        style,
        { opacity: pressed ? 0.4 : 0.7 }
      ]}
    onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
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
    borderBottomColor: 'black',
    borderWidth: 1,
    width: '100%',
    flex:1,
    
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'black',
    opacity: 1,
    textAlign: 'center',
  },
});
