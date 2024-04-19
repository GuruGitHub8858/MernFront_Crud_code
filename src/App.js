import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './Components/Header'
import TestMonial from './Components/TestMonial'
import Contact from './Components/Contact'
import Home from './Components/Home'
import TodoList from './Components/TodoList'
const App = () => {
  return (
    <div>
      <Router>
        <div>
          <Header />
        </div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/test' element={<TestMonial />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/todo' element={<TodoList />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
