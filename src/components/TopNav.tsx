import { useLocation } from "react-router-dom"
import styled from "styled-components"
import bell from '../assets/Bell.svg'
import profile from '../assets/profile.png'
const Title = styled.h2`
    font-size: 28px;
    font-weight: 500;
`

const Cont = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
`
const ProfileCont = styled.div`
    display: flex;
    gap: 20px;
    justify-content: space-between;
    align-items: center;
`

const Name = styled.div`
    display: flex;
    gap: 5px;
    justify-content: space-between;
    align-items: center;
`

const ImgSvg = styled.img`
    width: 17px;
`

const ProfileImg = styled.img`
    width: 35px;
`
type Props = {
    name:string
    type:string
}

function TitleHandle(inp:any){
    switch (inp){
        case '/doctor/test':
            return 'Evaluation Test'
        case '/doctor/list':
            return 'List'
        case '/doctor':
            return 'Overview'
        default:
            return ''
    }
}

export default function TopNav(props:Props){
    const location = useLocation()
    
    return(
        <Cont>
            <Title>{TitleHandle(location.pathname)}</Title>
            <ProfileCont>
                <ImgSvg src={bell}></ImgSvg>
                <Name>{props.type==="DOCTOR" ? 'Dr. ' : ''}{props.name}</Name>
                <ProfileImg src={profile}/>
            </ProfileCont>
        </Cont>
    )
}