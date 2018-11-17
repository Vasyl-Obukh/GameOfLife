import React from "react";

function Reset(props) {
  return <button className='menu--btn reset' onClick={props.onReset}><i className="fa fa-reply-all"></i></button>;
}

export default Reset;
