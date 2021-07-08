export default function MenuBars(props) {
    return(
        <div className={'main-menu'}>
            <ul>
                <li><a href={'#'}>{props.menuBars[0]}</a></li>
                <li><a href={'#products'}>{props.menuBars[1]}</a></li>
                <li><a href={'#services'}>{props.menuBars[2]}</a></li>
                <li><a href={'#team'}>{props.menuBars[3]}</a></li>
                <li><a href={'#contact'}>{props.menuBars[4]}</a></li>
            </ul>
        </div>
    )
}