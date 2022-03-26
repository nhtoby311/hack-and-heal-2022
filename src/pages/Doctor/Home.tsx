import styled from "styled-components";
import Layout from "../../components/Layout";

const Grid = styled.div`
    display: grid;
    padding: 100px 30px 0 50px;
    width: 100%;
    grid-template-columns: repeat(15, 1fr);
    grid-template-rows: repeat(7, 1fr);
    grid-column-gap: 10px;
    grid-row-gap: 10px;
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
    grid-area: 1 / 9 / 6 / 16;
    display: flex;
    flex-direction: column;
    padding: 20px 30px;
    gap: 20px;
    h3{
        font-size: 43px;
        font-weight: 500;
    }
    p{

    }
`

const Button = styled.div`
    padding: 20px 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    width:30%;
    margin-top: auto;
    background: #3771E4!important;
    border-radius: 11px !important;
    p{
        font-size: 19px;
        font-weight: 400;
        color: white;
    }
`

const Div1 = styled.div`
    grid-area: 2 / 1 / 5 / 5;
`

const Div2 = styled.div`
    grid-area: 2 / 5 / 5 / 9;
`

export default function Home(){
    return(
        <Layout>
            <Grid>
                <Welcome>
                    <h3>
                        Welcome Back, Dr. Smith!
                    </h3>
                </Welcome>
                <Test>
                    <h3>
                        Depression Test
                    </h3>
                    <p>
                        A test to provide some insights aboutdepression
                    </p>
                    <Button>
                        <p>Start</p>
                    </Button>
                </Test>
                <Div1></Div1>
                <Div2></Div2>
            </Grid>
        </Layout>
    )
}