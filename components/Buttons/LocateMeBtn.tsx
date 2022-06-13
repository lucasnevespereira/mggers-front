import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';

export function LocateMeBtn(props: {
  iconColor: string,
  iconSize: number
  iconStyle: Object
  onPress: () => void
}) {
  return (
    <Ionicons onPress={props.onPress} name='compass-sharp' style={props.iconStyle} size={props.iconSize} color={props.iconColor} />
    )
}
