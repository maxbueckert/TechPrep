import React from 'react';
import { Button, View, Text, StyleSheet, Pressable} from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 



export default function TitleButton({onPress, fn, validB = true, validF = true}) {
    return (
        <Pressable style={styles.container}
        onPress = {onPress}>
            {fn == "back" && (
            <AntDesign name="leftcircleo" size={24} color="black" style = {[validB? null : {opacity : 0.3}, styles.button]} />
            )}
            {fn == "forward" && (
            <AntDesign name="rightcircleo" size={24} color="black" style = {[validF? null : {opacity : 0.3}]}/> )}
            {fn == "home" && ( 
            <AntDesign name="home" size={24} color="black" />
            )}
        </Pressable>
    );
}  

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        marginHorizontal: 5,
    }

});