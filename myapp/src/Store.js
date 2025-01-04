import { createStore } from 'redux';

const initialState = {
    user: {
        name: 'MJV',
        balance: 25000,
    },
}

export const UPDATE_WALLET = 'UPDATE_WALLET';

export const updateWallet = (amount) => ({
    type: UPDATE_WALLET,
    payload: amount,
})

function reducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_WALLET:
            return {
                user: {
                    ...state.user,
                    balance: state.user.balance - action.payload,
                }
            }
        default:
            return state;
    }
}

const store = createStore(reducer);
export default store;