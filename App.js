
import { StyleSheet, SafeAreaView, View, ScrollView } from 'react-native';
import Home from './linkSocialMedia/Home';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './StackNavigator';

export default function App() {
  return (
    <NavigationContainer >
      <StackNavigator />
    </NavigationContainer>
  );
}


