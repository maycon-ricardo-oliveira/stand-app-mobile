import React, { useCallback, useState } from 'react';
import { FlatList, Image, ScrollView, Text, TouchableOpacity, TouchableOpacityProps, View } from 'react-native';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';
import { CardEvent, EventProps } from '../CardEvent';
import { useFocusEffect } from '@react-navigation/native';

type Props = {
  pictures?: [];
}

type PictureProp = {
  width: number,
  height: number,
  uri: string;
}

export function ListPictures({ pictures, ...rest }: Props) {
  const { violet, success200, error200 } = theme.colors;

  const [images, setImages] = useState<Array<PictureProp>>([]);
  const [currentWidth, setCurrentWidth] = useState(0);
  const [currentHeight, setCurrentHeigh] = useState(0);

  function loadEvents() {

      let imagesData = [
        {
          width: 0,
          height: 0,
          uri: 'https://firebasestorage.googleapis.com/v0/b/stand-app-380304.appspot.com/o/comedians%2Frenato-albani%2Falbum%2Fgallery-renato-1.png?alt=media&token=eb78c223-b7bf-490d-923a-5f9f7205a569'
        },
        {
          width: 0,
          height: 0,
          uri: 'https://firebasestorage.googleapis.com/v0/b/stand-app-380304.appspot.com/o/comedians%2Frenato-albani%2Falbum%2Fgallery-renato-2.png?alt=media&token=dc911570-60cd-4201-a39e-a5c053d4adaa'
        },
        {
          width: 0,
          height: 0,
          uri: 'https://firebasestorage.googleapis.com/v0/b/stand-app-380304.appspot.com/o/comedians%2Frenato-albani%2Falbum%2Fgallery-renato-3.png?alt=media&token=508f008b-3a5b-41bb-8d74-02835d11a59f'
        }
      ];

      imagesData.map( (image, index) => {
        
        Image.getSize(image.uri, (width, height) => {
        
          image.height = height;
          image.width = width;
          console.log(`Image size: ${image.width} ${image.height}`)
        });
        
      })
  }

  useFocusEffect(useCallback(() => {
    console.log('load images')
    loadEvents();
  }, []));

  return (
    
    <ScrollView
      style={styles.events}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      >

        {
        
          images.map((image) => {
            return (
              <Image
                source={{
                uri: 'https://firebasestorage.googleapis.com/v0/b/stand-app-380304.appspot.com/o/comedians%2Frenato-albani%2Falbum%2Fgallery-renato-1.png?alt=media&token=eb78c223-b7bf-490d-923a-5f9f7205a569'}} 
                style={[styles.image,]}
              />
              
            )
          })
          
        }
        <Image 
				    source={{uri: 'https://firebasestorage.googleapis.com/v0/b/stand-app-380304.appspot.com/o/comedians%2Frenato-albani%2Falbum%2Fgallery-renato-1.png?alt=media&token=eb78c223-b7bf-490d-923a-5f9f7205a569'}} 
				    style={[styles.image,]}
            
				  />

      </ScrollView>

  )
}