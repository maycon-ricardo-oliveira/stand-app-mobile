import React from 'react';
import { TouchableOpacity, TouchableOpacityProps, View } from 'react-native';

import { styles } from './styles';

import AppleSvg from '../../assets/socialMedia/apple_fill.svg';
import GoogleSvg from '../../assets/socialMedia/google_fill.svg';
import FacebookSvg from '../../assets/socialMedia/facebook_fill.svg';

type Props = TouchableOpacityProps & {
  media: 'google' | 'apple' | 'facebook'
}

export function ButtonSocialMedia({ media, ...rest }: Props) {

  return (
    <TouchableOpacity style={styles.container}
      {...rest}
    >
      <View style={styles.icon}>
        {
          media == 'apple' ? <AppleSvg width={32} height={32} color="#FFF" fill="#FFF"/> :
          media == 'facebook' ? <FacebookSvg width={32} height={32} color="#FFF" fill="#FFF"/> :
          media == 'google' ? <GoogleSvg width={32} height={32} color="#FFF" fill="#FFF"/> : null
        }
      </View>
    </TouchableOpacity>
  )
}