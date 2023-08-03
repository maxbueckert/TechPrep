import { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet, Dimensions} from 'react-native';
import { ActivityIndicator, MD2Colors } from 'react-native-paper';

import { Image, Platform } from 'react-native';
import { Banner } from 'react-native-paper';


// export default function TextBody({words, style, fontSize = 20, tick = false}) {
  // const [ticker, setTicker] = useState(false);
  // let prevTicker = true;

  // useEffect(() => {
  //   let flick;
  //   if (tick) {
  //     flick = setInterval(() => {setTicker(prevTicker); prevTicker = !prevTicker}, 200);
  //   }
  //   return () => {
  //     clearInterval(flick);
  //     setTicker(false)
  //   }
  // }, [tick])

//     return (
//       <View style = {[styles.container, style]}>
//         <Text style = {[styles.text, fontSize, ticker ? {opacity: 0.5} : {opacity: 1.0}]}>{words}</Text>
//         <ActivityIndicator animating={tick? true : false} color={MD2Colors.red800} />
//       </View>
//     );
//   }


const TextBody = ({words = null, iconImage, tick = false}) => {  
  return (
    <Banner
      visible={true}
      contentStyle={[{width:'100%'}, {textAlign: 'center'}]}>

      {Platform.OS == 'web' && (
      <View style={styles.text}>
      <Text style={styles.text}>{words}</Text>
      </View>
      )}

    {Platform.OS != 'web' && (
      <Text style={styles.text}>{words}</Text>
      )}
      
    </Banner>
  );
};

export default TextBody;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 15,
    textAlign: 'center',
    width: '100%',
  },
});