import React from "react";
import PlayAndStop from './PlayAndStop';
import Reset from './Reset';
import RandomGrid from './RandomGrid';
import GridSize from './GridSize';
import SpeedChangeRange from './SpeedChangeRange';
import './css/GameManipulator.css';

function GameManipulator(props) {
    return (
      <div className='manipulator--menu menu'>
        <PlayAndStop value={props.isPlaying} onPlayAndStop={props.onPlayAndStop}/>
        <Reset onReset={props.onReset} />
        <RandomGrid onRandom={props.onRandom}/>
        <GridSize onSizeChange={props.onSizeChange} gridSize={props.gridSize} onGridSizeInputChange={props.onGridSizeInputChange} isPlaying={props.isPlaying}/>
        <SpeedChangeRange onSpeedChange={props.onSpeedChange} />
      </div>
    );
}

export default GameManipulator;