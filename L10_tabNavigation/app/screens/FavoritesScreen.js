import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { commonStyles } from '../config/styles'

export default function InfoScreen() {
  return (
    <View style={commonStyles.container}>
        <Text style={commonStyles.text}>Info Screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({})