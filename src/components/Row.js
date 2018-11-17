import React from "react";
import Cell from './Cell';

function Row(props) {
    return (
      <div className='field--row row' style={{height: `${props.cellSize}px`}}>
        {props.value.map((elem, id) => {
          return <Cell 
                  key={id} 
                  idRow={props.idRow} 
                  idCell={id} value={elem} 
                  cellSize={props.cellSize} 
                  onCellChange={props.onCellChange}
                 />
        })}
      </div>
    );
  }

export default Row;