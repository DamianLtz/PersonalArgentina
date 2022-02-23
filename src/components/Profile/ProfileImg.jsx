import ImgProfile from "../../img/profile/mobile.svg";

const ProfileImg = () => {
  return (
    <div className="bg-profile-img rounded-circle">
      <img src={ImgProfile} alt="Imagen del Usuario" className="img-fluid img-profile p-2" />
    </div>
  );
};

export default ProfileImg;
