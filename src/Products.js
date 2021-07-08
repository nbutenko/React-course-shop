import ProductItem from "./ProductItem";

export default function Products(props) {
    return (
        <div className={'products'} id={'products'}>
            <h2>Products</h2>
            <div>
                {props.products.map(el => <ProductItem product={el} getNumber={props.getNumber}/>)}
            </div>

        </div>
    )
}