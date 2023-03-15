import React, { useState } from "react";
import "./Tracker.css";
function Tracker() {
  const [set, setInput] = useState("");
  const [data, setData] = useState([]);
  const [total, setTotal] = useState(0);

  const date = new Date().toString();

  // const handle = (val,symbol) => {
  //   setData([
  //     ...data,
  //     {
  //       input: set,
  //       date: date,
  //       operator: val,
  //       random: Math.random(),
  //       operation:symbol,
  //     },
  //   ]);
  // };

  const handle = (val,symbol) => {
    const inputValue = parseFloat(set); // convert the input string to a number
    // if (isNaN(inputValue)) return; // handle invalid input
  
    const newTransaction = {
      input: inputValue,
      date: date,
      operator: val,
      random: Math.random(),
      operation: symbol,
    };
  
    setData([...data, newTransaction]);
  
    // Update the total based on the operation used
    if (val === "Add") {
      setTotal(prevTotal => prevTotal + inputValue);
    } else if (val === "Remove") {
      setTotal(prevTotal => prevTotal - inputValue);
    }
  };
  
 
  
 
  return (
    <div className="tracker">
      <div className="tracker__header">
        <h1>Expense tracker</h1>
      </div>
      <div className="tracker__group">
        <div className="tracker__balance">
          <h3>Balance:{total}</h3>
          <input
            className="tracker__input"
            value={set}
            type="number"
            onChange={(e) => setInput(e.target.value)}
          />
          <div className="tracker__buttons">
            <button
              className="btn btn--state-add"
              disabled={set ? false :true}
              onClick={() => handle("Add","+")}
            >
              Add
            </button>
            <button
              className="btn btn--state-remove"
              disabled={set ? false : true}
              onClick={() => handle("Remove","-")}
            >
              Remove
            </button>
          </div>
        </div>
        <div className="tracker__transaction">
          <h3 className="tracker__transactionheader">transactions:</h3>
          <div className="tracker__transactionbody">
            {data.map((x, i) => (
              <div key={x.random}>
                <p>
                  {x.date}-{x.input}-{x.operator}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tracker;
