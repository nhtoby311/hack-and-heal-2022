import { motion } from "framer-motion"
import styled from "styled-components"
import Psychologist from "../../components/Psychologist"

const Wrapper = styled(motion.div)`
    width: 100%;
    height: 100%;
    padding: 30px 0;
    display: flex;
`
const Cont = styled.div`
    width: 100%;
    height: 100%;
    padding: 30px 50px;
    background: white;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    gap:40px;
    h2{
        font-weight: 600;
        font-size: 36px;
    }
`

const ListCont = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    overflow: auto;
`

export default function List(){
    return(
        <Wrapper
            initial={{opacity:0}}
            animate={{opacity:1}}
            exit={{opacity:0}}
        >
            <Cont>
                <h2>Assign the patient to a professional</h2>
                <ListCont>
                    <Psychologist name="Katalin Karikó" percentage={98} district='XVI district'/>
                    <Psychologist name="Sins" percentage={69} district='XV district'/>
                    <Psychologist name="Smith" percentage={33} district='XIV district'/>
                    <Psychologist name="Sins" percentage={69} district=''/>
                    <Psychologist name="Sins" percentage={69} district=''/>
                    <Psychologist name="Sins" percentage={69} district=''/>
                </ListCont>
            </Cont>
        </Wrapper>
    )
}