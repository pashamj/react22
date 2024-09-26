import {useState} from "react";

export const NewComponent = () =>{
    const [value,SetValue] = useState(0)
    const onClick = () => {
        SetValue(value+1)
    }

    const downClick = () => {
        SetValue(value-1)
    }

    const makeZeroClick = () => {
        SetValue(0)
    }

    return(
        <>
            <div>{value}</div>
            <button onClick={onClick}>Plus one</button>
            <button onClick={downClick}>Minus one</button>
            <button onClick={makeZeroClick}>to zero</button>
        </>
    )
}