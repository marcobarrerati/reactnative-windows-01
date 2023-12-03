import React from 'react';
import {View, Text} from 'react-native';

type NavOption = {
  title: string;
  component: React.ReactNode;
  visible: boolean;
};

type NavAppProps = {
  options: NavOption[];
};

const NavApp: React.FC<NavAppProps> = ({options}) => {
  const visibleOptions = options.filter(option => option.visible);

  return (
    <View>
      {visibleOptions.map(option => (
        <View key={option.title}>
          <Text>{option.title}</Text>
          {option.component}
        </View>
      ))}
    </View>
  );
};

export default NavApp;
