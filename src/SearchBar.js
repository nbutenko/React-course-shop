export default function SearchBar(props) {
    return(
        <div className={'searchBar'}>
            <input placeholder={props.search}/>
        </div>
    )
}