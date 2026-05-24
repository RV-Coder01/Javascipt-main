import { createRoot } from 'react-dom/client';
import { Header } from './components/Header';
import { Form } from './components/Form';
import React from 'react';
import Pads from './components/Pads'
import Pad from './components/Pad';

const root = createRoot(document.getElementById('root'));

export default function Count(props){
    return(
        <h1>{props.number}</h1>
    )
}

function App() {
    // const [pads, setPads] = React.useState(Pads)
    // function toggle(id){
    //     setPads(prevPads => prevPads.map( element =>{
    //         return element.id===id ?{...element, on: !element.on} : element
    //     }))
    // }
    // const bttn = pads.map((element)=> {
    //     return (
    //         <Pad pad={element} toggle={toggle}/>
    //     )
    // })

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
            {/* {bttn} */}
            {/* <button onClick={onTouch}>{isGoingOut ? "yes": "no"}</button> */}
            {/* <>
            <h1>How many times will BOB say state</h1>
            <div>
                <button onClick={decrement}>-</button>
                <Count number={count}/>
                <button  onClick={increment}>+</button>
            </div>
            </> */}
            <Form />
        </>
    );
}

root.render(<App />);