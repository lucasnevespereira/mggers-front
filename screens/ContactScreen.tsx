import I18n from 'i18n-js';
import React from 'react'
import { FlatList, Text, View, ListRenderItem } from 'react-native';
import Card from '../components/Card/Card';
import { styles } from '../styles';
import { Contact } from '../types';

function ContactScreen() {

  const contacts: Contact[] = [
    {
      id: 1,
      number: I18n.t('generalNum'),
      icon: "call",
      desc: I18n.t('general'),
    },
    {
      id: 2,
      number: I18n.t('medicalNum'),
      icon: "call",
      desc: I18n.t('medical'),
    },
    {
      id: 3,
      number: I18n.t('policeNum'),
      icon: "call",
      desc: I18n.t('police'),
    },
    {
      id: 4,
      number: I18n.t('fireForceNum'),
      icon: "call",
      desc: I18n.t('fireForce'),
    },
  ];

  const renderContact: ListRenderItem<Contact> = ({item: {number, icon, desc }}) => (
    <Card desc={desc} text={number} icon={icon} />
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{I18n.t('emergencyContacts')}</Text>
      <FlatList
        data={contacts}
        renderItem={renderContact}
      />
    </View>
  )
}

export default ContactScreen
