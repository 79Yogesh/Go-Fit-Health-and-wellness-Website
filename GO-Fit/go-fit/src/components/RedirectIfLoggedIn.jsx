import { Navigate } from "react-router-dom";
import { isAuthenticated } from "../utils/TokenUtils";

export function RedirectIfLoggedIn(props){
    if (isAuthenticated()) {
        return <Navigate to="/dashboard"></Navigate>
    } else {
        return props.children;
    }
}