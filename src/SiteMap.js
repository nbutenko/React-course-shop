export default function SiteMap(props) {
    const links = props.links;
    return (
        <ul>
            {links.map(el => <li>{el}</li>)}
        </ul>
    )
}