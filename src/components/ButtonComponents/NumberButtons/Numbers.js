import React, { useState } from "react";

//import any components needed
import { numbers } from '/Users/asha/Documents/lambda-calculator/src/data.js';
console.log(numbers);

//Import your array data to from the provided data file

const Numbers = () => {
  // STEP 2 - add the imported data to state
  const [numberState, setnumberState] = useState(numbers);
  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
      {numberState.map(x => <button>{x}</button>)}
    </div>
  );
};

export default Numbers;
