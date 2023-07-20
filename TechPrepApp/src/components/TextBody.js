import { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet, Dimensions} from 'react-native';





export default function TextBody({words, style, fontSize = 20, tick = false}) {
  const [ticker, setTicker] = useState(false);
  let prevTicker = true;

  useEffect(() => {
    let flick;
    if (tick) {
      flick = setInterval(() => {setTicker(prevTicker); prevTicker = !prevTicker}, 200);
    }
    return () => {
      clearInterval(flick);
      setTicker(false)
    }
  }, [tick])

    return (
      <View style = {[styles.container, style]}>
        <Text style = {[styles.text, fontSize, ticker ? {opacity: 0.5} : {opacity: 1.0}]}>{words}</Text>
      </View>
    );
  }


const {height} = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FED7D7',
        justifyContent: 'center',
        alignItems: 'center', 
   
    },
    text: {
        // fontSize: height*.05, 
        fontSize: 20,
        textAlign: 'center',
    }
});