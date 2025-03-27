import { assets } from "../../assets/assets";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.demalma_logo} alt="" />
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>ENTREPRISE</h2>
          <ul>
            <li>Accueil</li>
            <li>A propos</li>
            <li>Livraison</li>
            <li>Politique de vie privée</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>CONTACTEZ-NOUS</h2>
          <ul>
            <li>+221 77 777 77 77</li>
            <li>contact@demalma.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 © Demalma.com - Tout droits réservés
      </p>
    </div>
  );
};

export default Footer;
