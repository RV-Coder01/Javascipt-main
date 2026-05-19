import { createRoot } from 'react-dom/client';
import { Header } from './components/Header';
import { Form } from './components/Form';
import React from 'react';

const root = createRoot(document.getElementById('root'));

function App() {
    // const [ isGoingOut, setIsGoingOut ] = React.useState(false)
    
    // function onTouch(){
    //     setIsGoingOut( prevIsGoingOut => ! prevIsGoingOut)
    //  }
    // const [count, setCount]=React.useState(0)

    // function decrement(){ 
    //     if (count>0){
    //         setCount(prevCount => prevCount-1)
    //     }
    // }

    // function increment(){
    //     setCount(prevCount => prevCount+1)
    // }

    return (
        <>
            <Header />
            {/* <button onClick={onTouch}>{isGoingOut ? "yes": "no"}</button> */}
            {/* <>
            <h1>How many times will BOB say state</h1>
            <div>
                <button onClick={decrement}>-</button>
                <h2>{count}</h2>
                <button  onClick={increment}>+</button>
            </div>
            </> */}
            <Form />
        </>
    );
}

root.render(<App />);