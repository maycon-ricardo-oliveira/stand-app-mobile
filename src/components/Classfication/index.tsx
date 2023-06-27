import React from 'react';
import { Text, View } from 'react-native';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';

import ClassificationLImg from '../../assets/classification-L.svg';
import Classification10Img from '../../assets/classification-10.svg';
import Classification16Img from '../../assets/classification-16.svg';
import Classification18Img from '../../assets/classification-18.svg';

type Props = {
  title: 'L' | '10' | '16' | '18'
}

export function Classification({ title, ...rest }: Props) {
  const { success, success000, error, error000, alert, alert000 } = theme.colors;

  function render() {
    switch(title) {

      case "L": return (
        <View style={styles.container}>
          <ClassificationLImg width={17} height={17} />
        </View>
      );
      case "10": return (
        <View style={styles.container}>
          <Classification10Img width={17} height={17} />
        </View>
      );
      case "16": return (
        <View style={styles.container}>
          <Classification16Img width={17} height={17} />
        </View>
      );
      case "18": return (
        <View style={styles.container}>
          <Classification18Img width={17} height={17} />
        </View>
      );
    }
  }

  return (
    <>{ render() }</>
  )

}