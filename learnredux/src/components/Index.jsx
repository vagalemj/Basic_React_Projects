import React, {useState} from 'react';
import Login from './Login';

export default function Index() {
    const user = {
        username: "MJV ",
        balance: 25000
    }
    const [click, setClick] = useState(false);
    if(click === true){
        return (
            <Login user = {user} />
        )
    }
    return (
        <div>
            <h1>Index Component</h1>
            <button onClick={()=>{setClick(true)}}>Login</button>

        </div>
    )
}