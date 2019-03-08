import React, { Component } from 'react';

class RoomList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rooms: []
    };

    this.roomsRef = this.props.firebase.database().ref("rooms");
  }

componentDidMount() {
  this.roomsRef.on('child_added', snapshot => {
    const room = snapshot.val();
    room.key = snapshot.key;
    this.setState({ rooms: this.state.rooms.concat( room ) })
  });
}

render() {
  return (
    <div className="sidebarContainer">
      <section className="roomListContainer">
         <h3>Bloc Chat Rooms</h3>
        {this.state.rooms.map((room, index) => {
          return <li key={index}>{room.name}</li>;
        })}
      </section>
    </div>
    );
  }
}

export default RoomList;
