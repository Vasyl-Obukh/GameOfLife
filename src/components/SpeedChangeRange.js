import React, { Component } from "react";
import './css/SpeedChangeRange.css';

class SpeedChangeRange extends Component {
  constructor(props) {
    super(props);
    this._rangeMin = 0;
    this._rangeMax = 3000;
    this._step = 250;
    this.state = {
      value: 1000
    };
  }

  get rangeMin() {
    return this._rangeMin;
  }

  set rangeMin(rangeMin) {
    this._rangeMin = rangeMin;
  }

  get rangeMax() {
    return this._rangeMax;
  }

  set rangeMax(rangeMax) {
    this._rangeMax = rangeMax;
  }

  get step() {
    return this._step;
  }

  set step(step) {
    this._step = step;
  }

  handleChange = async e => {
    await this.setState({ value: e.target.value });
    this.props.onSpeedChange(this.state.value);
  };

  render() {
    return (
        <input
          type="range"
          className='menu--range'
          value={this.state.value}
          min={this.rangeMin}
          max={this.rangeMax}
          step={this.step}
          onChange={this.handleChange}
        />
    );
  }
}

export default SpeedChangeRange;
