import React from 'react';
import Login from './components/Login';
import Signup from './components/Signup';
import AdminDashboard from './components/AdminDashboard';
import UserDashboard from './components/UserDashboard';
import UserCreateRequest from './components/UserCreateRequest';
import UserShowRequests from './components/UserShowRequests';
import UserProductList from './components/UserProductList';
import UserActivateLicense from './components/UserActivateLicense';
import AdminShowRequest from './components/AdminShowRequests';
import AdminAddProduct from './components/AdminAddProduct';
import AdminProductList from './components/AdminProductList';

import { BrowserRouter, Route, Routes} from 'react-router-dom';


const App = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Signup />} />
          <Route path="/admindashboard" element={<AdminDashboard />} />
          <Route path="/userdashboard" element={<UserDashboard />} />
          <Route path="/UserCreateRequest" element={<UserCreateRequest />} />
          <Route path="/UserShowRequests" element={<UserShowRequests />} />
          <Route path="/UserProductList" element={<UserProductList />} />
          <Route path="/UserActivateLicense" element={<UserActivateLicense />} />
          <Route path="/AdminShowRequests" element={<AdminShowRequest />} />
          <Route path="/AdminAddProduct" element={<AdminAddProduct />} />
          <Route path="/AdminProductList" element={<AdminProductList />} />
          
        </Routes>
      </BrowserRouter>
    );
  };
  
  export default App;