import React, { Component } from 'react';
import * as firebase from 'firebase';
import './App.css';
import RoomList from './components/RoomList';
import MessageList from './components/MessageList';
import User from './components/User';

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
      currentUser: null,
    };

    this.setActiveRoom = this.setActiveRoom.bind(this);
    this.setUser = this.setUser.bind(this);
  }

  setActiveRoom(room) {
    this.setState({ activeRoom: room });
  }

  setUser(user) {
    this.setState({ currentUser: user});
  }


  render() {
    return (
      <div className="App">
        <h1 className="App-title">BLOC CHAT</h1>

        <aside id="sidebar">
          <RoomList firebase={firebase} setActiveRoom={this.setActiveRoom} />
          { this.state.activeRoom ?
            (<MessageList firebase={firebase} activeRoom={this.state.activeRoom} currentUser={this.state.currentUser}/>) : (null)
          }
        </aside>
        <h3 className="chatRooms">{this.state.activeRoom.name || "Your Chat Rooms"}</h3>
        <User firebase={firebase} currentUser={this.state.currentUser} setUser={this.setUser}/>
      </div>
    );
  }
}

export default App;
