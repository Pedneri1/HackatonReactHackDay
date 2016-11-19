import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ListView,
  TouchableHighlight
} from 'react-native';

import Row from './Row';
var animais = [
    { "raca": "Doberman",
      "especie":" Cachorro",
      "endereco": "Avenida Fraga maia",
      "nascimento": "30/05/1996",
      "sexo": "Femea",
      "fotos": "",
      "decricao": "Victor"},
      { "raca": "Doberman",
        "especie":" Cachorro",
        "endereco": "Avenida Fraga maia",
        "nascimento": "30/05/1996",
        "sexo": "Femea",
        "fotos": "",
        "decricao": "Victor"}
  ]
export default class Feed extends Component {
  constructor() {
    super();
    var dataSource = new ListView.DataSource({rowHasChanged:(r1,r2) => r1.guid != r2.guid});
    this.state = {
      dataSource: dataSource.cloneWithRows(animais)
    }
  }

  render(){
    return (
      <ListView dataSource={this.state.dataSource}
            renderRow={(dataSource)=> <Row
                data = {dataSource}
                />
            }>
      </ListView>
    );

  }

}
