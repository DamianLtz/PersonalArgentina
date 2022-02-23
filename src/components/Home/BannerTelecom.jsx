import Telecom from "../../img/Home/telecom.svg"

const BannerTelecom = ({className}) => {
  return (
    <div className={`my-5 ${className ? "banner-tienda-telecom" : "bg-light"}`}>
      <div className="d-flex justify-content-center align-items-center">
          <img src={Telecom} alt="" />
      </div>
    </div>
  );
};

export default BannerTelecom;
