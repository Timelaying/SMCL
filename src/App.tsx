import { Routes, Route } from 'react-router-dom';

import './globals.css';
import React from 'react'

const App = () => {
  return (
  <main className="flex h-screen">
    <Routes>
    {/*public route */}
    <Route path="/sign-in" element={<SigninForm/>} />

    {/*private route */}
    <Route index element={<Home />} />


    </Routes>

  </main>
  

  )
}

export default App