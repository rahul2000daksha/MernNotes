// Create Reducers-->(counterReducer.js)

const initialState = {
    counter: 0,
    text: "Initial Text",
};

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                ...state,
                counter: state.counter + 1,
                text: "Incremented",
            };
        case 'DECREMENT':
            return {
                ...state,
                counter: state.counter - 1,
                text: "Decremented",
            };
        default:
            return state;
    }
};

export default counterReducer;


// Create Actions

export const increment = () => ({
    type: 'INCREMENT',
});

export const decrement = () => ({
    type: 'DECREMENT',
});



// Combine Reducers

import { combineReducers } from 'redux';
import counterReducer from './counterReducer';

const rootReducer = combineReducers({
    counter: counterReducer,
});

export default rootReducer;


// Create the Store and pass to all over Application
// Inside index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';
import App from './App';

const store = createStore(rootReducer);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);


// Use Redux in Functional Component

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './actions/counterActions';

function App() {
    const counter = useSelector((state) => state.counter);
    const dispatch = useDispatch();

    return (
        <div>
            <h1>Counter: {counter}</h1>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
        </div>
    );
}

export default App;