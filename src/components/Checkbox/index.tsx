import React, { useState } from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps, View } from 'react-native';
import { styles } from './styles';
import { theme } from '../../global/styles/theme';
import CheckDefaultWhiteSvg from '../../assets/check_box_default_white.svg';
import CheckDefaultBlackSvg from '../../assets/check_box_default_black.svg';
import CheckSuccessSvg from '../../assets/check_box_success.svg';
import CheckErrorSvg from '../../assets/check_box_error.svg';


type Props = TouchableOpacityProps & {
	isChecked: boolean;
	isError: boolean;
	checkBoxColor: 'dark' | 'white';
}

export function Checkbox({ isChecked, isError, checkBoxColor, ...rest }: Props) {

	const [checked, setChecked] = useState(false);
	const [error, setError] = useState(false);


	function handleCheck() {

		setError(false);
		setChecked(!checked);

	}

	function setTheme() {
		return 
	}

  return (
    <TouchableOpacity 
		  {...rest} 
		  onPress={handleCheck} 
		  style={[styles.button]}
		>
			{
				error ?
					<CheckErrorSvg
						width={24} height={24} fill="#fff"
					/>
				:
				!checked ? 
					checkBoxColor == 'white' ?
						<CheckDefaultWhiteSvg 
							width={24} height={24}
						/>
					:
						<CheckDefaultBlackSvg 
							width={24} height={24}
						/>
				:
					<CheckSuccessSvg 
						width={24} height={24} fill="#fff"
					/>
			}
		</TouchableOpacity>
  )
}