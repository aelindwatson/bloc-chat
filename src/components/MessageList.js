import React, { Component } from 'react';

class MessageList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: [],
      content: ''
    };

    this.messagesRef = this.props.firebase.database().ref("messages");
    this.handleChange = this.handleChange.bind(this);
    this.createMessage = this.createMessage.bind(this);

  }

  componentDidMount() {
    this.messagesRef.on('child_added', snapshot => {
      const message = snapshot.val();
      message.key = snapshot.key;
      this.setState({ messages: this.state.messages.concat( message ) })
    });
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({
      content: e.target.value,
    });
  }

  createMessage(e) {
    e.preventDefault();
    this.messagesRef.push({
      currentUser: this.props.currentUser ? this.props.currentUser.displayName : "Guest",
      content: this.state.content,
      sentAt: this.props.firebase.database.ServerValue.TIMESTAMP,
      roomId: this.props.activeRoom.key
    });

    this.setState({ content: '' });
  }

  render() {
    return (
      <div className="messageContainer">
        <section className="messageListContainer">
          <ul>
            {this.state.messages.map( (message) => {
              if (message.roomId === this.props.activeRoom.key) {
                return <li key={ message.key }>{ message.content } <br />
                  <span><em>{ message.currentUser }</em></span>
                </li>
              }
                return (null);
            })
          }
          </ul>
          <form onSubmit={this.createMessage}>
            <input type="text" value={this.state.content} onChange={this.handleChange} />
            <input type="submit" value="Send" />
          </form>
        </section>
      </div>
    );
  }

}

export default MessageList;
