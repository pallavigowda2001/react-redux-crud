import React from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Menu from './Component/Menu'
import Home from './Pages/Home'
import Update from './Pages/Update'
import Pnf from './Pages/Pnf'
import Create from './Pages/Create'
import { ToastContainer } from 'react-toastify'


 function App() {
  return (
   <BrowserRouter>
      <Menu/>
       <ToastContainer autoclose={3000} position='bottom-right'/>
          <Routes>
            <Route path={`/`} element ={<Home/>}/>
            <Route path={`/create`} element ={<Create/>}/>
            <Route path={`/edit/:id`} element ={<Update/>}/>
            <Route path={`/*`} element ={<Pnf/>}/>


           </Routes>
   </BrowserRouter>
  )
}

export default App
