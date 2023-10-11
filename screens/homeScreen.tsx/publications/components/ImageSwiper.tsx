import React from 'react';
import {FlatList, View, Image, Text} from 'react-native';
import ImageSvg from '../../../../assets/images/publications/Image.svg';
import {Dimensions} from 'react-native';
import {theme} from '../../../../theme';
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

const NumberPagination = ({data}: {data: number}) => {



  return (
    <View
      style={{
        paddingHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: theme.colors.black,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        position: 'absolute',
        top: 15,
        right: 15,
      }}>
      <Text style={{color: 'white'}}>1/{data}</Text>
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
      <NumberPagination data={DATA.length} />
    </View>
  );
}
