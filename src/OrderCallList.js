export default function OrderCallList(props) {
    return(
        <div>
            <h2>Order call list:</h2>
            <ol>
                {props.phoneNumbersList.map(el => <li>{el}</li>)}
            </ol>
        </div>
    )
}