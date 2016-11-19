import React, {Component} from 'react';
import {StyleSheet, Text, View, ListView, TouchableHighlight, Navigator} from 'react-native';

import Row from './Row';
import DogDetail from './DogDetail';

const SideMenu = require('react-native-side-menu');

var animais = [
  {
    "raca": "Doberman",
    "id": "1",
    "especie": " Cachorro",
    "endereco": "Avenida Fraga maia",
    "nascimento": "30/05/1996",
    "sexo": "Femea",
    "fotos": "",
    "decricao": "Victor",
    "url": "http://fotos.sofotos.org/filhotes-de-cachorros/filhotes-de-cachorro-fofo.jpg"
  }, {
    "raca": "Doberman",
    "id": "2",
    "especie": " Cachorro",
    "endereco": "Avenida Fraga maia",
    "nascimento": "30/05/1996",
    "sexo": "Femea",
    "fotos": "",
    "decricao": "Victor",
    "url": "http://fotos.sofotos.org/filhotes-de-cachorros/filhotes-de-cachorro-fofo.jpg"
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
          let data = [];
          for(let i = 0 ; i < animais.length ; i++){
            console.log(animais[i].id, " = animal id");
            console.log(route.idCachorro, " = id cachorro");
            if(animais[i].id == route.idCachorro){
              data = animais[i];
            }
          }
          console.log("data equals to ", data);
            return (
              <DogDetail data={data} />
            )
        }
      }}></Navigator></SideMenu>
    );

}

}
