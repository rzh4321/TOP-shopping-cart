import { NavLink } from 'react-router-dom';


export default function NavBar({count, price}) {
    return (
        <>
            <nav className='navbar'>
                <NavLink to='shop'>Shop</NavLink>
                <div className='icons'>
                    <NavLink to='/'>
                        <i class="fa-solid fa-house"></i>
                    </NavLink>
                    <i class="fa-solid fa-magnifying-glass"></i>
                    <i class="fa-solid fa-user"></i>
                    <div>
                        <NavLink to='/'>
                            <span class='display-total-count'>{count}</span>
                            <i class="fa-solid fa-cart-shopping"></i>
                        </NavLink>

                    </div>
                    <span>{price}</span>
                </div>
                
            </nav>
            <nav className='shop-navbar'>
                <span class='shop-category'>
                    Collections
                    <i class="fa-solid fa-caret-down"></i>
                </span>
                <span className='shop-category'>
                    Jerseys
                    <i class="fa-solid fa-caret-down"></i>
                </span>
                <span className='shop-category'>
                    Men
                    <i class="fa-solid fa-caret-down"></i>
                </span>
                <span className='shop-category'>
                    Women
                    <i class="fa-solid fa-caret-down"></i>
                </span>
                <span className='shop-category'>
                    Headwear
                    <i class="fa-solid fa-caret-down"></i>    
                </span>
                <span className='shop-category'>
                    Youth
                    <i class="fa-solid fa-caret-down"></i>
                </span>
                <span className='shop-category'>
                    Novelties
                    <i class="fa-solid fa-caret-down"></i>
                </span>
                <span className='shop-category'>
                    Sale
                    <i class="fa-solid fa-caret-down"></i>
                </span>
            </nav>
        </>
    )
}