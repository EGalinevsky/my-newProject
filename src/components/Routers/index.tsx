import React from 'react'
import {
    Routes,
    Route,
} from "react-router-dom";
import Login from '../../pages/Authorization/Login';
import SingUp from '../../pages/Authorization/SingUp';
import { Major } from '../../pages/Major';

export default function Routers() {
    return (
        <Routes>
            <Route path="/" element={<Major />} />
            <Route path="/login" element={<Login />} />
            <Route path="/singup" element={<SingUp />} />
        </Routes>
    )
}
