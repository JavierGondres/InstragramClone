import React from 'react';
import {FlatList, View, Image} from 'react-native';
import ImageSvg from '../../../../assets/images/publications/Image.svg';
import {Dimensions} from 'react-native';
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

const ImageList = () => {
  const windowWidth = Dimensions.get('window').width;
  return (
    <View style={{}}>
      <Image
        style={{width: windowWidth, height: 400}}
        source={require('../../../../assets/images/publications/Rectangle2.png')}
      />
    </View>
  );
};

export default function ImageSwiper() {
  return (
    <View style={{flex: 1}}>
      <FlatList
        data={DATA}
        pagingEnabled
        horizontal
        renderItem={({item}) => <ImageList />}
      />
    </View>
  );
}
