import React, {Component} from 'react';
import {StyleSheet, Text, View, Navigator, Button} from 'react-native';

import Feed from './Feed';

export default class Login extends Component {
    render() {
        return (
            <Navigator
                initialRoute={{
                mark: 0
            }}
                renderScene={(route, navigator) => {
                switch (route.mark) {
                    case 0:
                        return (
                            <View style={styles.container}>
                                <Text style={styles.welcome}>
                                    Bem vindo ao Adopt.me
                                </Text>
                                <Text>
                                    Faça login
                                </Text>
                                <Button
                                    title="Feed"
                                    onPress={() => {
                                    navigator.push({
                                        mark: 1
                                    });
                                }}/>
                            </View>
                        );
                    case 1:
                        return (<Feed />);
                }
            }}></Navigator>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
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