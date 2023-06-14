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
  function getIcon() {
   
  }

  return (
    <TouchableOpacity style={styles.container}
      {...rest}
    >
      <View style={styles.icon}>
        {
          media == 'apple' ? <AppleSvg width={32} height={32}/> :
          media == 'facebook' ? <FacebookSvg width={32} height={32}/> :
          media == 'google' ? <GoogleSvg width={32} height={24}/> : null
        }
      </View>
    </TouchableOpacity>
  )
}