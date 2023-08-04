import React, { useEffect, useRef, useState } from 'react';
import { Animated, TouchableWithoutFeedback } from 'react-native';

import { Button, Appbar, FAB, useTheme } from 'react-native-paper';

export default function MyComponent({icon, onPress, disabled, promptNextQuestion, promptNextQuestionOnPress}) {
  const [scale] = useState(new Animated.Value(1));
  const [color] = useState(new Animated.Value(0));

  const theme = useTheme();
  

  const makeButtonPop = () => {
    Animated.parallel([
      Animated.timing(scale, {
        toValue: 1.3,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.timing(color, {
        toValue: 1,
        duration: 200,
        useNativeDriver: false,
      }),
    ]).start();
  };

  const removeButtonPop = () => {
    Animated.parallel([
      Animated.timing(scale, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.timing(color, {
        toValue: 0,
        duration: 200,
        useNativeDriver: false,
      }),
    ]).start();
  };

    useEffect(() => {
      if (promptNextQuestion) {
        makeButtonPop();
      } else {
        removeButtonPop();
      }
    });

  const handleNextQuestion = () => {

   promptNextQuestionOnPress();

  }

  const animatedStyles = {
    transform: [{ scale }],
    backgroundColor: color.interpolate({
      inputRange: [0, 1],
      outputRange: [theme.colors.secondaryContainer, theme.colors.primaryContainer], // Change colors as required
    }),
  };

  return (
      <Animated.View>
      <FAB
          disabled = {disabled} 
          icon={icon}
          onPress={promptNextQuestion ? handleNextQuestion : onPress}
          style = {animatedStyles}  
          />
      </Animated.View>

  );
}




