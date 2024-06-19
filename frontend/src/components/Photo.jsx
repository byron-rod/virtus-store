import photo from "../assets/images/virgilio-cuadro.png";

const Photo = () => {
  return (
    <div>
      <img
        src={photo}
        alt="Virgilio Cordon"
        className="w-[360px] h-[390px] flex top-20 left-40 z-20"
      />
    </div>
  );
};

export default Photo;
