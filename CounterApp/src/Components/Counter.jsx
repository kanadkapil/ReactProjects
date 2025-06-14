// Import React and the useState hook from the 'react' library
import React, { useState } from 'react';

// Define the functional component named Counter
function Counter() {

    // Declare a state variable 'counter' initialized to 0
    // 'setCounter' is used to update the 'counter' state
    const [counter, setCounter] = useState(0);

    // Function to increment the counter
    const addVal = () => {
        // Only increment if the counter is less than or equal to 4
        if (counter <= 4) {
            setCounter(counter + 1); // Update state with incremented value
        }
    };

    // Function to decrement the counter
    const remVal = () => {
        // Only decrement if the counter is greater than 0
        if (counter > 0) {
            setCounter(counter - 1); // Update state with decremented value
        } else {
            return 'invalid'; // Returns a string but not used in UI (optional improvement)
        }
    };

    // JSX returned by the component to render UI
    return (
        <div>
            {/* Display the current value of the counter */}
            <h1>Counter: {counter}</h1>

            {/* Button to increment the counter */}
            <button onClick={addVal}>
                Add
            </button>

            {/* Button to decrement the counter */}
            <button onClick={remVal} disabled={counter === 0}>
                Remove
            </button>
        </div>
    );
}

// Export the Counter component so it can be imported elsewhere
export default Counter;
