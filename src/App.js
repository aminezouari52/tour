import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { Routes, Route } from 'react-router-dom'

import Home from './component/Home'
import tours from './data/Data'
import NavBar from './component/NavBar'
import TourList from './component/TourList'
import { useState } from 'react'
import AddNewTour from './component/AddNewTour'
function App() {
  const [newtours, setTours] = useState(tours)
  const addtourshandle = (newtours) => {
    setTours((prevState) => {
      return [
        ...prevState,
        {
          id: Math.random().toString(),
          ...newtours,
        },
      ]
    })
    console.log('erreur')
  }
  return (
    <div className="App">
      <NavBar />
      <AddNewTour onAddTours={addtourshandle} />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/TourList/" element={<TourList tours={newtours} />} />
      </Routes>
    </div>
  )
}

export default App
