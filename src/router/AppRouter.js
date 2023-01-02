import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import ProtectedRoot from "../components/layout/ProtectedRoot";
import Root from "../components/layout/Root";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route element={<Root/>}>
                <Route path='/login' element={<Login />} />
            </Route>
            <Route element={<ProtectedRoot/>}>
                <Route path='/dashboard' element={<Dashboard />} />
            </Route>
        </>
    )
);