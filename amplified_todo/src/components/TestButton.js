import React from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';

export default function TestButton(props) {
  const { onPress, title = 'Save' } = props;
  return (
    <Pressable
    style={({ pressed }) => [
        styles.button,
        { opacity: pressed ? 0.7 : 1 }
      ]}
    onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 10,
    backgroundColor: 'black',
    width: '50%',
    height: '15%',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});
