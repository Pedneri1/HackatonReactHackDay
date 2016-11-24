import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Navigator,
    Button,
    TextInput
} from 'react-native';

import Feed from './Feed';

export default class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            login: '',
            senha: ''
        }
    }
    //To stop to return scene when we touch in the left and pull to right.
    //it's necessary to pass the prop configureScene={} in the navigator tag.


    render() {
        
                        return (
                            <View style={styles.container}>
                                  <Image
                                  style={styles.logo}

                                      source={{uri: "http://www.expertoanimal.com/es/images/3/6/1/img_socializar_a_un_cachorro_correctamente_20163_600.jpg"}}
                                    />
                                <Text style={styles.welcome}>
                                    Bem vindo ao Adopt.me
                                </Text>
                                <TextInput
                                    style={{height: 40}}
                                    placeholder="Insira seu email"
                                    onChangeText={(login) => {
                                        this.setState({login});
                                    }} />
                                <TextInput
                                    style={{height: 40}}
                                    placeholder="Insira sua senha"
                                    onChangeText={(senha) => {
                                        this.setState({senha});
                                    }}
                                    />
                                <Button
                                    title="Entrar"
                                    onPress={() => {
                                        let login = this.state.login;
                                        let senha = this.state.senha;
                                        console.log("login = ", login, " senha = ", senha);
                                        if(login == '' || login == ''){
                                            if(senha == ''){
                                                this.props.navigator.push({index: 1});
                                            } else {
                                                alert("Login ou senha incorretos");
                                                //navigator.push({mark: 1});
                                            }
                                        } else {
                                            alert("Login ou senha incorretos");
                                            //navigator.push({mark: 1});
                                        }
                                }}/>
                            </View>
                        );
                }
    }


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
        marginLeft: 20,
        marginRight: 20,
        backgroundColor: '#F5FCFF'
    },
    logo: {
      height: 300,
      width: 300,
      borderRadius: 150
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5
    }
});
