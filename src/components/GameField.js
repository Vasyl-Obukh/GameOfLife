import React from "react";
import Row from './Row';
import './css/GameField.css';

function GameField(props) {
  return props.value.map((elem, id) => {
    return <Row 
            key={id} 
            idRow={id} 
            value={elem} 
            cellSize={props.cellSize} 
            onCellChange={props.onCellChange}
           />
  });
}

export default GameField;