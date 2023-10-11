import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

//svg
import Avatar from '../../../../assets/images/publications/Oval.svg';
import OfficialIcon from '../../../../assets/images/publications/OfficialIcon.svg';
import {theme} from '../../../../theme';

export default function UserLayout() {
  return (
    <View style={[styles.containerRow, {marginBottom: 10}]}>
      <Avatar width={40} height={40} />
      <View>
        <View style={styles.containerRow}>
          <Text style={styles.name}>joshua_l</Text>
          <OfficialIcon width={15} height={15} />
        </View>
        <Text style={{color: 'white'}}>Tokyo, Japan</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerRow: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  containerText: {
    flexDirection: 'row',
  },
  name: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
});
