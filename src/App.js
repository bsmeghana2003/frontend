import * as React from 'react';
import Button from '@mui/material/Button';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from './LoginPage';
import Signup from './SignUp';
import Dashboard from './Dashboard';
export default function MyApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}