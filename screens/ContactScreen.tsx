import React from 'react'
import { FlatList, Text, View } from 'react-native';
import Card from '../components/Card/Card';
import {styles} from '../styles';

function ContactScreen() {
  return (
    <View style={styles.container}>
          <Text style={styles.title}>Emergency Contacts </Text>
          <View>
            <Card icon="call" text="+33 0617161761" />
            <Card icon="call" text="+33 0617161761" />
            <Card icon="call" text="+33 0617161761" />
          </View>
    </View>
  )
}

export default ContactScreen
