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
      <View style={styles.box} backgroundColor='#ffffff'>
      <TouchableOpacity style={{flex:1}}
      onPress={() => {
        this.props.navigator.push({
          index: 2,
          data: this.props.data
        })
      }}>
        <View style={styles.inside}>
            <Image style={{flex: 4,  borderRadius: 10}} source={{uri: this.props.data.url}}/>
            <View style={{flex:1}}>
              <View >
                <Text style={{fontSize: 22, textAlign: 'center',fontWeight: 'bold'}}>{this.props.data.especie} - {this.props.data.raca}</Text>
              </View>
              <Text> {this.props.data.descricao} </Text>

            </View>
          </View>
     </TouchableOpacity>
    </View>
    );

  }
}

const styles = StyleSheet.create({
  box: {
    height: 360,
    flex: 1,
    flexDirection:'row',
    elevation: 5,
    marginBottom: 5,
    marginLeft: 10,
    marginRight:10,
    marginTop: 10,
    borderRadius: 10},
  inside:{
    flexDirection:'column',
    flex: 1,
    marginLeft: 20,
    marginRight:20,
    marginBottom: 20,
    marginTop: 20,


  }

}
);
