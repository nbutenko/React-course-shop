import Products from "./Products";
import Services from "./Services";

export default function Content(props) {
    return(
        <div>
            <Products products={props.products} getNumber={props.getNumber}/>
            <Services services={props.services}/>
        </div>
    )
}