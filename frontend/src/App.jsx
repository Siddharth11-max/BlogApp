import React from 'react'
import "./App.css"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import NoPage from './pages/NoPage';
import Home from './pages/Home';
import SingleBlog from './pages/SingleBlog';
import SignUp from './pages/SignUp';
import Login from './pages/Login'
import UploadBlog from './pages/UploadBlog';
const App = () => {
  let isLoggedIn = localStorage.getItem("isLoggedIn");
  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path='/' element={isLoggedIn ? <Home /> : <Navigate to={"/login"} />} />

          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path='/uploadBlog' element={isLoggedIn ? <UploadBlog /> : <Navigate to={"/login"} />} />
          <Route path='/blog/:blogId' element={isLoggedIn ? <SingleBlog /> : <Navigate to={"/login"} />} />

          <Route path="*" element={<NoPage />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
