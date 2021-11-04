import React, {useEffect, useState} from 'react';
import {
  Text,
  Image,
  View,
  StyleSheet,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import colors from '../assets/colors';
import TempData from '../assets/TempData';
import WallpaperContainer from './WallpaperContainer';

const count = 5;
const apiKey = 'vyutfS7gMqOL_8t52wckyT-6GKbyqYpVLnmIw3N2vW8';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

const WallpaperSection = props => {
  // const [pictures, setPictures] = (['']);

  // useEffect(() => {
  //   const fetchPictures = async () => {
  //     const response = await fetch(apiUrl);
  //     const pictureData = response.json();
  //     const pictureArray = [];

  //     for (const key in pictureData) {
  //       pictureArray.push({
  //         id: key,
  //         description: pictureData[key].alt_description,
  //         image: pictureData[key].links.download,
  //       });
  //     }
  //     console.log(pictureArray.description);
  //     setPictures(pictureArray);
  //     console.log(pictures.description);
  //   };
  // }, []);

  // const wallpapers = pictures.map(picture => (
  //   <WallpaperContainer key={picture.id} photo={picture.image} />
  // ));
  return (
    <View style={styles.primaryContainer}>
      <WallpaperContainer />
      {/* <TouchableOpacity style={styles.picturesContainer}>
        {wallpapers}
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  primaryContainer: {
    // backgroundColor: colors.grey,
    flex: 1,
    marginHorizontal: 16,
    marginBottom: 10,
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  picturesContainer: {
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.brown,
    height: 350,
    borderRadius: 20,
    elevation: 15,
    marginHorizontal: 17,
  },
  imageContainer: {
    height: 300,
    width: 300,
  },
  image: {
    flex: 1,
    marginVertical: 10,
    borderRadius: 12,
    height: 300,
    width: 300,
    resizeMode: 'contain',
  },
  pictureDesc: {
    fontSize: 15,
    color: colors.white,
  },
});

export default WallpaperSection;
