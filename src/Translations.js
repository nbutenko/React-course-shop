import OrderCall from "./OrderCall";

export default function Translations(props) {
    return (
        <div className={'service'}>
            <img src={props.service.image}/>
            <p>{props.service.name}</p>
            <OrderCall/>
        </div>
    )
}