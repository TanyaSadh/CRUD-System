import React from 'react'
import {Routes,Route} from 'react-router-dom'
import  Home from '../components/feature/Home'
import Student from '../components/feature/Student'
import AllStudent from '../components/feature/AllStudent'
const AllRoutes = () => {
  return (
<>
    <Routes>
       <Route path='' element={<Home/> }/>
       <Route path='student' element={<Student/> }/>
       <Route path='student/add' element={<AllStudent/> }/>
       <Route path='student/edit/:id' element={<AllStudent/> }/>
    </Routes>
    </>
  )
}

export default AllRoutes