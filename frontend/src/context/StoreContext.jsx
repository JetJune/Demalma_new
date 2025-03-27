/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import axios from 'axios';
export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cardItems, setCardItems] = useState({});
  const url = "http://localhost:4000"
  const [token, setToken] = useState("");
  const [food_list, setFoodList] = useState([]);
  
  const addToCart = (itemId) => {
    if (!cardItems[itemId]) {
      setCardItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCardItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
  };

  const removeFromCart = (itemId) => {
    setCardItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cardItems){
       if (cardItems[item]>0){
        let itemInfo = food_list.find((product) => product._id === item);
        totalAmount += itemInfo.price * cardItems[item];
        // cardItems[item] returns theproduct quantity.
       }
    }
    return totalAmount;
  }

const fetchFoodList = async () => {
  const response = await axios.get(url+'/api/food/list');
  setFoodList(response.data.data)
}

  useEffect(()=>{
    

    async function loadData() {
      await fetchFoodList();
      const localToken = localStorage.getItem('token');
      if (localToken){
        setToken(localToken);
      }
    }
    loadData();
  }, []);

  const contextValue = {
    food_list,
    cardItems,
    setCardItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    url,
    token,
    setToken,
  };
  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
