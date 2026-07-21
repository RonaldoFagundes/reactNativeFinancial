import React, { useContext } from "react";
//import { AuthContext } from "../context/auth";
import { AppContext } from "../context/app";

import AuthRoutes from "./auth.routes";
import AppRoutes from "./app.routes";

export default function Routes(){
    const { signed } = useContext(AppContext);
    return signed ? <AppRoutes /> : <AuthRoutes />;
}