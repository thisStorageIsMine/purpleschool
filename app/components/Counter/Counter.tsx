"use client";
import { useEffect, useState } from "react"
import { Htag, Button } from "../index";

const Counter = (): JSX.Element => {
    const [counter, setCounter] = useState(0);

    return (
        <div className="flex flex-row px-2 py-4 gap-3">
            <Htag h="3" >Кол-во кликов: <span>{counter}</span></Htag>
            <Button appearance="ghost" className="" onClick={() => {setCounter(counter+1)}}>Щёлкни!</Button>
            <h1>Кол-во кликов: <span>{counter}</span></h1>
            <button onClick={() => {setCounter(counter+1)}}>+1</button>
        </div>
    )
}

export { Counter };