import React, {useState} from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

    const [click, setClick] = useState(false);

    const handleSetClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);



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
                        <li className='nave-item'>
                            <Link to='/' className='nave-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nave-item'>
                            <Link to='/services' className='nave-links' onClick={closeMobileMenu}>
                             Services
                            </Link>
                        </li>
                        <li className='nave-item'>
                            <Link to='/products' className='nave-links' onClick={closeMobileMenu}>
                                Products
                            </Link>
                        </li>
                        <li className='nave-item'>
                            <Link to='/sign-up' className='nave-links' onClick={closeMobileMenu}>
                                Sign up
                            </Link>
                        </li>
                    </ul>
                </section>
            </nav>
        </>
    )

}

export default Navbar;