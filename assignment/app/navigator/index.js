import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

import Search from '../screens/Search';

import Detail from '../screens/Detail';

const RootNavigator = createStackNavigator(
  {
    Search: {
      screen: Search,
      key: 'SearchScreen',
      navigationOptions: {
        header: null,
        gesturesEnabled: false,
      },
    },
    Detail: {
      screen: Detail,
      key: 'DetailScreen',
      navigationOptions: {
        header: null,
        gesturesEnabled: false,
      },
    },
  },
  {
    initialRouteName: 'Search',
    headerMode: 'none',
  },
);

export default createAppContainer(RootNavigator);
