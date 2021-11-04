import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View, ToastAndroid} from 'react-native';
import colors from '../assets/colors';
import WallpaperSection from './WallpaperSection';
import Icon from 'react-native-vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context';

// library.add(faBars)
const Home = props => {

  const sampleToast = () => {
    return ToastAndroid.show('lol', ToastAndroid.SHORT)
  }

  return (
    // <SafeAreaView>
      <View style={styles.parentContainer}>
      <View style={styles.titleContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>snaps</Text>
          <Text style={styles.redTitle}>Overload</Text>
        </View>
        <View style={{flexDirection: 'row', }}>
          <TouchableOpacity style={{marginHorizontal: 8}} onPress={sampleToast}>
            <Icon name="search" color={colors.accent} size={25} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="options" color="white" size={25} />
          </TouchableOpacity>
        </View>
      </View>
      <WallpaperSection />
    </View>
    /* </SafeAreaView> */
    
  );
};

const styles = StyleSheet.create({
  parentContainer: {
    flex: 1,
backgroundColor: colors.black,
    // backgroundColor: colors.background,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    paddingBottom: 10,
    alignItems: 'center',
    justifyContent: 'space-around',
    // position: 'absolute',
    width: '95%',
    // padding: 8,
    // backgroundColor: colors.grey,

    marginHorizontal: 7,
    borderRadius: 30,
    
    
    // borderRadius: 700,
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    color: colors.white,
    fontSize: 28,
    fontFamily: 'Comfortaa-Medium',
  },
  redTitle: {
    color: colors.accent,
    fontSize: 28,
    fontFamily: 'Comfortaa-Medium',
  },
});

export default Home;
