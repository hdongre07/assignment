import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const style = StyleSheet.create({
  container: {
    padding: 10,
  },
  title: {
    color: 'yellow',
    fontSize: 16,
    fontWeight: '600',
  },
  description: {
    color: 'white',
    fontSize: 16,
    fontWeight: '200',
  },
});

const TitleDescription = (props) => {
  return (
    <View style={style.container}>
      <Text style={style.title}>{props.title}</Text>
      <Text style={style.description}>{props.description}</Text>
    </View>
  );
};

export default TitleDescription;
