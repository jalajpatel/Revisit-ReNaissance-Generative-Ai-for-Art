import React from 'react'
import './styles.css'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav>
      <Link className='styleremover' to="/"><h1>Revisit Renaissance</h1></Link>
      {/* <div className='quicknav-aides'>
        <ul>
          <li><Link className='styleremover' to="/">About us</Link></li>
          <li><Link className='styleremover' to="/">Something else</Link></li>
        </ul>
      </div> */}
    </nav>
  )
}

export default Navbar