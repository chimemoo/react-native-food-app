import React from 'react';
import AppNavigator from './app/navigators/AppNavigator';
import {Provider} from 'react-redux';
import store from './app/store';
export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      possibleFriends: [
        'Allie',
        'Gator',
        'Lizzie',
      ],
      currentFriends: [],
    }
  }
  render() {
    return (
      <Provider store={store}>
        <AppNavigator/>
      </Provider>
      
    );
  }
}