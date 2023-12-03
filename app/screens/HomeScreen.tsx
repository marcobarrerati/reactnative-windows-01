import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text} from 'react-native';
import {Button} from 'react-native-windows';

const HomeScreen: React.FC = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Welcome to the Home ScreenA!</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
      <Button title="ingresar" onPress={() => navigation.navigate('Auth')} />
    </View>
  );
};

export default HomeScreen;
