import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import UserLayout from './components/UserLayout';

//svg
import Options from '../../../assets/images/publications/MoreIcon.svg';
import {theme} from '../../../theme';
import ImageSwiper from './components/ImageSwiper';

const DATA = [
  {
    id: 1,
  },
  {
    id: 3,
  },
  {
    id: 2,
  },
];

export default function Publication() {
  return (
    <View>
      <View style={styles.userLayout}>
        <TouchableOpacity>
          <UserLayout />
        </TouchableOpacity>
        <TouchableOpacity>
          <Options width={20} height={20} />
        </TouchableOpacity>
      </View>
      <View>
        <ImageSwiper data={DATA} />
      </View>
      <View>
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  userLayout: {
    paddingHorizontal: theme.padding,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
