export default function Social(props) {
    return(
        <div className={'social'}>
            <a href={props.social.facebook.link} title={props.social.facebook.name}><img src={props.social.facebook.image} alt={props.social.facebook.alt}/></a>
            <a href={props.social.twitter.link} title={props.social.twitter.name}><img src={props.social.twitter.image} alt={props.social.twitter.alt}/></a>
            <a href={props.social.instagram.link} title={props.social.instagram.name}><img src={props.social.instagram.image} alt={props.social.instagram.alt}/></a>
        </div>
    )
}