import OrderCall from "./OrderCall";
import BuyButton from "./BuyButton";
import AddToWishList from "./AddToWishList";

export default function YoungFightersCourse(props) {
    return (
        <div className={'product'}>
            <h3>{props.product.name}</h3>
            <p>Price: ${props.product.price}</p>
            <p>{props.product.description}</p>
            <OrderCall />
            <BuyButton count={props.count} setCount={props.setCount}/>
            <AddToWishList />
        </div>
    )
}