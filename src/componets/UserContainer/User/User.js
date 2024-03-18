import React from 'react';
import css from './User.module.css'


const User = ({user, click}) => {
    const {id, email, name} = user;



    return (
        <div className={css.User}>
            <div>id:{id}</div>
            <div>name:{name}</div>
            <div>email:{email}</div>
            <button onClick={()=>click(id)}>Details</button>
        </div>
    );
};

export {User};