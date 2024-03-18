import React from 'react';

const User = ({item}) => {
    const {name,
        // age
    } = item;

    return (
        <div>
            <div>name:{name}</div>
            {/*<div>age:{age}</div>*/}
        </div>
    );
};

export {User};