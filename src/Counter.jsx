import React , {useState} from 'react';

function Counter(){
    const [number , setNumber] = useState(0);
    const Increment = () => {
        setNumber(number+1);
    }

    const Reset = () => {
        setNumber(0);
    }

    const Decrement = () => {
        setNumber(number-1);
    }

    return(
        <div className="counter-container">
            <h1>Dynamic Counter</h1>
            <p>Count : {number}</p>
            <button className="button-design" onClick={Increment}>Increment</button>
            <button className="button-design" onClick={Reset}>Reset</button>
            <button className="button-design" onClick={Decrement}>Decrement</button>
        </div>

    );

}

export default Counter