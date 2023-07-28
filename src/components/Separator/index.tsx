import React , {ReactNode, useState } from "react";
import {  View } from "react-native";
import { theme } from "../../global/styles/theme";

export function Separator() {
	return (
		<View style={{
      marginTop: 12,
      backgroundColor: theme.colors.grey200,
      borderRadius: 4,
      width: '100%',
      height: 1,
      opacity: 0.5
    }}>
		</View>
	)
}