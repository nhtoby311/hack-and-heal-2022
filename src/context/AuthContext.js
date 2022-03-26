import React, { useState } from "react"
import { useNavigate } from "react-router-dom";
import useIsMounted from "../hooks/useIsMounted";

const userMock = {
    "data":{
        "id": 3,
        "name": "Nguyen Hieu",
        "email": "nhtoby311@gmail.com",
        "type": "DOCTOR",
        "phone_number": null,
        "date_of_birth": null,
        "patient_status": null,
        "test_result": null
    }
    
}

export const AuthContext = React.createContext({auth:false,login:() => Promise,user:userMock,logout:() => Promise,authDoctor:false});

export function AuthProvider({children})
{


    const [user,setUser] = useState(JSON.parse(localStorage.getItem('user')))
    const [auth,setAuth] = useState(JSON.parse(localStorage.getItem('user')) && JSON.parse(localStorage.getItem('user')).data.type === 'PATIENT')
    const [authDoctor,setAuthDoctor] = useState(JSON.parse(localStorage.getItem('user')) && JSON.parse(localStorage.getItem('user')).data.type === 'DOCTOR')
    const isMounted = useIsMounted()  
    const navigate = useNavigate();
    // Actural use

    // const [user,setUser] = useState(JSON.parse(localStorage.getItem('user')))
    // const [auth,setAuth] = useState(true)
    // const [authDoctor,setAuthDoctor] = useState(true)
    // const isMounted = useIsMounted()    
    
    

    const getData = async () =>{
        const getUserData = async()=>
        {
            try
            {
                const response = await fetch(`http://129.159.250.94/api/auth/user`,{
                    method:"GET",
                    headers:{
                        'Authorization': `Bearer ${localStorage.getItem('token')}`
                    }
                })
                if(!response.ok)
                    throw new Error(response.statusText)
                const result = await response.json()
                console.log(result)
                if (isMounted.current) setUser(result)
                localStorage.setItem('user',JSON.stringify(result))
            }
            catch(err){
                console.log(err)
            }
        }

        if(localStorage.getItem('user') == null)                                    //Fetch only if user not in localstorage
        {
            await getUserData()
        }
    }

    /**LOGOUT: CLEAR localstorage, setAuth and authAdmin to false */
    const logout = async() =>{      
        try{
            if(localStorage.getItem('token')){                          //LOGOUT ONLY IF THERE IS TOKEN STORE in localstorage
                // const response = await fetch(`${process.env.REACT_APP_DOMAIN}/api/users/logout`,{
                //     method:"POST",
                //     headers:{
                //         'Authorization': `Bearer ${localStorage.getItem('token')}`
                //     }
                // })
                // if(!response.ok) throw new Error(response.statusText)

                // const result = await response.json()
                // console.log(result.user)
            
                localStorage.clear()
                setAuth(false)
                setAuthDoctor(false)
            }
        } catch(err){
            console.error(err)
        }
        
        //console.log(localStorage.getItem('token'))
    }

    const login = async () =>{
        await getData()                                             //Wait for assign user to the state user and localstorage('user')
        if(JSON.parse(localStorage.getItem('user')).data.type === 'DOCTOR')                //Because user set state is not fast enough, however, localstroage set is faster, so can get value from it
        {
            setAuthDoctor(true)
            setAuth(false)
        }
        else if (JSON.parse(localStorage.getItem('user')).data.type === 'PATIENT'){
            setAuth(true)
            setAuthDoctor(false)
        }
        //setAuth(true)
    }


    return(
        <AuthContext.Provider value={{auth,login,user,logout,authDoctor}}>
            {children}
        </AuthContext.Provider>
    )
}