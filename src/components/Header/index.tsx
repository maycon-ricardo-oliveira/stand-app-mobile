import React, { ReactNode } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { theme } from '../../global/styles/theme';
import { styles } from './styles';

type Props = {
  title: string,
  action?: ReactNode;
}

export function Header({ title, action }: Props) {

  const { white } = theme.colors;

  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <View
      style={styles.container}
    >

      <TouchableOpacity
        onPress={handleGoBack}
      >
        <Feather
          name='chevron-left'
          size={24}
          color={white}
        />
      </TouchableOpacity>

      <Text style={styles.title} >
        {title}
      </Text>

      {
        action ?
          <View>
            {action}
          </View>
          :
          <View style={{ width: 24 }} />
      }

    </View>

  );
}

