import { useContext } from "react";
import { Navigate ,Route } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function AuthRoute({element: Component, ...rest}){
    const { auth } = useContext(AuthContext);
    return(
        <Route 
            >
        </Route>
    )
}