import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import colors from '../assets/colors';

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
    <View style={{flex: 1}}>
      <FlatList
        data={wallpaperData}
        keyExtractor={({id}, index) => id}
        renderItem={({item}) => (
          <View style={styles.wallpaperWrapper}>
            <TouchableOpacity style={styles.imageWrapper}>
              <Image
                resizeMode="cover"
                source={{
                  uri: item.urls.regular,
                }}
                style={styles.imageContainer}
              />
            </TouchableOpacity>
            <View style={styles.imageOptions}>
              <TouchableOpacity style={styles.likeIcon}>
                <Icon name="heart" size={25} color={colors.accent} />
                <Text style={styles.likeText}>{item.likes}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.downloadIcon}>
                <Icon name="download" color="white" size={25} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.infoIcon}>
                <Icon name="more" size={25} color="white" />
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wallpaperWrapper: {
    backgroundColor: colors.grey,
    padding: 20,
    marginVertical: 20,
    borderRadius: 20,
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
  imageOptions: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginHorizontal: 80,
  },
  likeIcon: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  likeText: {
    color: colors.white,
    fontSize: 18,
    fontFamily: 'Raleway-Medium',
    marginLeft: 5,
  },
  downloadIcon: {},
  infoIcon: {},
});

export default WallpaperContainer;
