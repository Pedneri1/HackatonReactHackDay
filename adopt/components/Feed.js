import React, {Component} from 'react';
import {StyleSheet, Text, View, ListView, TouchableHighlight, Navigator} from 'react-native';

import Row from './Row';
import DogDetail from './DogDetail';


import NavigationBar from 'react-native-navbar';

//To the side bar
const SideMenu = require('react-native-side-menu');

var animais = [
  {
    "id": "1",
    "raca": "Doberman",
    "especie": "Cachorro",
    "endereco": "Avenida Fraga maia",
    "nascimento": "30/05/1996",
    "sexo": "Femea",
    "fotos": "",
    "descricao": "Victor",
    "url": "http://www.canlilaralemi.net/wp-content/uploads/2012/07/Doberman12.jpg"
  }, {
    "raca": "Doberman",
    "id": "2",
    "especie": "Cachorro",
    "endereco": "Avenida Fraga maia",
    "nascimento": "30/05/1996",
    "sexo": "Femea",
    "fotos": "",
    "descricao": "Victor",
    "url": "http://fotos.sofotos.org/filhotes-de-cachorros/filhotes-de-cachorro-fofo.jpg"
  }, {
    "raca": "Poodle",
    "id": "3",
    "especie": "Cachorro",
    "endereco": "Avenida Getulio Vargas",
    "nascimento": "25/09/1992",
    "sexo": "Femea",
    "fotos": "",
    "descricao": "Cachorro quer novo dono",
    "url": "http://image.cachorrogato.com.br/thumb/315/245/1/imagens/racas/imagem201.jpg"
  }, {
    "raca": "Siames",
    "id": "4",
    "especie": "Gato",
    "endereco": "Avenida Joao Durval",
    "nascimento": "22/01/2016",
    "sexo": "Femea",
    "fotos": "",
    "descricao": "Filhotes de siameses",
    "url": "http://i1.r7.com/data/files/2C95/948E/3A11/7C96/013A/1DB7/1717/3F90/gato.jpg"
  }, {
    "raca": "Sem raca",
    "id": "5",
    "especie": "Gato",
    "endereco": "Avenida Fraga maia",
    "nascimento": "20/02/2016",
    "sexo": "Macho",
    "fotos": "",
    "descricao": "Filhotes abandonados",
    "url": "http://www.anda.jor.br/wp-content/uploads/2010/12/gato1.jpg"
  }, {
    "raca": "Persa",
    "id": "6",
    "especie": "Gato",
    "endereco": "Avenida Cerqueira",
    "nascimento": "20/08/2016",
    "sexo": "Macho",
    "fotos": "",
    "descricao": "Filhotes lindos de gatos",
    "url": "https://www.estimacao.com.br/wp-content/uploads/2011/10/filhotes-de-persa.jpg"
  }, {
    "raca": "Pastor Alemao",
    "id": "7",
    "especie": "Cachorro",
    "endereco": "Avenida Maria Quiteria",
    "nascimento": "20/08/2010",
    "sexo": "Macho",
    "fotos": "",
    "descricao": "Antigo cao policial precisa de abrigo",
    "url": "http://www.adestracaodecaes.com.br/wp-content/uploads/2015/06/d8ce76ca37b80c6865cb8c582e65b104.jpg"
  },
  {
    "raca": "Polones",
    "id": "8",
    "especie": "Galo",
    "endereco": "Avenida Getulio Vargas",
    "nascimento": "23/09/2014",
    "sexo": "Macho",
    "fotos": "",
    "descricao": "Doacao de aves",
    "url": "https://pbs.twimg.com/profile_images/792187005128024064/zpQio6uN.jpg"
  }, {
    "raca": "",
    "id": "9",
    "especie": "Chimpanze",
    "endereco": "Avenida Maria Quiteria",
    "nascimento": "16/04/2015",
    "sexo": "Macho",
    "fotos": "",
    "url": "https://pbs.twimg.com/profile_images/685458109893087232/t1n6lBqK_400x400.jpg",
    "descricao": "Lindo filhotinho de Chimpanze"

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

onBackWard(){

}



 render() {
   var titleConfig = {
       title: "Animais proximos"
   };
   var rightButtonConfig = {
   title: ' +',
   handler: function onNext() {
     alert("Cadastre aqui");

   }
   };

            return (
              <View backgroundColor='#e9eaee'>
              <NavigationBar
                title={titleConfig}
                rightButton={rightButtonConfig}
              />
              <ListView
                dataSource={this.state.dataSource}
                navigator={this.props.navigator}
                renderRow={(dataSource) => <Row data={dataSource} navigator={this.props.navigator} />}
              >
              </ListView>
            </View>
            );



}

}
