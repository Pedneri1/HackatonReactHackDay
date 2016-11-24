import React, {Component} from 'react';
import {StyleSheet, Text, View, ListView, TouchableHighlight, Navigator, Image} from 'react-native';

import Row from './Row';
import NavigationBar from 'react-native-navbar';

export default class DogDetail extends Component {

// <Image
//             style={{width: 350, height: 350, marginRight: 10}}
//             source={{uri: this.props.data.url}} />


  render() {
    console.log(this.props.data);
    var rightButtonConfig = {
    title: 'Voltar',
    handler: function onNext() {
      alert("OK");
      this.props.navigator.pop();
    }
    };

    var titleConfig = {
        title: this.props.data.raca,
    };
    return (
        <View>
            <NavigationBar
            title={titleConfig}
            />

            <View>
            <Image
                        style={{width: 340, height: 340, marginRight: 10, marginLeft: 10, borderRadius: 10}}
                        source={{uri: this.props.data.url}} />

            </View>

            <View style={{
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'flex-start',
                margin: 10}
            }>
                <Text>Raça: {this.props.data.raca}</Text>
                <Text>Especie: {this.props.data.especie}</Text>
                <Text>Nascimento: {this.props.data.nascimento}</Text>
                <Text>Sexo: {this.props.data.sexo}</Text>
                <Text>Descricao: {this.props.data.descricao}</Text>
                <Text>Endereco: {this.props.data.endereco}</Text>
            </View>
            </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
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
  descriptions: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      margin: 10
  }
});
