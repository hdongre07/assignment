import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const style = StyleSheet.create({
  container: {
    flex: 1,
    height: 300,
  },
  image: {
    flex: 1,
  },
  titleContent: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  title: {
    color: 'yellow',
    fontSize: 24,
    fontWeight: 'bold',
  },
  description: {
    color: 'yellow',
    fontSize: 16,
    fontWeight: '800',
  },
  seperator: {
    height: 1,
    backgroundColor: 'black',
  },
});

const Header = (props) => {
  return (
    <View style={style.container}>
      <Image style={style.image} source={{uri: props.Poster}} />
      <View style={style.titleContent}>
        <Text style={style.title}>{props.title}</Text>
        <Text style={style.description}>{props.description}</Text>
      </View>
      <View style={style.seperator} />
    </View>
  );
};

export default Header;
