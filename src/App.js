import React, { Component } from 'react';
import * as firebase from 'firebase';
import './App.css';
import RoomList from './components/RoomList';

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyAZun6KeyqZOL8zBiwbf09AeB9sT_3HY-M",
    authDomain: "bloc-chat-app-15a81.firebaseapp.com",
    databaseURL: "https://bloc-chat-app-15a81.firebaseio.com",
    projectId: "bloc-chat-app-15a81",
    storageBucket: "bloc-chat-app-15a81.appspot.com",
    messagingSenderId: "931853572091"
  };
  firebase.initializeApp(config);

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="App-title">Bloc Chat</h1>
        <aside id="sidebar">
          <RoomList firebase={firebase} />
        </aside>  
      </div>
    );
  }
}

export default App;
