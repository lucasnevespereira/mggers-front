import I18n from 'i18n-js';
import React from 'react'
import { Text, View } from 'react-native';
import {styles} from '../styles';

function SettingsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{I18n.t("settings")}</Text>
    </View>
  )
}

export default SettingsScreen
