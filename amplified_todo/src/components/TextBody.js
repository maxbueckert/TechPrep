import { View, Text, Button, StyleSheet, Dimensions} from 'react-native';

import introText from '../hooks/IntroText'



export default function TextBody({words, style}) {
    return (
      <View style = {[styles.container, style]}>
        <Text>{words}</Text>
      </View>
    );
  }


const {height} = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fa5',
        justifyContent: 'center',
        alignItems: 'center', 
        width: '100%',
    },
    text: {
        fontSize: height*.05, 
    }
});