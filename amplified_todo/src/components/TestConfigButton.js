import React from 'react';
import { Text, View, StyleSheet, Pressable, Dimensions } from 'react-native';

export default function TestConfigButton(props) {
  const { onPress, title = 'Save', style} = props;
  return (
    <Pressable
    style={({ pressed }) => [
        styles.button,
        style,
        { opacity: pressed ? 0.7 : 1 }
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
    borderRadius: 4,
    elevation: 10,
    backgroundColor: 'black',
    width: '70%',
    height: '15%',
    marginTop: height * 0.08,
    marginBottom: height * 0.03,
    
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});
