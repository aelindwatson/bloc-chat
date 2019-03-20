import React, { Component } from 'react';

class RoomList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rooms: [],
      name: ''
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

handleChange(e) {
  e.preventDefault();
  this.setState({ name: e.target.value });
}

createRoom(e) {
  e.preventDefault();
  this.roomsRef.push({
    name: this.state.name
  });
  this.setState({ name: '' });
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
      <form onSubmit={ (e) => this.createRoom(e) }>
        <label className="createNewRoom" for="room">Create New Room</label>
        <input className="textBox" type="text" id="room" value={this.state.name} onChange={ (e) => this.handleChange(e) } />
        <button className="createRoom" type="submit">Create Room</button>
      </form>
    </div>
    );
  }
}

export default RoomList;
