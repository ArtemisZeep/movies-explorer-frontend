import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ component: Component, ...props }) {
    console.log(props.isLogged)
    return props.isLogged ? <Navigate to="/" /> : <Component {...props} /> ;
}

export default ProtectedRoute;