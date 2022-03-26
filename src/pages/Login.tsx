import { useContext, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import bg from '../assets/bg.jpg'
import TextField from '../components/TextField'
import { AuthContext } from '../context/AuthContext';
import { useForm } from "react-hook-form";



export default function Login(){
    const { login, logout, auth ,authDoctor } = useContext(AuthContext);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const firstRender = useRef(true)
    const navigate = useNavigate();


    const handleSubmitCallBack = async (data:any)=>{
        // setLoading(true)
        // setError(false)
        console.log(data)
        await logout()                  //LOGOUT FIRST BEFORE LOGIN WITH NEW DATA
        try{
            const response = await fetch('http://129.159.250.94/api/auth/login',{
                method:'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify(data)
            })
            if(!response.ok) throw new Error(response.statusText)
            const result = await response.json()
            localStorage.setItem('token',result.access_token)      //save token to localStorage
            await login()                                 //UPDATE CONTEXT AUTH STATE
            
            //setLoading(false)
            //console.log(localStorage.getItem('token'))
        } catch(err){
            //setLoading(false)
            //setError(true)
            console.log(err)
        }
    }

    useEffect(()=>{                                     //When ever the the auth state change, depend on them then redirect, prevent first render so reload doesn't cause error
        if(!firstRender.current){
            if(auth === true){
                navigate("/");
            }
            else if (authDoctor === true){
                console.log(authDoctor)
                navigate("/doctor");
            }
        }
        else {
            firstRender.current = false
        }
        // eslint-disable-next-line
    },[auth,authDoctor])

    return(
        <Container>
            <Image src={bg}/>
            <LoginCont>
                <h1>Login</h1>
                <Form action='' onSubmit={handleSubmit(handleSubmitCallBack)}>
                    <LoginForm>
                        <TextField register={register} name="email" text='Email' type='text' required/>    
                        <TextField register={register} name="password" text='Email' type='text' required/>
                        {/* https://stackoverflow.com/questions/66196193/using-react-hook-forms-ref-is-throwing-errors-in-the-console-if-i-use-a-custom */}

                        <Button type="submit">Log In</Button>
                        <Anchor to="register">Create an account</Anchor>
                    </LoginForm>
                </Form>
            </LoginCont>
        </Container>
    )
}

const Container = styled.div`
    width:100vw;
    height:100vh;
    display: flex;
    justify-content: flex-end;
`
const Image = styled.img`
    width:100vw;
    height: 100vh;
    position: absolute;
    top:0;
    left: 0;
    object-fit: cover;
    z-index: -1;
`
const LoginCont = styled.div`
    height: 100%;
    width: 60%;
    background: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h1{
        font-size: 42px;
    }
`


const Form = styled.form`
    width: 65%;
`
const LoginForm = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
`

const Button = styled.button`
    padding: 15px 20px;
    border-radius: 14px;
    outline: none;
    border: none;
    background: blue;
    cursor: pointer;
`

const Anchor = styled(Link)`
    width: 100%;
    display: flex;
    justify-content: center;
    color: black;
`

