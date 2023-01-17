import React from "react";

const Square = props => {

    return(
        <button className="square" onClick={clickHandler}>{props.value}</button>
    )
}

export default Square