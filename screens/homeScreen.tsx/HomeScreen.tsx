import React from 'react';

import {Button, ScrollView, StyleSheet, Text, View} from 'react-native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStack} from '../../App';
import NavbarHome from './homeComponents/NavbarHome';
import Storys from './homeComponents/Storys';
import { theme } from '../../theme';
import Publication from './publications/Publication';

type Props = NativeStackScreenProps<RootStack, 'Home'>;

export default function HomeScreen({navigation}: Props) {
  return (
    <ScrollView style={styles.container}>
      <NavbarHome />
      <Storys />
      <Publication/>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.dark,
    flex: 1,
    height: 100,
  }
});
