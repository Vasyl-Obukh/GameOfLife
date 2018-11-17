import React, { Component } from "react";
import './css/Button.css'

class PlayAndStop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPlaying: this.props.isPlaying
    }
  }

  handleClick = (event) => {
    this.props.onPlayAndStop(event);
    this.setState({
      isPlaying: !this.state.isPlaying
    })
  }

  render() {
    return <button class='menu--btn play' onClick={this.handleClick}>
      <i className={`fa fa-${this.state.isPlaying ? 'stop' : 'play' }-circle`} />
      </button>;
  }
}

export default PlayAndStop;