import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// Import your screen components here
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import ListExampleScreen from './screens/ListExampleScreen';
import UserAuthScreen from './screens/UserAuthScreen';

const Stack = createStackNavigator();

const Main = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen
          name="ListExampleScreen"
          component={ListExampleScreen}
          options={{title: 'lista de ejemplo'}}
        />
        <Stack.Screen
          name="Auth"
          component={UserAuthScreen}
          options={{title: 'lista de ejemplo'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Main;
