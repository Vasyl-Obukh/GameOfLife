import React from "react";
import './css/GridSize.css';

function GridSize(props) {
    return (
      <div className='menu--gridSize gridSize'>
        <input 
          type="number" 
          min='1' 
          max='100' 
          disabled={props.isPlaying} 
          value={props.gridSize}
          onChange={props.onGridSizeInputChange} 
         />
        <button onClick={props.onSizeChange} className='gridSize--submit' >Submit</button>
      </div>
    );
}

export default GridSize;