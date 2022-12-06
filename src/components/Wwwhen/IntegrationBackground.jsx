import Castle from "../../assets/background/bg-01.jpg";
import City from "../../assets/background/bg-02.jpg";
import Forest from "../../assets/background/bg-03.jpg";
import Houses from "../../assets/background/bg-04.jpg";
import Park from "../../assets/background/bg-05.jpg";
import Park2 from "../../assets/background/bg-06.jpg";

function IntegrationBackground({ bg }) {
  const arrayBg = [
    { img: Castle, name: "Castelo" },
    { img: City, name: "Cidade" },
    { img: Forest, name: "Floresta" },
    { img: Houses, name: "Casas" },
    { img: Park, name: "Parque" },
    { img: Park2, name: "Parque 2" },
    { img: Castle, name: "Castelo" },
  ];

  return (
    <section
      className=" position-relative overflow-hidden  p-md-5 m-md-3 text-center bg-light border border-dark "
      style={{
        backgroundImage: `url(${arrayBg[bg].img})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "60vh",
      }}
    >
      <div className="product-device shadow-sm d-none d-md-block"></div>
      <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
    </section>
  );
}

export default IntegrationBackground;
