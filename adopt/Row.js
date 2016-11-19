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
        <View style={styles.box}>
            <View style={{width: 100, height: 100, backgroundColor: '#e4f4ef'}}>

            </View>
            <View><Text>{this.props.data.raca}</Text></View>
            <View><Text>{this.props.data.especie}</Text></View>

        </View>
      </TouchableHighlight>
    );

  }
}

const styles = StyleSheet.create({
  box: {
    flex: 1,
    flexDirection:'row',
    elevation: 5,
    marginBottom: 5,
    marginLeft: 10,
    marginRight:10,
    marginTop:5},
}
);
