import React from 'react';
import {View, Text} from 'react-native';

interface UserDetailsProps {
  user: {
    name: string;
    age: number;
    email: string;
    // Add more properties as needed
  };
}

const UserDetails: React.FC<UserDetailsProps> = ({user}) => {
  return (
    <View>
      <Text>Name: {user.name}</Text>
      <Text>Age: {user.age}</Text>
      <Text>Email: {user.email}</Text>
      {/* Add more Text components for additional user properties */}
    </View>
  );
};

export default UserDetails;
