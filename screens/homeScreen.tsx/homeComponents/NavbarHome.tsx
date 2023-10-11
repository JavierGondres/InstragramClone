import React from 'react';
import {Image, StatusBar, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

//theme
import {theme} from '../../../theme';
//icons
import CameraIcon from '../../../assets/images/navBar/CameraIcon.svg';
import Logo from '../../../assets/images/navBar/InstagramLogo.svg';
import Reelbox from '../../../assets/images/navBar/Reelbox.svg';
import SendIcon from '../../../assets/images/navBar/SendIcon.svg';

export default function NavbarHome() {
  return (
    <View style={styles.container}>
      <View style={styles.cameraContainer}>
        <TouchableOpacity style={{width: 25}}>
          <CameraIcon width={25} height={25} />
        </TouchableOpacity>
      </View>
      <View style={styles.logoContainer}>
        <Logo width={105} height={40} />
        <View style={styles.reelsContainer}>
          <TouchableOpacity>
            <Reelbox width={25} height={25} />
          </TouchableOpacity>
          <TouchableOpacity>
            <SendIcon width={25} height={25} />
          </TouchableOpacity>
        </View>
      </View>
      <StatusBar backgroundColor={theme.colors.black}></StatusBar>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.black,
    flex: 1,
    height: 65,
    flexDirection: 'row',
    padding: theme.padding,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cameraContainer: {
    flex: 1,
  },
  logoContainer: {
    flexDirection: 'row',
    flex: 1.7,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  reelsContainer: {
    flexDirection: 'row',
    gap: 20,
  },
});
