import React from 'react'
import { useState } from 'react'

function RunCounter() {


    let [counter, setCounter] = useState(0)
    const boundary = () => {
        setCounter(counter + 4)
    }
    const overboundary = () => {
        setCounter(counter + 6)
    }
    const single = () => {
        setCounter(counter + 1)
    }
    const double = () => {
        setCounter(counter + 2)
    }
    const triple = () => {
        setCounter(counter + 3)
    }

    let [wicket, setWicket] = useState(0)

    const wicket1 = () => {
        setWicket(wicket + 1)
    }




    return (
        <div>

        <h1>Cricket run counter</h1> 
        <br />
        <br />
        <h1>Runs : {counter}</h1>
        <h1>Wickets : {wicket}</h1>
        <br />
        <br />
        <button onClick={boundary}>Boundary</button>
        <button onClick={overboundary}>Over boundary</button>
        <button onClick={single}>Single</button>
        <button onClick={double}>Double</button>
        <button onClick={triple}>Triple</button>
        <br />
        <br />
        <button onClick={wicket1} disabled={wicket === 10}>Wicket</button>

        </div>
    )
}

export default RunCounter