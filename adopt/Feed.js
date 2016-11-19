import React, {Component} from 'react';
import {StyleSheet, Text, View, ListView, TouchableHighlight, Navigator} from 'react-native';

import Row from './Row';

const SideMenu = require('react-native-side-menu');

var animais = [
  {
    "raca": "Doberman",
    "especie": " Cachorro",
    "endereco": "Avenida Fraga maia",
    "nascimento": "30/05/1996",
    "sexo": "Femea",
    "fotos": "",
    "decricao": "Victor"
  }, {
    "raca": "Doberman",
    "especie": " Cachorro",
    "endereco": "Avenida Fraga maia",
    "nascimento": "30/05/1996",
    "sexo": "Femea",
    "fotos": "",
    "decricao": "Victor"
  }
]
export default class Feed extends Component {
  constructor() {
    super();
    var dataSource = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1.guid != r2.guid
    });
    this.state = {
      dataSource: dataSource.cloneWithRows(animais)
    }
  }


 render() {
    return (<SideMenu>
      <Navigator
        initialRoute={{ mark: 0 }}
        renderScene={(route, navigator) => {
        switch (route.mark) {
          case 0:
            return (
              <ListView
                dataSource={this.state.dataSource}
                navigator={navigator}
                renderRow={(dataSource) => <Row data={dataSource} navigator={navigator} />}></ListView>
            );
          case 1:
            return (
              <View><Text>Cool</Text></View>
            )
        }
      }}></Navigator></SideMenu>
    );

}

}
