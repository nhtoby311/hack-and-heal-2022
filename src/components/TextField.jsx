import styled from "styled-components"

const Cont = styled.div`
    width: 100%;
    position: relative;
    input{
        width: 100%;
        color: black;
        padding: 20px 0px;
        border: none;
        background: transparent;
        border-bottom: solid 2px black;
        outline: none;
        font-size: 1.4rem; 
        &:focus ~span 
        {
            font-size: 12px;
            padding: 15px 0px;
            transform: translateY(-35px);
        }
        &:valid ~span{
            font-size: 12px;
            padding: 15px 0px;
            transform: translateY(-35px);
        }
        &:valid{
            border-bottom: solid 2px blue;
            color : blue;
        }

        &:autofill {
            background:transparent;
        }

        input:valid ~span{
            color: blue;
        }
    }
    span{
        color: black;
        position: absolute;
        left: 0;
        padding: 15px 0;
        font-size: 18px;
        margin: 10px 0px;
        pointer-events: none;
        -webkit-transition: 0.3s;
        border-radius: 25px;
        transition: 0.3s;
        letter-spacing: 1.2px;
        font-weight: 600;
    }
`


const TextField = ({register,name,text,type,...rest},ref) =>{

    return(
        <Cont>
            <input {...register(name)}/>
            <span>{text}</span>
        </Cont>
    )
}

export default TextField