import Card from "./Card";
import {items} from "./items";
import { useEffect, useState } from "react";

export default function Shopping({cart, changeQuantity, title}) {
    const [filter, setFilter] = useState("Featured");

    function findCount(itemName) {
        const item = cart.find(cartItem => cartItem.name === itemName);
        if (item === undefined) return 0;
        return item.count;
    }

    function sortCart(arr) {
        if (filter === "Featured") return;
        else if (filter === "Name A-Z") {
            arr.sort((a, b) => a.name.localeCompare(b.name));
        }
        else if (filter === "Name Z-A") {
            arr.sort((a, b) => a.name.localeCompare(b.name)).reverse();
        }
        else if (filter === "Price L-H") {
            arr.sort((a, b) => {
                const costA = parseFloat(a.price.slice(1)); // Convert "$X.XX" to a number
                const costB = parseFloat(b.price.slice(1)); // Convert "$X.XX" to a number
                return costA - costB; // Compare the numeric values
              });
        }
        else {
            arr.sort((a, b) => {
                const costA = parseFloat(a.price.slice(1)); // Convert "$X.XX" to a number
                const costB = parseFloat(b.price.slice(1)); // Convert "$X.XX" to a number
                return costA - costB; // Compare the numeric values
              }).reverse();
        }

    }
    // useEffect(() => {
    //     console.log(filter);
    // })
    sortCart(items)
    const arr = items.map((obj, ind) => <Card itemInfo={obj} count={findCount(obj.name)} changeQuantity={changeQuantity} key={obj.name} />)
    return (
        <div>
            <div className='shop-title'>{title}</div>
            <hr style={{width: '80%'}}></hr>
            <div className='filter'>
                <span>Results</span>
                <select onChange={(e) => setFilter(e.target.value)}>
                    <option value="Featured" selected>Featured</option>
                    <option value="Name A-Z">Name (A-Z)</option>
                    <option value="Name Z-A">Name (Z-A)</option>
                    <option value="Price L-H">Price (low to high)</option>
                    <option value="Price H-L">Price (high to low)</option>
                </select>
            </div>
            <div className="grid">
                {arr}
            </div>
        </div>
    )
}