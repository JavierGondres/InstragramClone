import React from 'react';
import {
  StyleSheet,
  View,
  FlatList,
} from 'react-native';

//theme
import {theme} from '../../../theme';
import StoryComponent from './stories/StoryComponent';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    name: 'First Item',
    live: true
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    name: 'Second Item',
    live: false
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    name: 'Third Item',
    live: false
  },
  {
    id: '58694af-3da1-471f-bd96-145571e29d72',
    name: 'Third Item',
    live: false
  },
  {
    id: '58694-3da1-471f-bd96-145571e29d72',
    name: 'Third Item',
    live:false
  },
  {
    id: '58694-3da1-471f-b96-145571e29d72',
    name: 'Third Item',
    live: false
  },
  {
    id: '58694-3da1-471f-b96-5571e29d72',
    name: 'Third Item',
    live: false
  },
  {
    id: '594-3da1-471f-b96-145571e29d72',
    name: 'Third Item',
    live: true
  },
  {
    id: '58694-3da1-471f-b96-145571e29d',
    name: 'Third Item',
    live: false
  },
];

export default function Storys() {
  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({item}) => <StoryComponent name={item.name} live={item.live}/>}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.flatContainer}
        horizontal
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.dark,
    flex: 1,
    height: 100,
    marginBottom: 20
  },
  flatContainer: {
    justifyContent: 'space-between',
    gap: 20,
    alignItems: 'center',
    paddingHorizontal: 15
  },
});
