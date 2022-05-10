import React from 'react'
import {
    Routes,
    Route,
} from "react-router-dom";
import Login from '../../Pages/Authorization/Login';
import SingUp from '../../Pages/Authorization/SingUp';
import { Major } from '../../Pages/Major';

export default function Routers() {
    return (
        <Routes>
            <Route path="/" element={<Major />} />
            <Route path="/login" element={<Login />} />
            <Route path="/singup" element={<SingUp />} />
        </Routes>
    )
}
