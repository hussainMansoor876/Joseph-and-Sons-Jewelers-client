import React from 'react';
import logo from './logo.svg';
import './App.css';
import firebase from './firebase'

var provider = new firebase.auth.GoogleAuthProvider();

class App extends React.Component {
  constructor() {
    super()
  }

  async gooogleLogin() {
    firebase.auth().signInWithPopup(provider).then(function(result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      console.log(user)
      // ...
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
  }

  render() {
    return (
      <div>
        <button onClick={() => this.gooogleLogin()}>Dabao</button>
      </div>
    )
  }
}

export default App;
