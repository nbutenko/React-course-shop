export default function Title(props) {
    return(
        <div className={'title'}>
            <h1>{props.name}</h1>
            <h6>{props.motto}</h6>
        </div>
    )
}