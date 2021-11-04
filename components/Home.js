import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import colors from '../assets/colors';
import WallpaperSection from './WallpaperSection';

// library.add(faBars)
const Home = props => {
  return (
    <View style={styles.parentContainer}>
      <View style={styles.titleContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Snaps</Text>
          <Text style={styles.redTitle}>Overload</Text>
        </View>
        <TouchableOpacity>
          <Image source={require('../assets/images/setting.png')} />
        </TouchableOpacity>
      </View>
      <WallpaperSection />
    </View>
  );
};

const styles = StyleSheet.create({
  parentContainer: {
    flex: 1,
    backgroundColor: colors.background,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
  },
  textContainer: {
    flexDirection: 'row',
  },
  title: {
    color: colors.white,
    fontSize: 35,
    fontFamily: 'Comfortaa-Medium',
  },
  redTitle: {
    color: colors.accent,
    fontSize: 35,
    fontFamily: 'Comfortaa-Medium',
  },
});

export default Home;
