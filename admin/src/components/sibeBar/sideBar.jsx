import React from 'react'
import './sideBar.css';
import { assets } from '../../assets/asset';
import { NavLink } from 'react-router-dom';
const SideBar = () => {
  return (
    <div className='sidebar'>

        <div className="sidebar-options">
            <NavLink to='/add' className="sidebar-option">
                <img src={assets.add_icon} alt="" />
                <p>Ajouter</p>
            </NavLink>
            <NavLink to='/list' className="sidebar-option">
                <img src={assets.order_icon} alt="" />
                <p>Lister</p>
            </NavLink>
            <NavLink to='/orders' className="sidebar-option">
                <img src={assets.order_icon} alt="" />
                <p>Commandes</p>
            </NavLink>
        </div>
      
    </div>
  )
}

export default SideBar
