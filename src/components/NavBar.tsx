import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className="flex items-center justify-between px-8 py-4">
      <Link to="/" className="flex items-center">
        <span className="text-yellow-500 text-3xl font-bold">F</span>
        <span className="text-red-500 text-3xl font-bold">2</span>
        <span className="text-green-500 text-2xl ml-2 font-semibold">MathX</span>
      </Link>
      
      <div className="flex items-center space-x-8">
        <Link to="/" className="text-gray-700 hover:text-gray-900">HOME</Link>
        <a href="#" className="text-gray-700 hover:text-gray-900">ABOUT</a>
        <a href="#" className="text-gray-700 hover:text-gray-900">SERVICE</a>
        <a href="#" className="text-gray-700 hover:text-gray-900">CONTACT</a>
        <Link to="/login" className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600">
          Login
        </Link>
      </div>
    </nav>
  )
}

export default NavBar