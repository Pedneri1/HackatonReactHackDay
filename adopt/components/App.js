import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';

import Login from './Login';
import Feed from './Feed';
import DogDetail from './DogDetail';

export default class App extends Component {

      configureScene(route, routeStack) {
        return Navigator.SceneConfigs.FadeAndroid;
    }

  render(){
    return(<Navigator
    initialRoute={{
      title: 'Adopt.me',
      index: 0
    }}
    configureScene={this.configureScene}
    renderScene={(route, navigator)=>{
      switch(route.index)
      {
        case 0:
          return <Login  navigator={navigator}/>
        case 1:
          return <Feed navigator = {navigator}/>
        case 2:
          return <DogDetail navigator = {navigator} data={route.data}/>
      }
    }}></Navigator>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});