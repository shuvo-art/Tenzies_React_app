import React from "react";
import { nanoid } from "nanoid";
import Die from "./component/Die";

function App() {
    const [dice, setDice] = React.useState(allNewDice())

    function allNewDice() {
        const newDice = [];
        for (let i = 0; i < 10; i++) {
            newDice.push({
                value: Math.floor(Math.random() * 6) + 1,
                isHeld: false, 
                id: nanoid()
            });
        }
        return newDice;
    }

    function toggleIsHeld(id) {
        setDice(prevDice => prevDice.map(die => {
            return die.id === id ? 
            {...die, isHeld: !die.isHeld} : 
            die
        })
    )}

    const diceElements = dice.map(die => (<Die key={die.id} value={die.value} isHeld={die.isHeld} onHandle={() => toggleIsHeld(die.id)} />));

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

