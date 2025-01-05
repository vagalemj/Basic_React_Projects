import React, {useState} from "react";
import Payment from "./Payment";
import './styles.css';


export default function Cart({user}) {
    const [click, setClick] = useState(false);
    if(click){
        return (
                <Payment user ={user} />
        )
    }
    return (
        <div>
            <h1>Cart Component</h1>
            <button onClick={()=>{setClick(true)}}>Payment</button>
        </div>
    )
}