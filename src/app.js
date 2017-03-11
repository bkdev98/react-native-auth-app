import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Spinner } from './components/common';
import LoginForm from './components/LoginForm';
import Logout from './components/Logout';

class App extends Component {
    state = { loggedIn: null, user: null };

    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyCChveCL-FIypCwPHb1mAFsZzCGeXryWME',
            authDomain: 'authentication-176db.firebaseapp.com',
            databaseURL: 'https://authentication-176db.firebaseio.com',
            storageBucket: 'authentication-176db.appspot.com',
            messagingSenderId: '518009295294'
        });

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true, user });
            } else {
                this.setState({ loggedIn: false, user: null });
            }
        });
    }

    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                return (
                    <Logout
                        user={this.state.user}
                        onPressLogout={() => firebase.auth().signOut()} 
                    />
                );
            case false:
                return <LoginForm />;
            default:
                return <Spinner size="large" />;
        }
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                {this.renderContent()}
            </View>
        );
    }
}

export default App;
