import { Platform, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { colors, fonts } from '../../utils/Styles'
import { moderateScale, scale } from 'react-native-size-matters'

export default function Input({
  placeHolder,
  mt
}) {
  return (
    <View style={{
      width: '100%',
      backgroundColor: colors.white,
      paddingHorizontal: scale(10),
      borderRadius: moderateScale(6),
      marginTop:mt?mt:0,
      ...Platform.select({
        ios:{
        paddingVertical:moderateScale(14)
        }
      }),
      borderWidth:1,
      borderColor:colors.borderC,
      paddingVertical:moderateScale(5)
    }}>
      <TextInput style={{fontFamily:fonts.medium}} placeholderTextColor={colors.placeholderColor} placeholder={placeHolder} />
    </View>
  )
}

const styles = StyleSheet.create({})