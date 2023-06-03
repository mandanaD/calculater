import './calculater.css'
import {useState} from "react";
import NightMode from "../nightMode/NightMode";
import {Sun, Moon} from "react-feather"

const Calculator = () => {
    const [input, setInput] = useState({
        first: "",
        sign: ""
    })
    const [changThemHandler, them] = NightMode()
    let icon;
    if (them === "dark") {
        icon = <Sun/>
    } else {
        icon = <Moon/>
    }
    const calculate = (value) => {
        document.getElementById('down').innerText += value
        if (value === '+' || value === 'C' || value === '/' || value === '-' || value === '%' || value === '✖') {
            if (value === 'C') {
                document.getElementById('down').innerText = " "
            }
            document.getElementById('up').innerText += document.getElementById('down').innerText
            document.getElementById('down').innerText = ''
            setInput({
                ...input,
                sign: value,
                first: document.getElementById("up").innerText.slice(0, document.getElementById("up").innerText.length - 1)
            })
        }
    }
    const calculatorResult = () => {
        let second = document.getElementById("down").innerText
        if (input.sign === '/') {
            const result = Number(input.first) / Number(second);
            document.getElementById('down').innerText = (!Number.isInteger(result) ? result.toFixed(4) : result).toString()
        } else if (input.sign === '+') {
            const result = Number(input.first) + Number(second);
            document.getElementById('down').innerText = (!Number.isInteger(result) ? result.toFixed(4) : result).toString()
        } else if (input.sign === '-') {
            const result = Number(input.first) - Number(second);
            document.getElementById('down').innerText = (!Number.isInteger(result) ? result.toFixed(4) : result).toString()
        } else if (input.sign === '✖') {
            const result = Number(input.first) * Number(second);
            document.getElementById('down').innerText = (!Number.isInteger(result) ? result.toFixed(4) : result).toString()
        } else if (input.sign === '%') {
            const result = Number(input.first) % Number(second);
            document.getElementById('down').innerText = (!Number.isInteger(result) ? result.toFixed(4) : result).toString()
        }
        document.getElementById('up').innerText = " "
        setInput({sign: "", first: " "})
    }
    const clearInput = () => {
        document.getElementById('up').innerText = " "
        document.getElementById('down').innerText = ''
        setInput({sign: "", first: " "})
    };

    return (
        <>
            <div className={`container ${them}`}>
                <div id="num">
                    <div id="cal">Calculator
                        <div onClick={changThemHandler}>
                            {icon}
                        </div>
                    </div>
                    <div id="up"> </div>
                    <div id="down"> </div>
                </div>
                <div className={'btn'}>

                    <button onClick={() => calculate("C")}>C</button>
                    <button onClick={clearInput}>CE</button>
                    <button onClick={() => calculate("%")}>%</button>
                    <button onClick={() => calculate("/")}>/</button>

                    <button onClick={() => calculate("7")}>7</button>
                    <button onClick={() => calculate("8")}>8</button>
                    <button onClick={() => calculate("9")}>9</button>
                    <button onClick={() => calculate("✖")}>✖</button>

                    <button onClick={() => calculate("4")}>4</button>
                    <button onClick={() => calculate("5")}>5</button>
                    <button onClick={() => calculate("6")}>6</button>
                    <button onClick={() => calculate("-")}>-</button>

                    <button onClick={() => calculate("1")}>1</button>
                    <button onClick={() => calculate("2")}>2</button>
                    <button onClick={() => calculate("3")}>3</button>
                    <button onClick={() => calculate("+")}>+</button>

                    <div> </div>
                    <button onClick={() => calculate("0")}>0</button>
                    <button onClick={() => calculate(".")}>.</button>
                    <button onClick={calculatorResult}>=</button>
                </div>

            </div>
        </>
    );
}

export default Calculator;