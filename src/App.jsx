import React from 'react'
import Form from "./components/Form"
import Left from "./components/Left"
import Right from "./components/Right"
import Success from "./components/success"
import { BrowserRouter, Route , Routes } from 'react-router-dom'
import Layout from './components/Layout'



function App() {
  return (
    <BrowserRouter >
    <Routes>
      <Route path='/' element={<Layout />} />
    </Routes>
    </BrowserRouter>
       
       
  )
}

export default App