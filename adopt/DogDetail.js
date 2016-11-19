import React, {Component} from 'react';
import {StyleSheet, Text, View, ListView, TouchableHighlight, Navigator} from 'react-native';

import Row from './Row';

export default class DogDetail extends Component {


  render() {
    console.log(this.props.data);
    return (
        <View style={styles.container} >
            
            <Text>
                {this.props.data.raca}
            </Text>
        </View>
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
