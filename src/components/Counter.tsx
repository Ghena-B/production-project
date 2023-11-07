import {useState} from "react";
import classes from "./Counter.module.scss"
export const Counter = () => {
    const [count, setCount]=useState(0)
    const increment = () => {
        setCount(count + 1)
    }
    return <div>
        <div>{count}</div>
        <button onClick={increment} className={classes.btn}>Increment</button>
    </div>

}