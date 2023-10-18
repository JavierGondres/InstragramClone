import React, {useRef, useState} from 'react';
import {FlatList, View, Image, Text, ViewToken} from 'react-native';
import ImageSvg from '../../../../assets/images/publications/Image.svg';
import {Dimensions} from 'react-native';
import {theme} from '../../../../theme';

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

const NumberPagination = ({data, currentIndex}: {data: number, currentIndex: number}) => {
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
      <Text style={{color: 'white'}}>{currentIndex}/{data}</Text>
    </View>
  );
};


export default function ImageSwiper({data}: {data:Array<{id: number}>}) {
  const [currentPageIndex, setCurrentPageIndex] = useState<number>(1);

//arreglar el tipado, pero ya funciona el paginator
  const onViewableItemsChanged = useRef(({viewableItems}: {viewableItems: ViewToken[]}) => {
    if (viewableItems.length > 0) {
      const currentIndex: number = viewableItems[0].index || 0;
      if (currentIndex === 0) 
        setCurrentPageIndex(1);

      else if (currentIndex + 1 !== currentPageIndex)
        setCurrentPageIndex(currentIndex + 1);
    }
  }).current;

  console.log(currentPageIndex);

  return (
    <View style={{flex: 1}}>
      <FlatList
        data={data}
        pagingEnabled
        horizontal
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => <ImageList/>}
        onViewableItemsChanged={onViewableItemsChanged}
      />
      {data.length > 1 && <NumberPagination data={data.length}  currentIndex={currentPageIndex}/>}
    </View>
  );
}
