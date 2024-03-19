import React from 'react';

const Post = ({post, getPostId}) => {
    const {id} = post;
    return (
        <div>
            <div>id: {id}</div>
            <button onClick={()=>getPostId(id)}>Post details</button>

        </div>
    );
};

export {Post};