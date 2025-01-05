import React, {useState} from "react";
import Cart from "./Cart";
import './styles.css';


export default function Shopping({user}) {
    const [click, setClick] = useState(false);
    if(click){
        return (
            <div>
                <Cart user={user} />
            </div>
        )
    }
    return (
        <div>
            <h1>Shopping Component</h1>
            <button onClick={()=>{setClick(true)}}>Cart</button>
        </div>
    )
}