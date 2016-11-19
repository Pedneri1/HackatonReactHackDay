import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ListView,
  TouchableHighlight
} from 'react-native';

export default class Feed extends Component {
  render(){
    return (
      <TouchableHighlight style={{height:80}}>
        <View style={{flex: 1, flexDirection:'row'}}>
            <View style={{width: 100, height: 100, backgroundColor: '#e4f4ef'}}>

            </View>
            <View><Text>{this.props.data.raca}</Text></View>
            <View><Text>{this.props.data.especie}</Text></View>

        </View>
      </TouchableHighlight>
    );

  }

}
