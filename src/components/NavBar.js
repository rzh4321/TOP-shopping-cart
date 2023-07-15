import { NavLink, Link } from 'react-router-dom';
import { useState } from 'react';

// https://logos-world.net/wp-content/uploads/2020/05/New-York-Knicks-subway-logo.png

export default function NavBar({count, price}) {
    const [clicked, setClicked] = useState(false);
    return (
        <>
            <nav className='navbar'>
                <div id='navbar-filler'></div>
                <div className='menu-icons'>
                    <i className={clicked? "fa-solid fa-times" : "fa-solid fa-bars"} onClick={() => setClicked(!clicked)} />
                </div>
                <NavLink to='shop' id='logo'><img src="https://cdn.shopify.com/s/files/1/0573/2984/4413/files/nyk-mainlogo-THE-REMOVED.jpg?v=1635521977" alt="logo"></img></NavLink>
                <div className='icons'>
                    <NavLink to='/'>
                        <i className="fa-solid fa-house"></i>
                    </NavLink>
                    <i className="fa-solid fa-magnifying-glass"></i>
                    <i className="fa-solid fa-user"></i>
                    <div>
                        <NavLink to='/'>
                            <span className='display-total-count'>{count}</span>
                            <i className="fa-solid fa-cart-shopping"></i>
                        </NavLink>

                    </div>
                    <span id='price'>{price}</span>
                </div>
                
            </nav>
            <nav className='shop-navbar'>
                <span className='shop-category'>
                    Collections
                    <i className="fa-solid fa-caret-down"></i>
                </span>
                <span className='shop-category'>
                    Jerseys
                    <i className="fa-solid fa-caret-down"></i>
                </span>
                <span className='shop-category'>
                    Men
                    <i className="fa-solid fa-caret-down"></i>
                </span>
                <span className='shop-category'>
                    Women
                    <i className="fa-solid fa-caret-down"></i>
                </span>
                <span className='shop-category'>
                    Headwear
                    <i className="fa-solid fa-caret-down"></i>    
                </span>
                <span className='shop-category'>
                    Youth
                    <i className="fa-solid fa-caret-down"></i>
                </span>
                <span className='shop-category'>
                    Novelties
                    <i className="fa-solid fa-caret-down"></i>
                </span>
                <span className='shop-category'>
                    Sale
                    <i className="fa-solid fa-caret-down"></i>
                </span>
            </nav>
            <div className={clicked? "mobile-icons active" : "mobile-icons"}>
                <input type='text' placeholder='Search' />
                    <Link to='/'><i className="fa-solid fa-house"></i>Home</Link>
                    <Link to='/shop'><i className="fa-solid fa-trophy"></i>Collections</Link>
                    <Link to='/shop'><i className="fa-solid fa-shirt"></i>Jerseys</Link>
                    <Link to='/shop'><i className="fa-solid fa-person"></i>Men</Link>
                    <Link to='/shop'><i className="fa-solid fa-person-dress"></i>Women</Link>
                    <Link to='/shop'>Headwear</Link>
                    <Link to='/shop'>Youth</Link>
                    <Link to='/shop'>Novelties</Link>
                    <Link to='/shop'>Sale</Link>
            </div>
            <hr />
        </>
    )
}