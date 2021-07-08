import {useState} from 'react';

export default function BuyButton(props) {
    const [count, setCount] = useState(3);

    const changeValue = (param) => {
        setCount(count+param);
    }


    const plus = () => {
        setCount(count + 1);
    }
    const minus = () => {
        setCount(count === 1 ? count : count - 1);
    }


    return(
        <div>
            <button onClick={() => changeValue(-1)} disabled={count<=1}> - </button>
            <input className={'buy-input'} type={'number'} min={1} value={count} onChange={(event) => setCount(Number(event.target.value))}/>
            <button onClick={() => changeValue(+1)}> + </button>
            <button className={'buy-button'}>Buy</button>
        </div>
    )
}