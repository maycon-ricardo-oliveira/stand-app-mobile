import React from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import HeartEmptySvg from '../../assets/heart-empty.svg';
import HeartFullSvg from '../../assets/heart-full.svg';

import { styles } from './styles';

type Props = TouchableOpacityProps & {
  isLiked: boolean;
}

export function ButtonLike({ isLiked, ...rest }: Props) {

  return (
    <TouchableOpacity  style={styles.container} {...rest}>
      {
        isLiked ?
          <HeartFullSvg width={24} height={24} fill="#fff"/>
        :
          <HeartEmptySvg width={24} height={24} fill="#fff"/>
      }
      
    </TouchableOpacity>
  )
}