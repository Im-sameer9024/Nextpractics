import { Route, Routes } from 'react-router-dom'
import './App.scss'
import Navbar from './components/Navbar/Navbar'
import Todo from './components/Todo/Todo'
import Alltodos from './components/AllToods/Alltodos'
import UpdatedTodos from './components/UpdatedTodos/UpdatedTodos'



export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Todo />} />
        <Route path='/all' element={<Alltodos />} />
        <Route path='/update/:id' element={<UpdatedTodos />} />
      </Routes>
    </>
  )
}
