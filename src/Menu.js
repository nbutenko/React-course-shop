import MenuBars from "./MenuBars";
import SearchBar from "./SearchBar";

export default function Menu(props) {
   return (
       <div className={'menu'}>
           <MenuBars menuBars={props.menu}/>
           <SearchBar search={props.search}/>
       </div>

   )
}