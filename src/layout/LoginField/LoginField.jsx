import React from 'react';
import { Outlet } from 'react-router-dom';
import NavigationBar from '../../pages/shared/NavigationBar/NavigationBar';

const LoginField = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <Outlet></Outlet>
        </div>
    );
};

export default LoginField;