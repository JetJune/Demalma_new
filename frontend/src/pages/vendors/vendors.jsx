import React from 'react';
import { useState } from "react";
import VendorsSidebar from '../../components/VendorsSidebar/VendorsSidebar';
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay';
import './vendors.css'
function Vendors() {
  const [seller, setSeller] = useState("All");
  return (
    <div>

      <div className="app-content">
        <div className='vendors-sidebar'>
          <VendorsSidebar category={seller} setCategory={setSeller} />
        </div>
        <div className='food-display'>
          <FoodDisplay seller={seller}/>
        </div>
      </div>
      <hr />
    </div>

  )
}

export default Vendors