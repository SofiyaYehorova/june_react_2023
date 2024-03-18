import React, {useEffect, useState} from 'react';
import css from './Users.module.css'
import {User} from "../User/User";
import axios from "axios";
import {axiosService} from "../../../services/axiosService";
import {usersService} from "../../../services/usersService";
import {UserDetails} from "../UserDetails/UserDetails";

const Users = () => {
    const [users, setUsers] = useState([])

    const [userDetails, setUserDetails] = useState(null)

    useEffect(() => {
        // fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json()).then(value => setUsers(value))
        // axios.get('https://jsonplaceholder.typicode.com/users').then(res=>res.data).then(value=>setUsers(value))
        // axios.get('https://jsonplaceholder.typicode.com/users').then(({data})=>setUsers(data))
        // axiosService.get('/users').then(({data})=>setUsers(data))
        usersService.getAll().then(({data}) => setUsers(data))
    }, []);

    const click = async (userId) => {
        // console.log(userId);
        const {data} = await usersService.getById(userId);
        console.log(data);
        setUserDetails(data)

    }

    return (
        <div>
            <div className={css.Users}>
                {users.map(user => <User key={user.id} user={user} click={click}/>)}
            </div>
            {
                // userDetails ?<UserDetails userDetails={userDetails}/> : <h1>Not selected</h1>
                userDetails &&<UserDetails userDetails={userDetails}/>
            }
        </div>

    );
};

export {Users};