import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';

import { Icon } from 'react-native-vector-icons/icon';

const WallpaperContainer = props => {
  const [wallpaperData, setWallpaperData] = useState([]);
  const count = 30;
  const apiKey = 'vyutfS7gMqOL_8t52wckyT-6GKbyqYpVLnmIw3N2vW8';
  const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

  const getWallpapers = async () => {
    try {
      const response = await fetch(apiUrl);
      const MoviesData = await response.json();
      setWallpaperData(MoviesData);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getWallpapers();
  }, []);
  // console.log(wallpaperData);

  return (
    <View style={{flex: 1, padding: 5}}>
      <FlatList
        data={wallpaperData}
        keyExtractor={({id}, index) => id}
        renderItem={({item}) => (
          <TouchableOpacity style={styles.wallpaperWrapper}>
            <View style={styles.imageWrapper}>
              <Image
                resizeMode="cover"
                source={{
                  uri: item.urls.regular,
                }}
                style={styles.imageContainer}
              />
            </View>
            <View style={styles.imageOptions}>
              <View style={styles.likeIcon}></View>
              <View style={styles.downloadIcon}></View>
              <View style={styles.infoIcon}></View>
            </View>
            {/* <Text style={{color: '#FFF'}}>{item.description}</Text> */}
            {/* <Text>{item.likes}</Text> */}
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wallpaperWrapper: {
    backgroundColor: 'red',
  },
  imageContainer: {
    flex: 1,
    width: 340,
    height: 340,
    resizeMode: 'contain',
    borderRadius: 15,
    borderColor: '#FFF',
    marginVertical: 10,
  },
  imageWrapper: {
    alignItems: 'center',
    resizeMode: 'contain',
    elevation: 10,
  },
});

export default WallpaperContainer;
