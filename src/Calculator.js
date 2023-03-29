import React, { useState } from "react";

const reducer = () => {};

const Calculator = () => {
  // const [state, dispatch] = useReducer(reducer, {curVal, prevVal, operand})
  const [total, setTotal] = useState("");
  const [prevTotal, setPrevTotal] = useState("");
  const [disable, setDisable] = useState(false);

  const operations = total.match(/\d+.?\d+?/g);
  console.log("curval", operations);

  const onClick = (e) => {
    // if (total.includes(".") || total !== "") {
    //   setDisable(true);
    // }
    if (operations && operations[operations.length - 1].includes(".")) {
      console.log(operations[operations.length - 1].includes("."));
      setDisable(true);
    }
    if (operations && operations[operations.length - 1].includes(".")) {
      if (e.target.name !== ".") {
        setTotal(total.concat(e.target.name));
      }
    } else {
      setTotal(total.concat(e.target.name));
    }
  };

  const evaluate = () => {
    setTotal(eval(total).toString());
    console.log("total", total);
    setPrevTotal(eval(total).toString());
    setTotal("");
  };

  return (
    <>
      <div className="container">
        <div className="prev-val">{prevTotal}</div>
        <input type="text" value={total} readOnly={true} />
        <div className="keys">
          <button name="clear" onClick={() => setTotal("")}>
            Clear
          </button>
          <button name="C" onClick={onClick}>
            C
          </button>
          <button name="/" onClick={onClick}>
            &divide;
          </button>
          <button name="7" onClick={onClick}>
            7
          </button>
          <button name="8" onClick={onClick}>
            8
          </button>
          <button name="9" onClick={onClick}>
            9
          </button>
          <button name="*" onClick={onClick}>
            &times;
          </button>
          <button name="4" onClick={onClick}>
            4
          </button>
          <button name="5" onClick={onClick}>
            5
          </button>
          <button name="6" onClick={onClick}>
            6
          </button>
          <button name="-" onClick={onClick}>
            -
          </button>
          <button name="1" onClick={onClick}>
            1
          </button>
          <button name="2" onClick={onClick}>
            2
          </button>
          <button name="3" onClick={onClick}>
            3
          </button>
          <button name="+" onClick={onClick}>
            +
          </button>
          <button name="0" onClick={onClick}>
            0
          </button>
          <button name="." onClick={onClick} disabled={disable}>
            .
          </button>
          <button name="=" onClick={evaluate}>
            =
          </button>
        </div>
      </div>
    </>
  );
};

export default Calculator;
