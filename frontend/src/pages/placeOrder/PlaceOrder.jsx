import { useContext } from "react";
import "./placeOrder.css";
import { StoreContext } from "../../context/StoreContext";
const PlaceOrder = () => {

  const {getTotalCartAmount} = useContext(StoreContext);

  return <div>
    <form className='place-order' action="">
       
      <div className="place-order-left">
        <p className="title">Information de la livraison</p>
        <div className="multi-fields">
          <input type="text" placeholder="First Name"/>
          <input type="text" placeholder="Last Name"/>
        </div>

        <input type="email" placeholder="email Address"/>
        <input type="text" placeholder="Street"/>
        
        <div className="multi-fields">
          <input type="text" placeholder="City"/>
          <input type="text" placeholder="State"/>
        </div>

        <div className="multi-fields">
          <input type="text" placeholder="Zip Code"/>
          <input type="text" placeholder="Country"/>
        </div>
        <input type="text" placeholder="Phone"/>
      </div>
      <div className="place-order-right">
      <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>Total (Hors Transport)</p>
              <p>{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Frais de transport</p>
              <p>{getTotalCartAmount()===0 ? 0 : 10}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <p>{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 10}</p>
            </div>
          </div>
          <button>PROCEED TO PAYMENT</button>
        </div>
      </div>


    </form>
  </div>;
};

export default PlaceOrder;
