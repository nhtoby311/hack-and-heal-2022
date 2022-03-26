import { NavLink } from "react-router-dom"
import styled from "styled-components"
import logo from '../assets/logo.png'
import './Nav.css'

const Cont = styled.nav`
    height: 100vh;
    width: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px 0;
    background: white;
    gap: 50px;
`
const Image = styled.img`
    width: 60%;
`


const styleNav:any = {
    position: 'relative',
    width: '100%',
    padding: '10px 0',
    textAlign:'center'
}
export default function Nav(){



    return(
        <Cont>
            <Image src={logo}/>
            <NavLink to='/doctor' style={styleNav} className={({ isActive }) => (isActive ? 'active' : '')}
            >Dashboard</NavLink>
            <NavLink to='/' style={styleNav} className={({ isActive }) => (isActive ? 'active' : '')}
            >Dashboard</NavLink>
            <NavLink to='/' style={styleNav} className={({ isActive }) => (isActive ? 'active' : '')}
            >Dashboard</NavLink>
        </Cont>
    )
}