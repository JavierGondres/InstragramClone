import React from 'react'

import { Button, Text, View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStack } from '../../App';

type Props = NativeStackScreenProps<RootStack, 'Home'>;

export default function HomeScreen({navigation}: Props) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screenssd</Text>
        <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Home')}
      />
      </View>
    );
  }