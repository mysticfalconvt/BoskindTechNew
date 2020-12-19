import React, { useState } from 'react';

function UpdateCalc() {}

export default function Calculator() {
  const [calcValue, setCalcValue] = useState('');
  return (
    <div>
      <div className="calc">
        <form name="Calc">
          <table border="4">
            <tr>
              <td>
                <p>{calcValue}</p>
                {/* <input
                  type="text"
                  className="calcInput"
                  name="Input"
                  size="16"
                  value={calcValue || 0}
                /> */}
              </td>
            </tr>
            <tr>
              <td>
                <input
                  type="button"
                  name="one"
                  value="  1  "
                  onClick={() => setCalcValue(`${calcValue}1`)}
                />
                <input
                  type="button"
                  name="two"
                  value="  2  "
                  onClick={() => setCalcValue(`${calcValue}2`)}
                />
                <input
                  type="button"
                  name="three"
                  value="  3  "
                  onClick={() => setCalcValue(`${calcValue}3`)}
                />
                <input
                  type="button"
                  name="plus"
                  value="  +  "
                  onClick={() => setCalcValue(`${calcValue}+`)}
                />
                <br />
                <input
                  type="button"
                  name="four"
                  value="  4  "
                  onClick={() => setCalcValue(`${calcValue}4`)}
                />
                <input
                  type="button"
                  name="five"
                  value="  5  "
                  onClick={() => setCalcValue(`${calcValue}5`)}
                />
                <input
                  type="button"
                  name="six"
                  value="  6  "
                  onClick={() => setCalcValue(`${calcValue}6`)}
                />
                <input
                  type="button"
                  name="minus"
                  value="  -  "
                  onClick={() => setCalcValue(`${calcValue}-`)}
                />
                <br />
                <input
                  type="button"
                  name="seven"
                  value="  7  "
                  onClick={() => setCalcValue(`${calcValue}7`)}
                />
                <input
                  type="button"
                  name="eight"
                  value="  8  "
                  onClick={() => setCalcValue(`${calcValue}8`)}
                />
                <input
                  type="button"
                  name="nine"
                  value="  9  "
                  onClick={() => setCalcValue(`${calcValue}9`)}
                />
                <input
                  type="button"
                  name="times"
                  value="  x  "
                  onClick={() => setCalcValue(`${calcValue}*`)}
                />
                <br />
                <input
                  type="button"
                  name="clear"
                  value="  c  "
                  onClick={() => setCalcValue(``)}
                />
                <input
                  type="button"
                  name="zero"
                  value="  0  "
                  onClick={() => setCalcValue(`${calcValue}0`)}
                />
                <input
                  type="button"
                  name="DoIt"
                  value="  =  "
                  onClick={() => setCalcValue(`${eval(calcValue)}`)}
                />
                <input
                  type="button"
                  name="div"
                  value="  /  "
                  onClick={() => setCalcValue(`${calcValue}/`)}
                />
                <br />
              </td>
            </tr>
          </table>
        </form>
      </div>
    </div>
  );
}
