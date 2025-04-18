import React from 'react'
import { Toaster } from 'react-hot-toast';

import Home from './home/Home';
import Course from './components/Course';
import { Navigate, Route, Routes } from "react-router-dom"
import Courses from './courses/Courses';
import Signup from './components/Signup';
import { useAuth } from './context/AuthProvider';


function App() {
  const [authUser, setAuthUser] = useAuth()
  console.log(authUser);
  return (
    <>
    <div>
     <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/course" element ={authUser?<Courses/>:<Navigate to="/signup" />}/>
      <Route path="/signup" element ={<Signup/>}/>
     </Routes>
     <Toaster />
     </div>
    </>
 
  );
}

export default App
