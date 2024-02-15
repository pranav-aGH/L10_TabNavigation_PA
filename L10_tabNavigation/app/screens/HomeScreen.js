import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { commonStyles } from '../config/styles'

export default function HomeScreen() {
  return (
    <View style={commonStyles.container}>
      <Text style={commonStyles.text}>Home Screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({})