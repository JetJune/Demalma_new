import React from 'react'
import './VendorsSidebar.css'
import { sellers_list } from '../../assets/assets';
function VendorsSidebar({category, setCategory}) {
    
  return (
    <div className='vendors'>
        <div className="vendors-list">
            {sellers_list.map((item, index) => {
                return (
                <div
                    onClick={() =>
                      setCategory((prev) =>
                        prev === item.seller_name ? "All" : item.seller_name
                      )
                    }
                    key={index}
                    className="vendors-list-item"
                >
                <img
                    className={category === item.seller_name ? "active" : ""}
                    src={item.seller_img}
                    alt=""
                />
                    <p>{item.seller_name}</p>
                  </div>
                );
              })}
            </div>
    </div>
  )
}

export default VendorsSidebar