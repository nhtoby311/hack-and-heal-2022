import { motion } from "framer-motion";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Layout from "../../components/Layout";
import { AuthContext } from "../../context/AuthContext";
import bg from '../../assets/test.png'
import upcoming from '../../assets/upcoming.png'
import reminder from '../../assets/reminder.png'

const Grid = styled(motion.div)`
    display: grid;
    padding: 50px 0;
    width: 100%;
    grid-template-columns: repeat(15, 1fr);
    grid-template-rows: repeat(7, 1fr);
    grid-column-gap: 20px;
    grid-row-gap: 20px;
    div{
        background: white;
        border-radius: 10px;
    }
`

const Welcome = styled.div`
    grid-area: 1 / 1 / 2 / 9; 
    padding: 10px 20px;
    display: flex;
    align-items: center;
    h3{
        font-weight: 500;
        font-size: 25px;
    }
`

const Test = styled.div`
    grid-area: 1 / 9 / 9 / 16;
    display: flex;
    flex-direction: column;
    padding: 20px 30px;
    gap: 20px;
    background: url(${bg})!important;
    background-position: 25% 75%!important;
    background-size: cover!important;
    h3{
        font-size: 28px;
        font-weight: 500;
        color: white;
    }
    p{
        color: white;
    }
`

const Button = styled.div`
    padding: 12px 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    width:50%;
    margin-top: auto;
    background: white!important;
    border-radius: 11px !important;
    cursor: pointer;
    p{
        font-size: 14px;
        font-weight: 400;
        color: #3771E4;
    }
`

const Div1 = styled.div`
    grid-area: 2 / 1 / 8 / 5;
    background: url(${upcoming})!important;
    background-position: center!important;
    background-size: cover!important;
`

const Div2 = styled.div`
    grid-area: 2 / 5 / 6 / 9;
    background: url(${reminder})!important;
    background-position: center!important;
    background-size: cover!important;
`

export default function Home(){
    const navigate = useNavigate()
    const {user} = useContext(AuthContext)
    const userData = user && user.data
    console.log(userData)
    return(
        <Grid 
        initial={{opacity:0,x:'8vw'}}
        animate={{
            opacity:1,
            x:0,
            
        }}
        exit={{
            opacity:0,
            x:'8vw',
            transition: {ease:"easeOut"}
        }}>
            <Welcome>
                <h3>
                    Welcome Back, Dr. {user && userData.name}!
                </h3>
            </Welcome>
            <Test>
                <h3>
                    Conduct a depression test
                </h3>
                <p>
                    With this survey, you will be able to diagnose depression easier and help your patients find the best suitable treatment.
                </p>
                <Button onClick={()=>{navigate('/doctor/test')}}>
                    <p>Start the survey</p>
                </Button>
            </Test>
            <Div1></Div1>
            <Div2></Div2>
        </Grid>
    )
}