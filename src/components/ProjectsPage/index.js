import Home from '../../pages/index'
import React from 'react'
import {FaBars} from 'react-icons/fa'
import {IconContext} from 'react-icons/lib'
import {Nav,
    MobileIcon, NavMenu, NavItem, NavLinks, LogoWrap, ServicesContainer, ServicesWrapper, ServicesCard, ServicesP} from './elements';

const projects = () => {
    return (
        <>
            <IconContext.Provider value={{ color: '#fff '}}>
            <LogoWrap/>
                <Nav>  
                        <MobileIcon>
                            <FaBars />
                        </MobileIcon>
                        <NavMenu className="font-Teko">
                            <NavItem>
                                <NavLinks to="/" component={Home} exact
                                smooth={true} duration={500} spy={true} exact='true' offset={-80}
                                >Hartmann's Community Centre</NavLinks>
                            </NavItem>
                           
                        </NavMenu>
                        
                   
                </Nav>
            </IconContext.Provider>

        <ServicesContainer id="projects">
            <ServicesWrapper>

                <ServicesCard to='/projects'> 
                    <ServicesP>John Doe ............................................................</ServicesP>
                </ServicesCard> 

                
            </ServicesWrapper>    

        </ServicesContainer>

        
        </>
    )
}

export default projects
