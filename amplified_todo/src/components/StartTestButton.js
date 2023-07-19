import React, { useState, useEffect } from 'react';
import { Button, View, Text, StyleSheet, Pressable, Dimensions} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function StartTestButton({style}) {
    const [count, setCount] = useState(null);
    const [buttonDisabled, setButtonDisabled] = useState(false);

    const navigation = useNavigation();
    useEffect(() => {
      if (count) {
        const timerId = setInterval(() => {
          setCount((currentCount) => currentCount - 1);
        }, 1000);
        return () => clearInterval(timerId);
      }
    }, [count]);

    useEffect(() => {
        if (count == 0) {
            navigation.navigate('MultipleChoiceTestScreen');
        }
    })

    const handlePress = () => {
      setCount(3);
      setButtonDisabled(true);
    };

    return (
        <Pressable style={styles.circleButton} onPress={buttonDisabled? null : handlePress}>
            <Text 
            style={styles.buttonText}>
            {count > 0 ? count: 'Press to Begin Test'}
            </Text>
        </Pressable>
    );
}

let {height} = Dimensions.get('window');

const styles = StyleSheet.create({
    circleButton: {
        height: height * 0.4,
        width: height * 0.4,
        borderRadius: height * 0.2, // Half of width or height of the button
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 20,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        textAlign: 'center',
    },
});
