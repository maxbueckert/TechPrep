import React from 'react';
import { Button, View, Text, StyleSheet, Pressable, Dimensions} from 'react-native';

export default function StartTestButton({ onPress = () => {return null}, title = "Button" }) {
    return (
        <Pressable style={styles.circleButton} onPress={onPress}>
            <Text style={styles.buttonText}>{title}</Text>
        </Pressable>
    );
}

let {width} = Dimensions.get('window');
// let {height} = Dimensions.get('window'); // this line is unnecessary

const styles = StyleSheet.create({
    circleButton: {
        height: width * 0.7,
        width: width * 0.7,
        borderRadius: width * 0.35, // Half of width or height of the button
        backgroundColor: '#ff6347',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 20,
    },
});
