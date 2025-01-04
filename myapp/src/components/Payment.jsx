import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateWallet } from '../Store';

export default function Payment() {
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(updateWallet(5000));
    }
    return (
        <div>
            <h1>{user.name} : {user.balance}</h1>
            <button onClick={handleClick}>Pay</button>
        </div>
    )
}