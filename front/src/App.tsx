import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import LoginPage from './LoginPage/LoginPage'
import MapPage from './MapPage/MapPage'

export default function hello() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path ="/map" element={<MapPage />} />
      </Routes>
    </Router>
  )
}
