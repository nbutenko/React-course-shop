import OrderCall from "./OrderCall";

export default function Marketing(props) {
    return (
        <div className={'service'}>
            <img src={props.service.image}/>
            <p>{props.service.name}</p>
            <OrderCall/>
        </div>
    )
}