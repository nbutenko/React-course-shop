import SiteMap from "./SiteMap";
import Social from "./Social";

export default function Footer(props) {
    return (
        <div className={'footer'}>
            <Social social={props.social}/>
            <SiteMap links={props.links}/>
        </div>
    )
}