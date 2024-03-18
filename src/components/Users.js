import React, {useEffect, useState} from 'react';
import {User} from "./User";

const Users = () => {
    // const users = [
    //     {id: 1, name: 'Max', age: 15},
    //     {id: 2, name: 'Marina', age: 25},
    //     {id: 3, name: 'Anna', age: 25},
    //     {id: 4, name: 'Maria', age: 20},
    // ]
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch(' https://jsonplaceholder.typicode.com/users').then(value => value.json()).then(items=>setUsers(items))
    }, []);

    return (
        <div>
            {users.map(user => <User key={user.id} item={user}/>)}
        </div>
    );
};

export {Users};