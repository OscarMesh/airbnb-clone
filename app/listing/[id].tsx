import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router';

const DetailsPage = () => {
    const { id } = useLocalSearchParams();
  return (
    <View>
      <Text>DetailsPage</Text>
    </View>
  )
}

export default DetailsPage