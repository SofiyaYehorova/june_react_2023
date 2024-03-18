import React from 'react';

const UserDetails = ({userDetails}) => {
    const {phone, username} = userDetails;
    return (
        <div>
            <div>phone: {phone}</div>
            <div>username: {username}</div>
        </div>
    );
};

export {UserDetails};