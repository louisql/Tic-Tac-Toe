import React from "react";

const Square = props => {
    const clickHandler = () => {
        console.log('clicked baby')
    }


    return(
        <button className="square" onClick={clickHandler}>{props.value}</button>
    )
}

export default Square