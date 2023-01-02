import "../../App.css";
import { Navigate, Outlet } from 'react-router-dom';

function Root() {
    let current_user = JSON.parse(localStorage.getItem("user"));
    if (current_user) { return <Navigate to="/dashboard" /> }

    return <Outlet />;
}
export default Root;
