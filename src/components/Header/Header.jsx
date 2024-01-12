import React, { useContext } from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';

const Header = () => {
    const {user,logOut}=useContext(AuthContext)
    console.log(user);

    const handleLogout=()=>{
        logOut()
        .then(()=>{

        })
        .catch(()=>{})

    }
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/signup">Sign-Up</Link>
                {
                user ? <span className='user-mail'>Welcome : {user.email}<button onClick={handleLogout}>SignOut</button></span>
                :
                <Link to="/login">Login</Link>
                
                   }
                    
                    
            </div>
        </nav>
    );
};

export default Header;