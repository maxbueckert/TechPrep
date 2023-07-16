import { View, Text, Button, StyleSheet, Dimensions} from 'react-native';

export default function Title({style}) {
    return (
      <View style = {[styles.container, style]}>
        <Text style = {styles.text}>TechPrep</Text>
      </View>
    );
  }


const {height} = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffa',
        justifyContent: 'center',
        alignItems: 'center', 
        width: '100%',
        flex: .20,
    },
    text: {
        fontSize: height*.07, 
    }
});