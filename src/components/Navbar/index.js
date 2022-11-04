import React, {useState, useEffect} from 'react';
import { FaBars } from 'react-icons/fa';
import {IconContext} from 'react-icons/lib';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavLinks, NavItem, NavBtn, NavBtnLink } from './NavbarElements';
import { animateScroll as scroll } from 'react-scroll';

const Navbar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false)
    const changeNav = () => {
        if(window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <>
            <IconContext.Provider value={{ color: '#fff'}}>
                <Nav scrollNav={scrollNav}>
                    <NavbarContainer>
                        <NavLogo to='/' onClick={toggleHome}>salk</NavLogo>
                        <MobileIcon onClick={toggle}>
                            <FaBars />
                        </MobileIcon>
                        <NavMenu>
                            <NavItem>
                                <NavLinks to='about'
                                          smooth={true} duration={500} spy={true} exact='true' offset={-80}
                                >ABOUT</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='download'
                                          smooth={true} duration={500} spy={true} exact='true' offset={-80}
                                >DOWNLOAD</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='explore'
                                          smooth={true} duration={500} spy={true} exact='true' offset={-80}
                                >EXPLORE</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='contribute'
                                          smooth={true} duration={500} spy={true} exact='true' offset={-80}
                                >CONTRIBUTE</NavLinks>
                            </NavItem>
                        </NavMenu>
                        <NavBtn>
                            <NavBtnLink to='/signin'>CONTACT</NavBtnLink>
                        </NavBtn>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar