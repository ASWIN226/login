import { Navigate } from "react-router-dom";

const ProtectRoute=({children})=>{
    const isAuthendicate=localStorage.getItem("token");

    return isAuthendicate?children:<Navigate to="/"/>
}

export default ProtectRoute;