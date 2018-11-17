import React from "react";

function RandomGrid(props) {
  return <button className='menu--btn raandom' onClick={props.onRandom}><i className="fa fa-random"></i></button>;
}

export default RandomGrid;