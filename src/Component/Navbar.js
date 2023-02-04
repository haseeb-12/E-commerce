import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../Style/logo.jpg'
import { BsMinecartLoaded } from 'react-icons/bs'
import { useCart } from '../Context/ProductContext'
import { signInWithGoogle } from '../Firebase/Firebase'
function Navbar() {
    const { state: { cart } } = useCart()

    console.log(localStorage.getItem('name'))

    const signOutWithGoogle = () => {
        localStorage.clear()
        window.location.reload()
       
    }
    return (
        <header>
            <nav>
                <div style={{ width: '200px', height: '70px' }}>
                    <NavLink to='/'>
                        <img src={logo} />
                    </NavLink>
                </div>
                <ul>
                    <li className='profile_img'>
                        <img src={localStorage.getItem('profilePhoto')} />
                    </li>
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='shop'>Shop</NavLink></li>
                    
                    {localStorage.getItem('name') ?
                        <li className='btn_signin'>
                            <button onClick={signOutWithGoogle}>Sign Out</button>
                        </li> :
                        <li className='btn_signin'>
                            <button onClick={signInWithGoogle}>Sign  In</button>
                        </li>
                    }

                    <li>
                        <NavLink to='cart'>
                            <BsMinecartLoaded />
                        </NavLink>
                        <sup>{cart.length}</sup>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar