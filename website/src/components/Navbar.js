import React, { useEffect, useState } from 'react'
import { Button } from './Button';
import { Link } from 'react-router-dom'

//style 
import './Navbar.css'

function Navbar() {
    const [click, setClick] = useState(false);
    const [button,setButton]=useState(true);

    const handleClick = () => {
        setClick(!click);
    }
    const handleMobileMenu = () => {
        setClick(false);

    }
    const showButton=()=>{
        window.innerWidth <=960 ? setButton(false) : setButton(true);

    }
    useEffect(()=>{
        showButton();

    },[])
    window.addEventListener('resize',showButton);


    return (
        <>
            <nav className='navbar'>
                <div className="navbar-container">
                    <Link to='/' className='navbar-logo' onClick={handleMobileMenu}>
                        TRVL <i className='fab fa-typo3'></i>
                    </Link>

                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
                    </div>

                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-items">
                            <Link to='/' className='nav-links' onClick={handleMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className="nav-items">
                            <Link to='/about' className='nav-links' onClick={handleMobileMenu}>
                                About
                            </Link>
                        </li>
                        <li className="nav-items">
                            <Link to='/services' className='nav-links' onClick={handleMobileMenu}>
                                Services
                            </Link>
                        </li>
                       

                        {/* <li className="nav-items">
                            <Link to='/sign-up' className='nav-links' onClick={handleMobileMenu}>
                                Sign Up
                            </Link>
                        </li> */}
                    </ul>
                    {button && <Button buttonStyle='btn--outline'>SING UP</Button>}
                </div>

            </nav>
        </>
    )
}

export default Navbar