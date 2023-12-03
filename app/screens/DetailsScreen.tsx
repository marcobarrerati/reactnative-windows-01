import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, Button} from 'react-native';

const DetailsScreen: React.FC = () => {
  // Aquí puedes agregar la lógica de autenticación de usuario
  const navigation = useNavigation();
  return (
    <View>
      <Text>Welcome to the Details Screen!</Text>
      <Button
        title="Go to ListExampleScreen"
        onPress={() => navigation.navigate('ListExampleScreen')}
      />
    </View>
  );
};

export default DetailsScreen;
