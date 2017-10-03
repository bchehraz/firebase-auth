import React from 'react';
import { StyleSheet, View } from 'react-native';
import firebase from 'firebase';
import SignUpForm from './components/SignUpForm';
import SignInForm from './components/SignInForm';

export default class App extends React.Component {
  componentDidMount() {
    const config = {
      apiKey: 'AIzaSyBOVlUmEt2VXtgIT5SkQdznc_FeZCLipnA',
      authDomain: 'one-time-password-84a07.firebaseapp.com',
      databaseURL: 'https://one-time-password-84a07.firebaseio.com',
      projectId: 'one-time-password-84a07',
      storageBucket: 'one-time-password-84a07.appspot.com',
      messagingSenderId: '764997538318'
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <View style={styles.container}>
        <SignUpForm />
        <SignInForm />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
