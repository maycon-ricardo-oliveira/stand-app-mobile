import React, { ReactNode } from 'react';
import { LinearGradient } from 'expo-linear-gradient';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';
import { View } from 'react-native';
import SeeAll from '../SeeAll';

export function AroundYou() {
  const {linear} = theme.colors;

  function handleShowAll() {
    console.log('see all clicked')
  }

  return (
      <View style={styles.container} >
        <SeeAll
         title='Shows perto de você'
          handleShowAll={() => handleShowAll}
        />
      </View> 
  )
}