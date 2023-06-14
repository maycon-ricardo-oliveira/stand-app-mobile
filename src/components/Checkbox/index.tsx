import React, { useState } from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps, View } from 'react-native';
import { styles } from './styles';

import CheckDefaultSvg from '../../assets/check_box_default.svg';
import CheckSuccessSvg from '../../assets/check_box_success.svg';
import CheckErrorSvg from '../../assets/check_box_error.svg';


type Props = TouchableOpacityProps & {
	isChecked: boolean;
	isError: boolean;
}


export function Checkbox({ isChecked, isError, ...rest }: Props) {

	const [checked, setChecked] = useState(false);
	const [error, setError] = useState(false);

	function handleCheck() {

		setError(false);
		setChecked(!checked);

	}

  return (
    <TouchableOpacity 
		  {...rest} 
		  onPress={handleCheck} 
		  style={[styles.button, isError ? { right: 48 } : { right: 16 } ]}
		>
			{
				error ?
					<CheckErrorSvg
						width={24} height={24}
					/>
				:
				!checked ? 
					<CheckDefaultSvg
						width={24} height={24}
					/>
				:
					<CheckSuccessSvg 
						width={24} height={24}
					/>
			}
		</TouchableOpacity>
  )
}