import React, { useCallback, useState } from 'react';
import {Image, ScrollView, Text, TouchableOpacity, TouchableOpacityProps, View } from 'react-native';

import { styles } from './styles';
import { useFocusEffect } from '@react-navigation/native';

type Props = {
  pictures?: [];
}

type PictureProp = {
  uri: string;
}

export function ListPictures({ pictures, ...rest }: Props) {

  const [images, setImages] = useState<Array<PictureProp>>([]);

  function loadImages() {

      let imagesData = [
        {
          uri: 'https://firebasestorage.googleapis.com/v0/b/stand-app-380304.appspot.com/o/comedians%2Frenato-albani%2Falbum%2Fgallery-renato-1.png?alt=media&token=eb78c223-b7bf-490d-923a-5f9f7205a569'
        },
        {
          uri: 'https://firebasestorage.googleapis.com/v0/b/stand-app-380304.appspot.com/o/comedians%2Frenato-albani%2Falbum%2Fgallery-renato-2.png?alt=media&token=dc911570-60cd-4201-a39e-a5c053d4adaa'
        },
        {
          uri: 'https://firebasestorage.googleapis.com/v0/b/stand-app-380304.appspot.com/o/comedians%2Frenato-albani%2Falbum%2Fgallery-renato-3.png?alt=media&token=508f008b-3a5b-41bb-8d74-02835d11a59f'
        },
        {
          uri: 'https://firebasestorage.googleapis.com/v0/b/stand-app-380304.appspot.com/o/comedians%2Frenato-albani%2Falbum%2Fgallery-renato-3.png?alt=media&token=508f008b-3a5b-41bb-8d74-02835d11a59f'
        },
        {
          uri: 'https://firebasestorage.googleapis.com/v0/b/stand-app-380304.appspot.com/o/comedians%2Frenato-albani%2Falbum%2Fgallery-renato-3.png?alt=media&token=508f008b-3a5b-41bb-8d74-02835d11a59f'
        },
        {
          uri: 'https://firebasestorage.googleapis.com/v0/b/stand-app-380304.appspot.com/o/comedians%2Frenato-albani%2Falbum%2Fgallery-renato-3.png?alt=media&token=508f008b-3a5b-41bb-8d74-02835d11a59f'
        },
        {
          uri: 'https://firebasestorage.googleapis.com/v0/b/stand-app-380304.appspot.com/o/comedians%2Frenato-albani%2Falbum%2Fgallery-renato-3.png?alt=media&token=508f008b-3a5b-41bb-8d74-02835d11a59f'
        }
      ];

      setImages(imagesData)
  }

  let squares = [];
  let numberOfSquares = images.length;

  for (let index = 0; index < numberOfSquares; index++) {

    squares.push(
      <View key={index}>
        <View style={styles.imageCard}>
          {images[index] && 
            <Image
              source={{
              uri: images[index].uri}} 
              style={styles.image}
            />
          }
        </View>
      </View>
    )
  }

  useFocusEffect(useCallback(() => {
    console.log('load images')
    loadImages();
  }, []));

  return (
    
    <ScrollView
      style={styles.events}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
    >
      <View style={styles.imagesContainer}>
        { squares }
      </View>
    </ScrollView>

    
  )
}