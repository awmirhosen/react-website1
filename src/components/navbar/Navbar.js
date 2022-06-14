import React, {useState} from "react";
import { Link } from "react-router-dom";
import './Navbar.css';
import Button from '../buttons/Button'

const Navbar = () => {

    const [click, setClick] = useState(false);
    const [button, setButton] = useState(false);

    // handle the burger menu icon
    const handleSetClick = () => setClick(!click);
    // click on items and mobile menu disappear
    const closeMobileMenu = () => setClick(false);
    // btn in mobile size and desktop size
    const showButton = () => {
        if (window.innerWidth <= 960 ){
            setButton(false);
        }else {
            setButton(true);
        }
    };
    window.addEventListener('resize', showButton);



    return (
        <>
            <nav className='navbar'>
                <section className='navbar-container'>
                    {/*Home Logo Icon*/}
                    <Link className='navbar-logo' to='/'>
                        Solid<i className='fab fa-typo3' />
                    </Link>
                    {/*Hamburger Menu Icon and Function*/}
                    <div className='menu-icon' onClick={handleSetClick}>
                        <i className={ click ? 'fas fa-times' : 'fas fa-bars' } />
                    </div>
                    {/*Mobile Menu*/}
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                             Services
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/products' className='nav-links' onClick={closeMobileMenu}>
                                Products
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                                Sign up
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle='btn--outline' >SIGN UP</Button>}
                </section>
            </nav>
        </>
    )

}

export default Navbar;