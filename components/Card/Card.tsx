import React from 'react'
import {View, Text, Pressable} from 'react-native'
import { COLORS, styles } from '../../styles'
import { Ionicons } from '@expo/vector-icons';
import {Linking} from 'react-native'

function Card(props: { text: string, icon: string }) {
  
  const handleCall = () => {
    Linking.openURL("tel:" + props.text)
  }
  
  return (
    <Pressable style={styles.card} onPress={handleCall}>
      <Ionicons
        name={props.icon == "call" ? props.icon : "link"}
        size={24}
        color={COLORS.PURPLE}
        style={{
          fontWeight: "700"
        }}
      />
      
      <Text style={styles.cardText}> {props.text} </Text>
    </Pressable>
  )
}

export default Card
