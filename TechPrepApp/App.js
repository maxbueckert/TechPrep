import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Amplify } from 'aws-amplify';
import awsExports from './src/aws-exports';

Amplify.configure(awsExports);

import HomeScreen from './src/screens/HomeScreen';
import ConfigureTestScreen from './src/screens/ConfigureTestScreen';
import PressToStartTestScreen from './src/screens/PressToStartTestScreen';
import MultipleChoiceTestScreen from './src/screens/MultipleChoiceTestScreen';
import FinishTestScreen from './src/screens/FinishTestScreen';
import {TestDetailsContext} from './src/components/Context/TestContext';
import {ThemeContext} from './src/components/Context/ThemeContext';
import ScoreBoardScreen from './src/screens/ScoreBoardScreen';
import SettingsScreen from './src/screens/SettingsScreen';

import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

import { colors } from './src/themeColors/lightThemeColor';
import { darkColors } from './src/themeColors/darkThemeColor';

const Stack = createStackNavigator();


export default function App() {


  const theme = {
    ...DefaultTheme,
    colors: colors,

  };
  return (
    <PaperProvider theme={theme}>
      <TestDetailsContext>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="HomeScreen">
            <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }}/>
            <Stack.Screen name="ConfigureTestScreen" component={ConfigureTestScreen} options={{ headerShown: false }} />
            <Stack.Screen name="PressToStartTestScreen" component={PressToStartTestScreen} options={{ headerShown: false }} />
            <Stack.Screen name="MultipleChoiceTestScreen" component={MultipleChoiceTestScreen} options={{ headerShown: false }} />
            <Stack.Screen name="FinishTestScreen" component={FinishTestScreen} options={{ headerShown: false }} />
            <Stack.Screen name="ScoreBoardScreen" component={ScoreBoardScreen} options={{ headerShown: false }} />
            <Stack.Screen name="SettingsScreen" component={SettingsScreen} options={{ headerShown: false }} />
          </Stack.Navigator>
        </NavigationContainer>
      </TestDetailsContext> 
    </PaperProvider>
  );
}
