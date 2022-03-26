import { useContext } from "react"
import { NavLink } from "react-router-dom"
import styled from "styled-components"
import logo from '../assets/logo.svg'
import { AuthContext } from "../context/AuthContext"
import './Nav.css'

const Cont = styled.nav`
    height: 100vh;
    width: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 50px 0;
    background: white;
    
`
const InnerCont = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    gap: 50px;
`
const Image = styled.img`
    width: 60%;
`

const Logout = styled.h5`
    cursor: pointer;
    font-weight: 400;
    transition: all 0.3s;
    &:hover{
        color: #1F4BA1;
        
    }
`



export default function Nav(){
    const {logout} = useContext(AuthContext)
    return(
        <Cont>
            <InnerCont>
                <Image src={logo}/>
                <NavLink end to='/doctor' className={({ isActive }) => (isActive ? 'active' : 'inactive')}
                >Overview</NavLink>
                <NavLink end to='/doctor/test' className={({ isActive }) => (isActive ? 'active' : 'inactive')}
                >Test</NavLink>
                <NavLink end to='/doctor/list' className={({ isActive }) => (isActive ? 'active' : 'inactive')}
                >List</NavLink>
            </InnerCont>
            <Logout onClick={()=>{logout()}}>Logout</Logout>
        </Cont>
    )
}