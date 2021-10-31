import React from 'react'
import { FlatList, Text, View, ListRenderItem } from 'react-native';
import Card from '../components/Card/Card';
import { styles } from '../styles';
import { Contact } from '../types';

const contacts: Contact[] = [
  {
    id: 1,
    number: "+33 0617161761",
    icon: "call",
    desc: "Police",
  },
  {
    id: 2,
    number: "+33 0617161761",
    icon: "call",
    desc: "Fire Dep.",
  },
  {
    id: 3,
    number: "+33 0617161761",
    icon: "call",
    desc: "Doctor",
  },
];


function ContactScreen() {

  const renderContact: ListRenderItem<Contact> = ({item: {number, icon, desc }}) => (
    <Card desc={desc} text={number} icon={icon} />
  );
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Emergency Contacts </Text>
      <FlatList
        data={contacts}
        renderItem={renderContact}
      />
    </View>
  )
}

export default ContactScreen
