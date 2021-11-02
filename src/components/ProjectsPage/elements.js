import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'

export const ServicesContainer = styled.div`
    height: 1000px;
    width: 1920px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    background: #FFC148;

    @media screen and (max-width: 768px) {
        height: 1100px;
    }

    @media screen and (max-width: 480px) {
        height: 1300px;
    }
`

export const ServicesWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px){
        grid-template-columns: 1fr;
        padding: 0 20px;
        flex-direction: column;
    }
`

export const ServicesCard = styled(LinkR)`
    color: black;
    text-decoration: none;
    width: 500px;
    height: 100%;
    background: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    max-height: 340px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`
export const ServicesIcon = styled.img`
    
    height: 160px;
    width: 160px;
    margin-bottom: 10px;
`

export const ServicesH1 = styled.h1`
    
    font-size: 2.5rem;
    color: #fff;
    margin-bottom: 64px;

    @media screen and (max-width: 480px) { 
        font-size: 2rem;
    }
`

export const ServicesH2 = styled.h2`
    
    font-size: 1rem;
    margin-bottom: 10px;
`

export const ServicesP = styled.p`
    margin-top: 40px;
    font-size: 1rem;
    text-align: center;
`
export const LogoWrap = styled.div`
    height: 80px;
`

export const Nav = styled.nav`
    background: ${({scrollNav}) => (scrollNav ? 'rgba(0,0,0,0.89);' : 'rgba(0,0,0,0.89)')};
    height: 80px;
    margin-top: -80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`


export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`

export const NavLogo = styled(LinkR)`
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;
    
`


export const MobileIcon = styled.div`
    display: none;
    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%) !important;
        font-size: 1.8em;
        cursor: pointer;
        color: #fff;
    }
`

export const NavMenu = styled.ul`
    font-family: 'Teko', sans-serif;
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22 px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavItem = styled.li`
    height: 80px; 
`

export const NavLinks = styled(LinkS)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active {
        border-bottom: 3px solid #86253F;
        color: red;
    }

    &:hover {
        background-color: rgba(255,255,255,0.1);
        
    }
`

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavBtnLink = styled(LinkR)`
    border-radius: 50px;
    background: #86253F;
    white-space: nowrap;
    padding: 10px 22px;
    color: #010606;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2 ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2 ease-in-out;
        background: #fff;
        color: #010606;
    }
`

