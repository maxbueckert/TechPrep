import React from 'react';
import { View, StyleSheet} from 'react-native';

import Title from '../components/Title';
import TextBody from '../components/TextBody';
import TestButton from '../components/TestConfigButton';
import TestConfigBottomPanel from '../components/TestConfigButtonPanel';
import { SafeAreaView } from 'react-native';
import { SegmentedButtons, useTheme } from 'react-native-paper';
import { ThemeProvider, useNavigation } from '@react-navigation/native';


const MyComponent = () => {
  const [value, setValue] = React.useState('');
  const navigation = useNavigation();
  const theme = useTheme();

  return (
    <View style = {{flex:1}}>
    <Title backButtonFn = {()=> navigation.navigate("HomeScreen")}></Title>
    <View style = {[{flex:1, justifyContent: 'center', alignItems: 'center', backgroundColor: theme.colors.background}]}>
    <SafeAreaView style={styles.container}>
      <SegmentedButtons
        value={value}
        onValueChange={setValue}
        buttons={[
          {
            value: "light",
            label: 'Light',
            style: {width:200}
          },
          {
            value: "dark",
            label: 'Dark',
            style: {width:200}
          }
        ]}
      />
    </SafeAreaView>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default MyComponent;