import React, { Component } from 'react';

class User extends Component {
  constructor(props) {
    super(props);


  this.signInWithPopup = this.signInWithPopup.bind(this);
  this.signOut = this.signOut.bind(this);
}

componentDidMount() {
  this.props.firebase.auth().onAuthStateChanged( user => {
    this.props.setUser(user);
  });
}

signInWithPopup() {
  const provider = new this.props.firebase.auth.GoogleAuthProvider();
  this.props.firebase.auth().signInWithPopup( provider ).then(function(result) {
    console.log(result);
  });
}

signOut() {
  this.props.firebase.auth().signOut().then(function(result) {
    });
}

render() {
  return (
    <div className="buttons">
      <button onClick={ this.signInWithPopup }>Log In</button>
      <button onClick={ this.signOut }>Log Out</button>
       <div>
          <p className="greeting">
            Welcome, {this.props.currentUser ? this.props.currentUser.displayName : "Guest"}!
          </p>
        </div>
      </div>
    );
  }
}

export default User;
