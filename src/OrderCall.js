import {useState} from "react";

export default function OrderCall(props) {
    const [phoneNumber, setNumber] = useState('');
    const orderCallButtonHandler = () => {
        {props.getNumber(phoneNumber)};
        setNumber('');
    }

    return (
        <div className={'order-call'}>
            <input placeholder={'Phone number'} value={phoneNumber} onChange={event => setNumber(event.target.value)}/>
            <button onClick={orderCallButtonHandler}>Order a call</button>
        </div>
    )
}