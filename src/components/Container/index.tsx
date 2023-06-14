import React from 'react';
import { View , ViewProps} from 'react-native';

import { styles } from './styles';

type Props = ViewProps & {
}

export function Container( {...rest }: Props ) {
  return (
    <View style={styles.container} {...rest}>

    </View>
  )
}