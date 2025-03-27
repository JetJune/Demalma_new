import { useState } from "react";
import Header from "../../components/Header/Header";
import Sellers from "../../components/Sellers/sellers";
import "./home.css";
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay";
import AppDownload from "../../components/AppDownload/AppDownload";
const Home = () => {
  const [seller, setSeller] = useState("All");
  return (
    <div>
      <Header />
      <Sellers category={seller} setCategory={setSeller} />
      <FoodDisplay seller={seller} />
      <AppDownload />
    </div>
  );
};

export default Home;
