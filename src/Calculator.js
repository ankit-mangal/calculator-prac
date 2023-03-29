import React, { useState } from "react";

const reducer = () => {};

const Calculator = () => {
  const [total, setTotal] = useState("");
  const [prevTotal, setPrevTotal] = useState("");
  const [disable, setDisable] = useState(false);

  const onClick = (e) => {
    try {
      setTotal(total.concat(e.target.name));
    } catch (error) {
      setTotal(error);
    }
  };

  const backspace = (e) => {
    setTotal(total.slice(0, total.length - 1));
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
          <button name="C" onClick={backspace}>
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
          <button name="0" onClick={onClick} disabled={disable}>
            0
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
