import React from "react";

export default function Die(props) {
    const styles = {
        backgroundColor: props.isHeld ? "green" : "white"
    }
    return(
        <div className="die-face" style={styles} onClick={props.onHandle}>
            <h2 className="die-num">{props.value}</h2>
        </div>
    )
}