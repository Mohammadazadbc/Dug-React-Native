
import { StyleSheet, SafeAreaView, View, ScrollView } from 'react-native';
import Home from './linkSocialMedia/Home';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './StackNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>

    // <ScrollView style={{height:"100%"}}> 

    // <SafeAreaView style={styles.container}>
    //     <Home />
    // </SafeAreaView>
    // </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    width:"100%",
    backgroundColor: '#E5E5E5',
    alignItems: 'center',
    

  },
});
