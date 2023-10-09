import React from 'react'

import { Button, ScrollView, Text, View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStack } from '../../App';
import NavbarHome from './homeComponents/NavbarHome';

type Props = NativeStackScreenProps<RootStack, 'Home'>;

export default function HomeScreen({navigation}: Props) {
    return (
        <ScrollView>
            <NavbarHome/>
        </ScrollView>
    );
  }