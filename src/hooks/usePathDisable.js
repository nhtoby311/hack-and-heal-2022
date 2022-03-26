import { matchPath, useLocation } from "react-router-dom"

export default function usePathDisable(paths)
{

    let location = useLocation()                             //CHECK FOR MATCHING ROUTE AND NESTED ROUTE
    const match = matchPath(
    { 
        path: paths
    },`${location.pathname}/*`,
    );
    return {match}
}