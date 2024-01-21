import React from "react";
import { nanoid } from "nanoid";
import Die from "./component/Die";
import {useWindowSize} from 'react-use';
import Confetti from 'react-confetti'

function App() {
    const [dice, setDice] = React.useState(allNewDice())
    const [tenzies, setTenzies] = React.useState(false)
    const { width, height } = useWindowSize() 

    React.useEffect(() => {
        const isTenzies = dice.every(die => die.value === dice[0].value)
        if (isTenzies) {
            setTenzies(true)
            console.log("Tenzies!Win!!")
        }
    }, [dice])

    function generateNewDie() {
        return {
            id: nanoid(),
            value: Math.ceil(Math.random() * 6),
            isHeld: false
        }
    }

    function allNewDice() {
        const newDice = [];
        for (let i = 0; i < 10; i++) {
            newDice.push(generateNewDie());
        }
        return newDice;
    }

    function rollDice() {
        setDice(prevDice => prevDice.map(die => {
            return die.isHeld ? die : generateNewDie()
        }))
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
        <h1 className="title">Tenzies</h1>
        <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
        <div className="dice-container">
            {diceElements}
        </div>
        <button className="roll-dice" onClick={rollDice}>{tenzies ? "New Game" : "Roll"}</button>
        {tenzies && <Confetti width={width} height={height} />}
    </main>
  );
}

export default App;

