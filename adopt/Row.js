import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ListView,
  Image,
  TouchableOpacity
} from 'react-native';

export default class Feed extends Component {
  
  render(){
    let urlImagem = './img/'+this.props.data.url;
    return (
      <TouchableOpacity style={{height:80}}
      onPress={() => {
        this.props.navigator.push({
          mark: 1,
          idCachorro: this.props.data.id
        })
      }}>
        <View style={styles.box}>
            <Image 
            source={{uri: "http://fotos.sofotos.org/filhotes-de-cachorros/filhotes-de-cachorro-fofo.jpg"}}/>
            
            <View><Text>{this.props.data.raca}</Text></View>
            <View><Text>{this.props.data.especie}</Text></View>

        </View>
      </TouchableOpacity>
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
    marginTop: 20},
}
);
