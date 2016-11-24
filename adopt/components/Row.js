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
    console.log("A URL EH IGUAL A", this.props.data.url);
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
            <Image style={{height: 70, width: 70, marginRight: 10, borderRadius: 10}} source={{uri: this.props.data.url}}/>
            <View style={{flex:2, flexDirection:'column' }}>
              <View><Text style={{fontWeight: 'bold'}}>{this.props.data.especie}</Text></View>
              <Text >{this.props.data.raca}</Text>
              <View style={{flex:1, flexDirection:'row'}}>
                <Text>{this.props.data.descricao}</Text>
                <Text>{this.props.data.endereco}</Text>
              </View>
            </View>
          </View>
      </TouchableOpacity>
    );

  }
}

const styles = StyleSheet.create({
  box: {
    height: 70,
    flex: 1,
    flexDirection:'row',
    elevation: 5,
    marginBottom: 5,
    marginLeft: 10,
    marginRight:10,
    marginTop: 20},
}
);
