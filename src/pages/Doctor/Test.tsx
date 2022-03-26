import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"

const Wrapper = styled(motion.div)`
    width: 100%;
    height: 98%;
    padding: 20px 0;
    display: flex;
`
const Cont = styled.form`
    display: flex;
    width: 100%;
    height: 90%;
    background: white;
    border-radius: 20px;
    flex-direction: column;
    padding: 30px 63px;
    justify-content: space-between;
    gap: 20px;
`
const Title = styled.h4`
    font-size: 42px;
    font-weight: 500;
`
const Overflow = styled.div`
    height: 100%;
    max-height: 400px;
    overflow: auto;
    background: white;
    display: flex;
    flex-direction: column;
    gap: 20px;
`
const ButtonCont = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`
const Button = styled.button`
    padding: 12px 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #3771E4;
    border-radius: 15px;
    color: white;
    border: none;
    outline: none;
`

const QuestionCont = styled.div`
    display: flex;
    flex-direction: column;
`

const QuestionTitle = styled.h6`
    font-size: 20px;
`
const InputCont = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`

export default function Test(){
    const navigate = useNavigate()

    return(
        <Wrapper
            initial={{opacity:0}}
            animate={{opacity:1}}
            exit={{opacity:0}}
        >
            <Cont>
                <Title>Fill out the evaluation form</Title>
                <Overflow>
                    <QuestionCont>
                        <QuestionTitle>Little interest or pleasure in doing things?</QuestionTitle>
                        <InputCont>
                            <input name="1" type="radio"></input>
                            <span>Not at all</span>
                        </InputCont>
                        <InputCont>
                            <input name="1" type="radio"></input>
                            <span>Several days</span>
                        </InputCont>
                        <InputCont>
                            <input name="1" type="radio"></input>
                            <span>More than half of the days</span>
                        </InputCont>
                        <InputCont>
                            <input name="1" type="radio"></input>
                            <span>Nearly everyday</span>
                        </InputCont>
                    </QuestionCont>

                    <QuestionCont>
                        <QuestionTitle>Feeling down, depressed, or hopeless?</QuestionTitle>
                        <InputCont>
                            <input name="2" type="radio"></input>
                            <span>Not at all</span>
                        </InputCont>
                        <InputCont>
                            <input name="2" type="radio"></input>
                            <span>Several days</span>
                        </InputCont>
                        <InputCont>
                            <input name="2" type="radio"></input>
                            <span>More than half of the days</span>
                        </InputCont>
                        <InputCont>
                            <input name="2" type="radio"></input>
                            <span>Nearly everyday</span>
                        </InputCont>
                    </QuestionCont>
                    <QuestionCont>
                        <QuestionTitle>Trouble falling or staying asleep, or sleeping too much?</QuestionTitle>
                        <InputCont>
                            <input name="3" type="radio"></input>
                            <span>Not at all</span>
                        </InputCont>
                        <InputCont>
                            <input name="3" type="radio"></input>
                            <span>Several days</span>
                        </InputCont>
                        <InputCont>
                            <input name="3" type="radio"></input>
                            <span>More than half of the days</span>
                        </InputCont>
                        <InputCont>
                            <input name="3" type="radio"></input>
                            <span>Nearly everyday</span>
                        </InputCont>
                    </QuestionCont>
                    <QuestionCont>
                        <QuestionTitle>Feeling tired or having little energy?</QuestionTitle>
                        <InputCont>
                            <input name="4" type="radio"></input>
                            <span>Not at all</span>
                        </InputCont>
                        <InputCont>
                            <input name="4" type="radio"></input>
                            <span>Several days</span>
                        </InputCont>
                        <InputCont>
                            <input name="4" type="radio"></input>
                            <span>More than half of the days</span>
                        </InputCont>
                        <InputCont>
                            <input name="4" type="radio"></input>
                            <span>Nearly everyday</span>
                        </InputCont>
                    </QuestionCont>
                    <QuestionCont>
                        <QuestionTitle>Feeling bad about yourself - or that you are a failure or have let yourself or your family down?</QuestionTitle>
                        <InputCont>
                            <input name="5" type="radio"></input>
                            <span>Not at all</span>
                        </InputCont>
                        <InputCont>
                            <input name="5" type="radio"></input>
                            <span>Several days</span>
                        </InputCont>
                        <InputCont>
                            <input name="5" type="radio"></input>
                            <span>More than half of the days</span>
                        </InputCont>
                        <InputCont>
                            <input name="5" type="radio"></input>
                            <span>Nearly everyday</span>
                        </InputCont>
                    </QuestionCont>

                </Overflow>
                <ButtonCont onClick={()=>{navigate('/doctor/list')}}>
                    <Button>Submit</Button>
                </ButtonCont>
            </Cont>
        </Wrapper>
    )
}