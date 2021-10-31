import React from 'react'
import {View, Text, Pressable} from 'react-native'
import { COLORS, styles } from '../../styles'
import { Ionicons } from '@expo/vector-icons';
import {Linking} from 'react-native'

function Card(props: { text: string, icon: string, desc: string }) {
  
  const handleCall = () => {
    const url = `telprompt:${props.text}`;
    Linking.canOpenURL(url)
      .then((supported) => {
        if (supported) {
          return Linking.openURL(url)
            .catch(() => null);
        }
      });
  }
  
  return (
    <Pressable style={styles.card} onPress={handleCall}>
      <View style={{display: "flex", alignContent:"center", flexDirection: "row", alignItems:"center"}}>
        <Ionicons
          name={props.icon == "call" ? props.icon : "link"}
          size={20}
          color={COLORS.PURPLE}
          style={{
            fontWeight: "700"
          }}
        />
        <Text style={styles.cardTextNumber}> {props.text} </Text>
      </View>
      <Text style={styles.cardTextDesc}> {props.desc} </Text>
    </Pressable>
  )
}

export default Card
