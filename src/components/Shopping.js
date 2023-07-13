import Card from "./Card";
import {items} from "./items";

export default function Shopping({cart, changeQuantity}) {
    function findCount(itemName) {
        const item = cart.find(cartItem => cartItem.name === itemName);
        if (item === undefined) return 0;
        return item.count;
    }
    const arr = items.map((obj, ind) => <Card itemInfo={obj} count={findCount(obj.name)} changeQuantity={changeQuantity} key={obj.name} />)
    return (
        <div className="grid">
            {arr}
            this is the shopping page.
        </div>
    )
}