import React from 'react';
import { Text, View, StyleSheet, Pressable, Dimensions, Platform } from 'react-native';

// export default function TestConfigButton(props) {
//   const { onPress, title = 'Save', style} = props;
//   return (
//     <Pressable
//     style={({ pressed }) => [
//         styles.button,
//         style,
//         { opacity: pressed ? 0.7 : 1 }
//       ]}
//     onPress={onPress}>
//       <Text style={styles.text}>{title}</Text>
//     </Pressable>
//   );
// }

import { Button } from 'react-native-paper';

const TestConfigButton = (props) => {
  const { onPress, title, style, icon} = props;
  return (
    <Button icon={icon}
            mode="contained-tonal" 
            onPress={onPress}
            compact={true}
            contentStyle={[{height: 100}, {width: 300}, Platform.OS == 'web'? {width: 500} : null]}>
      {title}
    </Button>
);

}
export default TestConfigButton;


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
    textAlign: 'center',
  },
});
