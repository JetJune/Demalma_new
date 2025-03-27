/* eslint-disable react/prop-types */
import "./sellers.css";
import { sellers_list } from "../../assets/assets";
const Sellers = ({ category, setCategory }) => {
  return (
    <div className="sellers" id="sellers">
      <h1>Vendeurs</h1>
      <p className="sellers-text">
        Choissisez votre vendeur ou vendeuse preféré(e)s à travers leurs
        differences culinaires
      </p>
      <div className="sellers-list">
        {sellers_list.map((item, index) => {
          return (
            <div
              onClick={() =>
                setCategory((prev) =>
                  prev === item.seller_name ? "All" : item.seller_name
                )
              }
              key={index}
              className="sellers-list-item"
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
      <hr />
    </div>
  );
};

export default Sellers;
