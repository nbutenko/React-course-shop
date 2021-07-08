import Marketing from "./Marketing";
import Translations from "./Translations";
import Training from "./Training";

export default function Services(props) {
    return (
        <div className={'services'} id={'services'}>
            <h2>Services</h2>
            <Marketing service={props.services.marketing}/>
            <Translations service={props.services.translations}/>
            <Training service={props.services.training}/>
        </div>
    )
}