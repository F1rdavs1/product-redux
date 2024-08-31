import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { HomePage, Liked, Saved } from '../pages'


function CustomRoute() {
  return (
    <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/liked' element={<Liked/>}/>
        <Route path='/saved' element={<Saved/>}/>
    </Routes>
  )
}

export default CustomRoute