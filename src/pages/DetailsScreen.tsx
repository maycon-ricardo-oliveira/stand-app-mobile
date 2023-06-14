import { View, Text } from 'react-native';
import { useRoute } from '@react-navigation/native';
import React from 'react';
const DetailScreen = () => {
  const route = useRoute();

	return (
    <View style={{ flex: 1, paddingTop: 12, paddingHorizontal: 10 }}>
      <Text style={{ fontSize: 18, paddingBottom: 12 }}>Name</Text>
      <Text style={{ fontSize: 18 }}>Birth Year:</Text>
    </View>
  );
};
export default DetailScreen;