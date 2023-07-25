import Card from "./Card";
import {items} from "./items";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom"

export default function Shopping({cart, changeQuantity, title}) {
    const [searchParams, setSearchParams] = useSearchParams();
    const filter = searchParams.get("filter");


    function findCount(itemName) {
        const item = cart.find(cartItem => cartItem.name === itemName);
        if (item === undefined) return 0;
        return item.count;
    }

    function sortCart(arr) {
        if (filter === "featured" || filter === null) return;
        else if (filter === "name-a-z") {
            arr.sort((a, b) => a.name.localeCompare(b.name));
        }
        else if (filter === "name-z-a") {
            arr.sort((a, b) => a.name.localeCompare(b.name)).reverse();
        }
        else if (filter === "price-l-h") {
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
    sortCart(items)
    const arr = items.map((obj, ind) => <Card itemInfo={obj} count={findCount(obj.name)} changeQuantity={changeQuantity} key={obj.name} />)
    return (
        <div>
            <div className='shop-title'>{title}</div>
            <hr style={{width: '80%'}}></hr>
            <div className='filter'>
                <span>Results</span>
                <select value={filter} onChange={(e) => setSearchParams({filter: e.target.value})}>
                    <option value="featured">Featured</option>
                    <option value="name-a-z">Name (A-Z)</option>
                    <option value="name-z-a">Name (Z-A)</option>
                    <option value="price-l-h">Price (low to high)</option>
                    <option value="price-h-l">Price (high to low)</option>
                </select>
            </div>
            <div className="grid">
                {arr}
            </div>
        </div>
    )
}