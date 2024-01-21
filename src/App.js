import React from "react";
import Die from "./component/Die";
function App() {
    const [dice, setDice] = React.useState(allNewDice())

    function allNewDice() {
        const newDice = [];
        for (let i = 0; i < 10; i++) {
            newDice.push(Math.floor(Math.random() *6) +1);
        }
        return newDice;
    }

    const diceElements = dice.map(die => <Die value={die} />);

  return (
    <main>
        <div className="dice-container">
            {diceElements}
        </div>
        <button className="roll-dice" onClick={() => setDice(allNewDice())}>Roll Dice</button>
    </main>
  );
}

export default App;

