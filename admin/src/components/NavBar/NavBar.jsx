import React from 'react'
import "./NavBar.css"
import { assets } from '../../assets/asset'
const NavBar = () => {
  return (
    <div className='navbar'>

        <img className='logo' src={assets.logo} alt="" />
        <img className='user-profile' src={assets.profile_image} alt="" />
      
    </div>
  )
}

export default NavBar
