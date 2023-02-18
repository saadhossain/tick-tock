import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from '../Layout/Main';
import Activity from '../Pages/Activity';
import Blogs from '../Pages/Blogs';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import Registrar from '../Pages/Registrar';

const Routers = () => {
    return (
        <Routes>
            <Route path='/' element={<Main/>}>
                <Route path='/' element={<Home/>} />
                <Route
                path='/blog'
                element={<Blogs/>}
                loader={async ()=>fetch('https://api.itbook.store/1.0/new')}
                />
                <Route path='/activity' element={<Activity/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/register' element={<Registrar/>}/>
            </Route>
        </Routes>
    );
};

export default Routers;