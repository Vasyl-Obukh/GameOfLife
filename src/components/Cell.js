import React from "react";
import './css/Cell.css';

function Cell(props) {
    return <span
            className={`row--cell row--cell_${props.value === 1 ? 'alive' : 'dead'}`} 
            onClick={() => props.onCellChange(props.idRow, props.idCell)} 
            style={{ width: `${props.cellSize}px`, height: `${props.cellSize}px`}}
           />
}

export default Cell;