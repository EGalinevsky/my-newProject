import React from 'react'
import {
    Routes,
    Route,
} from "react-router-dom";
import PrivateRoute from '../../helpers/PrivateRoute';
import Login from '../../pages/Authorization/Login';
import SingUp from '../../pages/Authorization/SingUp';
import { Major } from '../../pages/Major';
import { MapPage } from '../../pages/Map/MapPage';
import Profile from '../../pages/Profile';

export default function Routers() {
    return (
        <Routes>
            <Route path="/" element={<Major />} />
            <Route path="/login" element={<Login />} />
            <Route path="/singup" element={<SingUp />} />
            <Route
                path="/profile"
                element={
                    <PrivateRoute>
                        <Profile />
                    </PrivateRoute>
                } />
            <Route
                path="/map"
                element={
                    <PrivateRoute>
                        <MapPage />
                    </PrivateRoute>
                } />
        </Routes>
    )
}
