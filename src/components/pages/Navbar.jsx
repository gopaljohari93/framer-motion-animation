import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav>
      <ul className="nav">
        <li className="navitem">
          <Link to="/" className="navlink">Home</Link>
        </li>
        <li className="navitem">
          <Link to="/about" className="navlink">About</Link>
        </li>
        <li className="navitem">
          <Link to="/services" className="navlink">Services</Link>
        </li>
        <li className="navitem">
          <Link to="/portfolio" className="navlink">Portfolio</Link>
        </li>
        <li className="navitem">
          <Link to="/contact" className="navlink">Contact</Link>
        </li>
      </ul>
    </nav>
  )
}
