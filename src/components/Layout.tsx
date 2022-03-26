import styled from "styled-components"
import Nav from "./Nav"

const Cont = styled.div`
    width: 100vw;
    min-height: 100vh;
    display: flex;
    background: #E8EFF8;
`

export default function Layout({children}:any){
    return(
        <Cont>
            <Nav/>
            {children}
        </Cont>
    )
}