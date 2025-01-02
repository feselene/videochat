import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen'; // Path to your HomeScreen
import SecondScreen from './screens/SecondScreen'; // Path to your SecondScreen
import CafeScreen from './screens/CafeScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" >
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="CafeScreen" component={CafeScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="SecondScreen" component={SecondScreen} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
