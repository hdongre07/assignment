import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const style = StyleSheet.create({
  container: {
    height: 45,
    backgroundColor: '#757575',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: 'white',
    fontSize: 16,
    fontWeight: '400',
    marginHorizontal: 50,
  },
  back: {
    position: 'absolute',
    left: 0,
    top: 0,
    height: 40,
    width: 40,
    alignItems: 'center',
  },
  backIcon: {
    color: 'white',
    fontSize: 24,
    fontWeight: '800',
  },
});

const NavigationHeader = (props) => {
  return (
    <View style={style.container}>
      <Text style={style.title}>{props.title}</Text>
      {props.onPressBack && (
        <TouchableOpacity onPress={props.onPressBack} style={style.back}>
          <Text style={style.backIcon}>{'<'}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default NavigationHeader;
