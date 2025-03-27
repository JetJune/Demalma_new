/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import "./loginPopup.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios"
const LoginPopup = ({ setShowLogin }) => {
  const { url, setToken } = useContext(StoreContext)
  const [currState, setCurrState] = useState("S'inscrire");
  const [data, setData] = useState({
    name: "",
    email: "",
    password: ""
  })
  const onChangeHandler = (event)=> {
    const name = event.target.name;
    const value = event.target.value;
    setData(data=>({...data, [name]:value}))
  }

  const onLogin = async (event) => {
    event.preventDefault()
    let newUrl = url;
    if (currState==="Se connecter"){
      newUrl+= "/api/user/login"
    }else{
      newUrl += "/api/user/registration"
    }

    const response = await axios.post(newUrl, data);
    if (response.data.success) {
      setToken(response.data.token);
      localStorage.setItem("token", response.data.token);
      setShowLogin(false);
    }
    else{
      alert(response.data.message);
    }
  }

  
  return (
    <div className="login-popup">
      <form onSubmit={onLogin} className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt=""
          />
        </div>
        <div className="login-popup-input">
          {currState === "Se connecter" ? (
            <></>
          ) : (
            <input name="name" onChange={onChangeHandler} value={data.name} type="text" placeholder="Votre nom" required />
          )}

          <input name="email" onChange={onChangeHandler} value={data.email} type="email" placeholder="Adresse mail" required />
          <input name="password" onChange={onChangeHandler} value={data.password}
            type="password"
            placeholder="Créer votre mot de passe"
            required
          />

          {currState === "Se connecter" ? (
            <></>
          ) : (
            <input
              type="password"
              placeholder="Confirmez votre mot de passe"
              required
            />
          )}
        </div>
        <button type="submit">
          {currState === "S'inscrire" ? "Créez un compte." : "Connectez-vous"}
        </button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>
            En continuant, j&#39;accèpte les conditions d&#39;utilisations et de
            politique de confidentialites.
          </p>
        </div>
        {currState === "S'inscrire" ? (
          <p>
            Avez-vous dejà un compte ? {" "}
            <span onClick={() => setCurrState("Se connecter")}>
              Se connecter
            </span>
          </p>
        ) : (
          <p>
            Créer nouveau compte ? {" "}
            <span onClick={() => setCurrState("S'inscrire")}>Cliquez-ici</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;