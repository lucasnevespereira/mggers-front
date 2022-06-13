import React from 'react'
import {  Pressable, Text } from 'react-native'
import { styles } from '../../styles'

export function MggerBtn(props:{
    title: string,
    bgColor: string,
    onPress: () => void
}) {
  return (
    <Pressable onPress={props.onPress} style={[styles.mggerBtn, { backgroundColor: props.bgColor }]}>
          <Text style={styles.mggerBtnText}>{props.title}</Text>
    </Pressable>
    )
}
