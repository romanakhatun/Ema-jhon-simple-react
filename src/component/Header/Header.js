import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';
import { useAuth } from '../Login/useAuth';


function Header() {

    const auth = useAuth();
    console.log(auth);

    return (
        <div className="header">
            <img src={logo} alt="Logo" />
            <nav>
                <a href="/shop">Shop</a>
                <a href="/review">Order Reveiw</a>
                <a href="/invetory">Manage Inventory</a>
                {
                    auth.user && <span style={{ color: 'red' }}>{auth.user.name}</span>
                }
                {
                    auth.user ? <a href="/login">Sign out</a> :
                        <a href="/login">Sign in</a>
                }
            </nav>
        </div>
    );
}

export default Header;