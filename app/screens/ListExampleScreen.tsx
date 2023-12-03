import {useNavigation, useRoute} from '@react-navigation/native';
import React from 'react';
import {View, Text, FlatList} from 'react-native';

const ListExampleScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const routesLength = navigation.getState().routes.length; // Don't do this

  const data = [
    {id: 1, name: 'Registro 1'},
    {id: 2, name: 'Registro 2'},
    {id: 3, name: 'Registro 3'},
  ];

  const renderItem = ({item}) => (
    <View>
      <Text>{item.name}</Text>
    </View>
  );

  return (
    <View>
      <Text>Number of routes: {routesLength}</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

export default ListExampleScreen;
