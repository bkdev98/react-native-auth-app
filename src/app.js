import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyCChveCL-FIypCwPHb1mAFsZzCGeXryWME',
            authDomain: 'authentication-176db.firebaseapp.com',
            databaseURL: 'https://authentication-176db.firebaseio.com',
            storageBucket: 'authentication-176db.appspot.com',
            messagingSenderId: '518009295294'
        });
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                <LoginForm />
            </View>
        );
    }
}

export default App;
