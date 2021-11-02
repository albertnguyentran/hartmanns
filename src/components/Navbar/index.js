import React, {useState, useEffect} from 'react'
import {FaBars} from 'react-icons/fa'
import {IconContext} from 'react-icons/lib'
import {Nav, NavbarContainer, NavLogo, 
    MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink, LogoWrap} from './NavbarElements';
import {animateScroll as scroll} from 'react-scroll'

/*onClick = {toggle}     
put in mobile icon*/



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
        scroll.scrollToTop()
    }
    return (
        <>
            <IconContext.Provider value={{ color: '#fff '}}>
                <Nav scrollNav={scrollNav}>
                    
                    
                        <MobileIcon>
                            <FaBars />
                        </MobileIcon>
                        <NavMenu className="font-Teko">
                            <NavItem>
                                <NavLinks to="about"
                                smooth={true} duration={500} spy={true} exact='true' offset={-80}
                                >About</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="projects"
                                smooth={true} duration={500} spy={true} exact='true' offset={-80}>Projects</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="careers"
                                smooth={true} duration={500} spy={true} exact='true' offset={-80}>Careers</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="faq"
                                smooth={true} duration={500} spy={true} exact='true' offset={-80}>FAQ</NavLinks>
                            </NavItem>
                        </NavMenu>
                        
                   
                </Nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar

