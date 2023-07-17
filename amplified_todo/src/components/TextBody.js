import { View, Text, Button, StyleSheet, Dimensions} from 'react-native';

import introText from '../hooks/IntroText'



export default function TextBody({words, style, fontSize = 20}) {
    return (
      <View style = {[styles.container, style]}>
        <Text style = {[styles.text, fontSize]}>{words}</Text>
      </View>
    );
  }


const {height} = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fa5',
        justifyContent: 'center',
        alignItems: 'center', 
        // width: '100%',
    },
    text: {
        // fontSize: height*.05, 
        fontSize: 20,
    }
});