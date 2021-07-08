import OrderCall from "./OrderCall";
import BuyButton from "./BuyButton";
import AddToWishList from "./AddToWishList";

export default function ProductItem(props) {
    return (
        <div className={'product'}>
            <h3>{props.product.name}</h3>
            <p>Price: ${props.product.price}</p>
            <p>{props.product.description}</p>
            <OrderCall getNumber={props.getNumber}/>
            <BuyButton />
            <AddToWishList />
        </div>
    )
}