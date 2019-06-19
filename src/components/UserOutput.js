import React from 'react';

const UserOutput = (props) => {

    return (
        <div className="output">
            <p><span className="output_title">Username: </span>{props.username}</p>
            <p>To change the username, type something in the input field!</p>
        </div>
    );
}

export default UserOutput;