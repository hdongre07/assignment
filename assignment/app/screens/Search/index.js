import React, {Component} from 'react';
import {View, FlatList, TextInput, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import UserActions from '../../actions';
import Item from './component/item';
import NavigationHeader from '../../components/navigationHeader';

class Search extends Component {
  constructor(props) {
    super(props);
    this.search = 'Query';
    this.state = {};
  }

  componentDidMount() {
    this.props.getMovieRequest(this.search, 1);
  }

  render() {
    const {
      data: {list, totalPage, nextPage},
    } = this.props;
    return (
      <View style={style.container}>
        <NavigationHeader title={'Search'} />
        <TextInput
          placeholder={'Search'}
          onChangeText={(text) => {
            console.log(text);
            this.search = text;
            this.props.getMovieRequest(text, 1);
          }}
          style={style.input}
        />
        <FlatList
          numColumns={2}
          data={list}
          onEndReached={() => {
            if (totalPage > nextPage) {
              this.props.getMovieRequest(this.search, nextPage);
            }
          }}
          renderItem={({item}) => {
            return (
              <Item
                onPress={() => {
                  this.props.navigation.navigate('Detail', {id: item.imdbID});
                }}
                item={item}
              />
            );
          }}
        />
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#424242',
  },
  input: {
    margin: 5,
    backgroundColor: 'white',
    borderRadius: 3,
  },
});

const mapStateToProps = (state) => ({
  data: state.getMovies,
});

const mapDispatchToProps = () => UserActions;

const SearchScreen = connect(mapStateToProps, mapDispatchToProps)(Search);

export default SearchScreen;
