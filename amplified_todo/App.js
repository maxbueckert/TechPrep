import { StatusBar } from 'expo-status-bar';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Amplify } from 'aws-amplify';
import awsExports from './src/aws-exports';

Amplify.configure(awsExports);

import HomeScreen from './src/screens/HomeScreen';
import ConfigureTestScreen from './src/screens/ConfigureTestScreen';
import PressToStartTestScreen from './src/screens/PressToStartTestScreen';
import MultipleChoiceTestScreen from './src/screens/MultipleChoiceTestScreen';
import {TestDetailsContext} from './src/components/Context/TestContext';



const Stack = createStackNavigator();

export default function App() {
  return (
    <TestDetailsContext>
      <NavigationContainer>
        {/* <Stack.Navigator initialRouteName="HomeScreen"> */}
        <Stack.Navigator initialRouteName="MultipleChoiceTestScreen">
          <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }}/>
          <Stack.Screen name="ConfigureTestScreen" component={ConfigureTestScreen} options={{ headerShown: false }} />
          <Stack.Screen name="PressToStartTestScreen" component={PressToStartTestScreen} options={{ headerShown: false }} />
          <Stack.Screen name="MultipleChoiceTestScreen" component={MultipleChoiceTestScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </TestDetailsContext>
  );
}
