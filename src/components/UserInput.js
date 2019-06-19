import React from 'react';

const UserInput = (props) => {

    return (
        <div>
            <input
                className="input"
                type="text"
                onChange={props.updateUsername}
                onBlur={props.toggle}
                onKeyPress={(e) => {(e.key === 'Enter' ? console.log("Rngbd") : null)}} 
                value={props.username} />
        </div>
    );
}

export default UserInput;