import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

//theme
import {theme} from '../../../../theme';
import ExampleImg from '../../../../assets/images/storys/example.svg';
import LinearGradient from 'react-native-linear-gradient';

type Props = {
  img?: string;
  name: string;
  live: boolean;
};

const LiveTag = () => {
  return (
    <LinearGradient
      start={{x: 0.0, y: 0.1}}
      end={{x: 0.5, y: 0.0}}
      locations={[0.1, 0.3, 0.9]}
      colors={['#C90083', '#D22463', '#E10038']}
      style={styles.liveContainer}>
      <Text
        style={{
          fontSize: 7,
          color: theme.colors.white,
        }}>
        LIVE
      </Text>
    </LinearGradient>
  );
};

export default function StoryComponent({img, name, live}: Props) {
  return (
    <View style={styles.storyContainer}>
      <TouchableOpacity>
        <LinearGradient
          start={!live ? {x: 0.0, y: 0.6} : {x: 0.8, y: 0.7}}
          end={!live ? {x: 0.5, y: 0.0} : {x: 0.4, y: 0.4}}
          locations={!live ? [0.1, 0.6, 0.9] : [0.2, 0.3, 0.7]}
          colors={
            !live
              ? ['#FBAA47', '#D91A46', '#A60F93']
              : ['#E20337', '#C60188', '#7700C3']
          }
          style={{
            padding: 2,
            borderRadius: 100,
          }}>
          <View style={styles.imgContainer}>
            <ExampleImg width={50} height={50} />
            {live && <LiveTag/>}
          </View>
        </LinearGradient>
      </TouchableOpacity>
      <Text style={styles.text}>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: theme.colors.white,
    fontFamily: 'ABeeZee-Regular',
    fontSize: 12,
  },
  storyContainer: {
    alignItems: 'center',
    gap: 5,
  },
  imgContainer: {
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 100,
    position: 'relative',
  },
  liveContainer: {
    position: 'absolute',
    bottom: -8,
    width: 25,
    height: 15,
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
    left: '-50%',
    transform: [{translateX: 37}],
    borderColor: 'black',
    borderWidth: 1.5,
  },
});
