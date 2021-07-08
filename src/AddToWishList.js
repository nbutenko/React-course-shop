import heart from './images/heart_icon.jpg';

export default function AddToWishList() {
    return(
        <div className={'add-wish-list'}>
            <button>
                <img src={heart}/>
                Add to with list
            </button>
        </div>
    )
}