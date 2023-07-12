import { NavLink } from 'react-router-dom';


export default function NavBar({count}) {
    return (
        <nav className='navbar'>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='shop'>Shop</NavLink>

            <NavLink to='/'>{count} items in cart</NavLink>
        </nav>
    )
}