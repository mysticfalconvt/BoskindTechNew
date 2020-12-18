import React, { useState } from 'react';

function UpdateCalc() {}

export default function Calculator() {
  const [calcValue, setCalcValue] = useState(0);
  return (
    <div>
      <div className="calc">
        <form name="Calc">
          <table border="4">
            <tr>
              <td>
                <input
                  type="text"
                  className="calcInput"
                  name="Input"
                  size="16"
                  value={calcValue || 0}
                  onChange={setCalcValue}
                />
              </td>
            </tr>
            <tr>
              <td>
                <input
                  type="button"
                  name="one"
                  value="  1  "
                  onClick={setCalcValue}
                />
                <input
                  type="button"
                  name="two"
                  value="  2  "
                  OnCLick="Calc.Input.value += '2'"
                />
                <input
                  type="button"
                  name="three"
                  value="  3  "
                  OnClick="Calc.Input.value += '3'"
                />
                <input
                  type="button"
                  name="plus"
                  value="  +  "
                  OnClick="Calc.Input.value += ' + '"
                />
                <br />
                <input
                  type="button"
                  name="four"
                  value="  4  "
                  OnClick="Calc.Input.value += '4'"
                />
                <input
                  type="button"
                  name="five"
                  value="  5  "
                  OnCLick="Calc.Input.value += '5'"
                />
                <input
                  type="button"
                  name="six"
                  value="  6  "
                  OnClick="Calc.Input.value += '6'"
                />
                <input
                  type="button"
                  name="minus"
                  value="  -  "
                  OnClick="Calc.Input.value += ' - '"
                />
                <br />
                <input
                  type="button"
                  name="seven"
                  value="  7  "
                  OnClick="Calc.Input.value += '7'"
                />
                <input
                  type="button"
                  name="eight"
                  value="  8  "
                  OnCLick="Calc.Input.value += '8'"
                />
                <input
                  type="button"
                  name="nine"
                  value="  9  "
                  OnClick="Calc.Input.value += '9'"
                />
                <input
                  type="button"
                  name="times"
                  value="  x  "
                  OnClick="Calc.Input.value += ' * '"
                />
                <br />
                <input
                  type="button"
                  name="clear"
                  value="  c  "
                  OnClick="Calc.Input.value = ''"
                />
                <input
                  type="button"
                  name="zero"
                  value="  0  "
                  OnClick="Calc.Input.value += '0'"
                />
                <input
                  type="button"
                  name="DoIt"
                  value="  =  "
                  OnClick="Calc.Input.value = eval(Calc.Input.value)"
                />
                <input
                  type="button"
                  name="div"
                  value="  /  "
                  OnClick="Calc.Input.value += ' / '"
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
