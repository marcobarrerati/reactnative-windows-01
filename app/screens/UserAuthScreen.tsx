import React, {useState} from 'react';
import {View, TextInput, Button, Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native'; // Import the hook

const UserAuthScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation(); // Initialize the hook

  const handleLogin = () => {
    // Aquí puedes implementar la lógica de autenticación contra AD
    // utilizando las credenciales proporcionadas por el usuario (username y password)
    // Puedes utilizar una librería como 'react-native-activedirectory' para interactuar con AD

    // Ejemplo de validación básica
    if (username === 'admin' && password === 'password') {
      Alert.alert('Login successful');

      navigation.navigate('ListExampleScreen');
    } else {
      Alert.alert('Invalid credentials');
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

export default UserAuthScreen;
