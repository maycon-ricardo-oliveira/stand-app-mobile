import React, { PropsWithChildren, ReactNode, useState } from 'react';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';
import { ScrollView, TouchableOpacity, View, Text } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import { AccordionItem } from '../AccordionItem';


export function Accordion() {
  const {linear} = theme.colors;
  const [ expanded, setExpanded ] = useState(false);

  function toggleItem() {
    setExpanded(!expanded);
  } 

 return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={styles.container}>
      <AccordionItem title="Native development">
          <Text style={styles.textSmall}>React Native lets you create truly native apps and
          doesn't compromise your users' experiences. It provides a core set of platform
          agnostic native components </Text>
      </AccordionItem>
      <AccordionItem title="Fast refresh">
          <Text style={styles.textSmall}>See your changes as soon as you save.
          With the power of JavaScript, React Native lets you iterate at
          lightning speed.</Text>
      </AccordionItem>
      <AccordionItem title="Cross-platform">
          <Text style={styles.textSmall}>React components wrap existing native code
          and interact with native APIs via React’s declarative UI paradigm
          and JavaScript. This enables native app development for whole new teams
          of developers</Text>
          <View style={styles.seperator}></View>
          <TouchableOpacity><Text>See more...</Text></TouchableOpacity>
      </AccordionItem>
    </ScrollView>
  );
}