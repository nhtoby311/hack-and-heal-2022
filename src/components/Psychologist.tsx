import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import profile from '../assets/profile.png'

const Cont = styled.div`
    display: flex;
    gap: 20px;
    justify-content: center;
    align-items: center;
`

const Image = styled.img`
    width: 100px;
`

const InnerCont = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    div{
        display: flex;
        gap: 20px;
        h5{
            font-size: 20px;
        }
        span{
            font-weight: 400;
            font-size: 20px;
            color: #6DD64D;
        }
    }
`

const ButtonP = styled.div`
    padding: 15px 25px;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #3771E4;
    font-size: 14px;
    border-radius: 10px;
    color: white;
`

const ButtonS = styled.div`
    padding: 15px 25px;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    border: 2px solid #3771E4;
    font-size: 14px;
    border-radius: 10px;
    color: #3771E4;
`

type Props = {
    name: string,
    percentage: number,
    district: string
}

const Popup = styled.div<any>`
    display: flex;
    flex-direction: column;
    padding: 20px;
    width: 600px;
    height: 400px;
    border-radius: 20px;
    background: white;
    position: fixed;
    top: calc(50vh - 200px);
    left: calc(50vw - 200px);
    z-index: 10;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
    opacity: ${props => props.popup === true ? 1 : 0};
    pointer-events: ${props => props.popup === true ? 'auto' : 'none'};
    h6{
        font-size: 16px;
        text-align: center;
        margin: 10px;
        font-weight: 500;
    }
`

const Btn = styled(Link)`
    padding: 15px 25px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #3771E4;
    font-size: 14px;
    border-radius: 10px;
    color: white;
    cursor: pointer;
`

export default function Psychologist({name,percentage,district}:Props){
    const [popUp,setPopUp] = useState(false)
    

    return(
        <Cont>
            <Popup popup={popUp}>
                <div>
                    <h6>The assign request has been sucessfully sent to Dr. {name}!</h6>    
                    <h6>Dr. {name} will receive all the consented transcript between doctors in orders to provides usefull information about the patients</h6>
                </div>
                <Btn to='/doctor' onClick={()=>{setPopUp(!popUp)}}>Go back to Overview</Btn>
            </Popup>
            <Image src={profile}></Image>
            <InnerCont>
                <div>
                    <h5>Dr. {name}</h5>
                    <span>{percentage}% match</span>
                </div>
                <div>
                    <p>Clinical psychologist</p>
                    <p>{district}</p>
                </div>
            </InnerCont>
            <ButtonP onClick={()=>{setPopUp(!popUp)}}>Assign</ButtonP>
            <ButtonS>View Profile</ButtonS>
        </Cont>
    )
}