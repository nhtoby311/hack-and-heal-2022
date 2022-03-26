import { useContext } from "react"
import styled from "styled-components"
import { JsxElement } from "typescript"
import { AuthContext } from "../context/AuthContext"
import usePathDisable from "../hooks/usePathDisable"
import Nav from "./Nav"
import TopNav from "./TopNav"

const Cont = styled.div`
    width: 100vw;
    max-height: 100vh;
    display: flex;
    background: #E8EFF8;
`
const ContentCont = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 50px 50px;
`

export default function Layout({children}:any){
    const {user} = useContext(AuthContext)
    const userData = user && user.data
    const {match} = usePathDisable("/login/*")
    if(match){                                                     //IF EXIST, THEN DISABLE THIS NAV ON ROUTE
        return (children)
    }

    return(
        <Cont>
            <Nav/>
            <ContentCont>
                <TopNav name={user && userData.name} type={user && userData.type}/>
                {children}
            </ContentCont>
        </Cont>
    )
}