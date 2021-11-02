import Home from '../../pages/index'
import React from 'react'
import {FaBars} from 'react-icons/fa'
import {IconContext} from 'react-icons/lib'
import {Nav,
    MobileIcon, NavMenu, NavItem, NavLinks, LogoWrap, ServicesContainer, Container, ServicesWrapper, ServicesCard, ServicesP,FormHandle} from './elements';
import Footer from '../Footer';
import emailjs from 'emailjs-com';


const careers = () => {

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_dd399ze', 'template_ysmpts5', e.target, 'user_FzxPPjsJomivbv0bUXzJD')
          .then((res) => {
              console.log(res);
          }).catch (err => console.log(err)); e.target.reset()
          
      }; 

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
                                smooth={true} duration={500} spy={true} exact='true'
                                >Hartmann's Community Centre</NavLinks>
                            </NavItem>
                           
                        </NavMenu>
                        
                   
                </Nav>
            </IconContext.Provider>
            <ServicesContainer>

                <Container>
                    <form onSubmit={sendEmail}>
                        <h1> Apply for an Internship</h1>
                        <FormHandle>
                            <label>Name </label>
                            <input type="text" name="name" className="form-control" size="40"/>
                        </FormHandle>

                        <FormHandle>
                            <label>Job-title </label>
                            <input type="text" name="message" className="form-control"  size="40"/>
                        </FormHandle>

                        <FormHandle>
                            <label>Email </label>
                        <   input type="email" name="email" className="form-control"  size="40"/>
                        </FormHandle>
                        
                        <FormHandle>
                            <input type="submit" value="Send" className="form-control btn btn-primary" />
                        </FormHandle>
                    </form>

                </Container> 
            </ServicesContainer>
        <Footer/>
        
        </>
    )
}

export default careers