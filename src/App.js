import React, { Component } from 'react';
import * as firebase from 'firebase';
import './App.css';
import RoomList from './components/RoomList';
import MessageList from './components/MessageList';

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
  constructor(props) {
    super(props);
    this.state = {
      activeRoom: '',
      user: '',
    };

    this.setActiveRoom = this.setActiveRoom.bind(this);
  }

  setActiveRoom(room) {
    this.setState({ activeRoom: room });
  }


  render() {
    return (
      <div className="App">
        <h1 className="App-title">BLOC CHAT</h1>
        <h2>{this.state.activeRoom.name || "Select Chat Room"}</h2>
        <aside id="sidebar">
          <RoomList firebase={firebase} setActiveRoom={this.setActiveRoom} />
          { this.state.activeRoom ?
            (<MessageList firebase={firebase} activeRoom={this.state.activeRoom} />) : (null)
          }
        </aside>
      </div>
    );
  }
}

export default App;
