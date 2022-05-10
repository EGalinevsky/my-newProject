import React from 'react'
import {
    Routes,
    Route,
} from "react-router-dom";
import Login from '../../Pages/Login';
import SingUp from '../../Pages/SingUp';

export default function Routers() {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/singup" element={<SingUp />} />
        </Routes>
    )
}
