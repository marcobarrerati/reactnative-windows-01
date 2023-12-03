import React from 'react';
import {View, Text, Image, StyleSheet, PlatformColor} from 'react-native';

interface UserProfileProps {
  name: string;
  username: string;
  avatarUrl: string;
}

const UserProfile: React.FC<UserProfileProps> = ({
  name,
  username,
  avatarUrl,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hola Mundo</Text>

      <Image source={{uri: avatarUrl}} style={styles.avatar} />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.username}>@{username}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 19,
    fontWeight: 'bold',
    color: PlatformColor('SystemControlPageTextBaseHighBrush'), // SystemAccentColorLight3
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  username: {
    fontSize: 14,
    color: 'gray',
  },
});

export default UserProfile;
