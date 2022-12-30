import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Root from "../components/layout/Root";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Root />}>
            <Route index element={<Dashboard />} />
            <Route path='/login' element={<Login />} />
        </Route>
    )
);