import { assets } from "../../assets/assets";
import "./appDownload.css";

const AppDownload = () => {
  return (
    <div className="app-download" id="app-download">
      <p>
        Pour une meilleur expérience Télécharger notre <br /> applis Demalma
      </p>
      <div className="app-download-platforms">
        <img src={assets.play_store} alt="" />
        <img src={assets.app_store} alt="" />
      </div>
    </div>
  );
};

export default AppDownload;
