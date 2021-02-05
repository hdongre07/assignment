import React, {Component} from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import UserActions from '../../actions';
import TitleDescription from './component/titleDescription';
import Header from './component/header';
import NavigationHeader from '../../components/navigationHeader';

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log(this.props.navigation.state.params);
    const id = this.props.navigation.state.params.id;
    this.props.getMovieDetailRequest(id);
  }

  render() {
    const {
      data: {
        Title,
        Year,
        Rated,
        Released,
        Runtime,
        Genre,
        Director,
        Writer,
        Actors,
        Plot,
        Language,
        Country,
        Awards,
        Poster,
        Ratings,
        imdbRating,
        imdbVotes,
        Type,
        DVD,
        BoxOffice,
        Production,
        Website,
      },
    } = this.props;
    return (
      <View style={style.container}>
        {/* <View style={{ height: 45, backgroundColor: '#757575'}}>
          <TouchableOpacity style={{ height: 45 }} onPress={() => {
            this.props.navigation.pop();
          }}><Text>Back</Text></TouchableOpacity>
        </View> */}
        <NavigationHeader
          title={'Detail'}
          onPressBack={() => {
            this.props.navigation.pop();
          }}
        />
        <ScrollView style={style.contentView}>
          <Header Poster={Poster} title={Title} description={Year} />
          <View style={style.topSmallBox}>
            <TitleDescription title="Genre" description={Genre} />
            <TitleDescription title="Running Time" description={Runtime} />
            <TitleDescription title="IMDB Rating" description={imdbRating} />
          </View>
          <TitleDescription title="Actors" description={Actors} />
          <TitleDescription title="Writers" description={Writer} />
          <TitleDescription title="Rated" description={Rated} />
          <TitleDescription title="Released" description={Released} />
          <TitleDescription title="Director" description={Director} />
          <TitleDescription title="Language" description={Language} />
          <TitleDescription title="Country" description={Country} />
          <TitleDescription title="Awards" description={Awards} />
          <TitleDescription title="Production" description={Production} />
          <TitleDescription title="Website" description={Website} />
          <TitleDescription title="Plot" description={Plot} />
          <TitleDescription title="imdb Votes" description={imdbVotes} />
        </ScrollView>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#757575',
  },
  contentView: {
    flex: 1,
    backgroundColor: '#424242',
  },
  topSmallBox: {
    flexDirection: 'row',
  },
});

const mapStateToProps = (state) => ({
  data: state.getMovies.getMovieDetailResponse,
});

const mapDispatchToProps = () => UserActions;

const DetailScreen = connect(mapStateToProps, mapDispatchToProps)(Detail);

export default DetailScreen;
