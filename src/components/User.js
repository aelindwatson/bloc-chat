import React, { Component } from 'react';

class User extends Component {
  constructor(props) {
    super(props);


  this.signInWithPopUp = this.signInWithPopUp.bind(this);
  this.signOut = this.signOut.bind(this);
}

componentDidMount() {
  this.props.firebase.auth().onAuthStateChanged( user => {
    this.props.setUser(user);
  });
}

signInWithPopUp() {
  const provider = new this.props.firebase.auth.GoogleAuthProvider();
  this.props.firebase.auth().signInWithPopUp( provider ).then(function(result) {
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
      <button onClick={ this.signInWithPopUp }>Log In</button>
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
