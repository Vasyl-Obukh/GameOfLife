import React, { Component } from 'react';
import './css/App.css';
import GameField from './GameField';
import GameManipulator from './GameManipulator';

class App extends Component {
  constructor() {
    super();
    this._gridSize = 20;
    this._gameFieldSize = 900;
    this.state = {
      isAliveArray: this.randomArray(this.gridSize, true),
      cellSize : this.gameFieldSize / this.gridSize,
      gridSize: this.gridSize,
      speed: 1000,
      isPlaying: false
    };
  }

  get gridSize() {
    return this._gridSize;
  }

  set gridSize(gridSize) {
    this._gridSize = gridSize;
    this.setState({gridSize: gridSize});
  }

  get gameFieldSize() {
    return this._gameFieldSize;
  }

  set gameFieldSize(gameFieldSize) {
    this._gameFieldSize = gameFieldSize;
  }

  numberOfNeighbours = (row, col) => {
    const { isAliveArray } = this.state;
    const { gridSize } = this;
    let count = 0;

    if (row !== 0            && col !== 0            && isAliveArray[row - 1][col - 1] === 1) count++;
    if (row !== 0                                    && isAliveArray[row - 1][col] === 1) count++;
    if (row !== 0            && col !== gridSize - 1 && isAliveArray[row - 1][col + 1] === 1) count++;
    if (col !== gridSize - 1                         && isAliveArray[row][col + 1] === 1) count++;
    if (row !== gridSize - 1 && col !== gridSize - 1 && isAliveArray[row + 1][col + 1] === 1) count++;
    if (row !== gridSize - 1                         && isAliveArray[row + 1][col] === 1) count++;
    if (row !== gridSize - 1 && col !== 0            && isAliveArray[row + 1][col - 1] === 1) count++;
    if (col !== 0                                    && isAliveArray[row][col - 1] === 1) count++;

    return count;
  };

  rend = () => {
    const {gridSize} = this.state;
    const array = [];

    for (let i = 0; i < gridSize; i++) {
      array.push([]);
      for (let j = 0; j < gridSize; j++) {
        const NEIGHBOURS_NUM = this.numberOfNeighbours(i, j);
        this.state.isAliveArray[i][j] === 1 ? 
          array[i].push(NEIGHBOURS_NUM === 2 || NEIGHBOURS_NUM === 3 ? 1 : 0) : 
          array[i].push(NEIGHBOURS_NUM === 3 ? 1 : 0);
      }
    }

    this.setState({
      isAliveArray: array
    });
  };

  playAndStop = () => {
    if (!this.state.isPlaying) {
      this.setState({isPlaying: !this.state.isPlaying});
      this.playInterval = setInterval(this.rend, this.state.speed);
    } else {
      clearInterval(this.playInterval);
      this.setState({isPlaying: !this.state.isPlaying});
    }
  }

  reset = () => {
    if(!this.state.isPlaying) this.setState({ isAliveArray: this.randomArray(this.gridSize, true) });
  }

  randomArray(size, isDefault) {
    const array = [];
    for (let i = 0; i < size; i++) {
      array.push([]);
      for (let j = 0; j < size; j++) {
        array[i].push( isDefault ? 0 : Math.random() >= 0.75 ? 1 : 0);
      }
    }
    return array;
  }
  
  handleCellChange = (idRow, idCell) => {
    const array = [...this.state.isAliveArray];
    array[idRow][idCell] = array[idRow][idCell] === 1 ? 0 : 1;
    this.setState({isAliveArray: array});
  }

  handleRandom = () => {
    if (!this.state.isPlaying) this.setState({isAliveArray: this.randomArray(this.gridSize, false)});
  }

  handleGridSizeInputChange = (event) => {
    this.gridSize = event.target.value;
  }

  handleSizeChange = (event) => {
    if (!this.state.isPlaying) {
      this.setState({
        isAliveArray: this.randomArray(this.gridSize, true), 
        cellSize: this.gameFieldSize / this.gridSize
      });
    }
  }

  changeSpeed = async (speed) => {
    await this.setState({speed: speed});
    if (this.state.isPlaying) {
      clearInterval(this.playInterval);
      this.setState({isPlaying: !this.state.isPlaying});
      this.playAndStop();
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className='field'>
              <GameField 
                value={this.state.isAliveArray} 
                cellSize={this.state.cellSize} 
                onCellChange={this.handleCellChange}
              />
            </div>
          </div>
          <div className='col-md-12'>
            <div className='manipulator'>
                <GameManipulator
                  isPlaying={this.state.isPlaying}
                  gridSize={this.state.gridSize}
                  onPlayAndStop={this.playAndStop}
                  onReset={this.reset}
                  onRandom={this.handleRandom}
                  onSizeChange={this.handleSizeChange}
                  onSpeedChange={this.changeSpeed}
                  onGridSizeInputChange={this.handleGridSizeInputChange}
                />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
