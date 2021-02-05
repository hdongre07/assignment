import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

const style = StyleSheet.create({
  itemContent: {
    flex: 1,
    padding: 5,
    borderRadius: 3,
    overflow: 'hidden',
  },
  imageContainer: {
    height: 300,
    backgroundColor: '#1b1b1b',
  },
  image: {
    flex: 1,
    backgroundColor: 'lightgrey',
  },
  itemTitle: {
    color: 'white',
    padding: 5,
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '200',
    marginVertical: 10,
  },
});

const Item = (props) => {
  return (
    <TouchableOpacity
      onPress={() => {
        props.onPress(props.item.imdbID);
      }}
      style={style.itemContent}>
      <View style={style.imageContainer}>
        <Image style={style.image} source={{uri: props.item.Poster}} />
        <Text style={style.itemTitle}>{props.item.Title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Item;
