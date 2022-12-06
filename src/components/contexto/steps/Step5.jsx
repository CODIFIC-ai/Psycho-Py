import { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import backImage from "../../../assets/contexto/fundo5.png";
import { useContexto } from "../../../providers/contexto";
import shuffle from "../../../utils/shuffle";

function Step5(props) {
  const [currentTime, setTime] = useState(30);
  const { figures, setIntegrationRandomFiguresFirst } = useContexto();
  const [randomFigures, setRandomFigures] = useState(shuffle([...figures]));

  useEffect(() => {
    let contador = setInterval(() => {
      setTime(currentTime - 1);
      console.log(currentTime);
    }, 1000);
    setTimeout(() => {
      props.fNextStep();
    }, 30000);
    return () => clearInterval(contador);
  });

  useEffect(() => {
    if (randomFigures) {
      let array = [];
      for (let i = 0; i <= figures.length; i++) {
        let element = document.getElementById(i)?.getBoundingClientRect();
        let src;
        let imageID;
        randomFigures.forEach((item) => {
          return item.id === i
            ? ((src = item.src), (imageID = item.type))
            : null;
        });
        if (element && src) {
          array.push({
            id: i,
            src: src,
            i,
            positions: element,
          });
        }
      }
      setIntegrationRandomFiguresFirst(array);
    }
  }, [randomFigures]);

  return (
    <>
      <div
        style={{
          height: "100vh",
          backgroundImage: `url(${backImage})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Row className="no-gutters">
          <Col>
            <div className="d-flex justify-content-center">
              <img
                id={`${randomFigures[0].id}`}
                src={randomFigures[0].src}
                alt={`desenho`}
                className="mt-3"
              />
            </div>
          </Col>
          <Col>
            <div className="d-flex justify-content-center">
              <img
                id={`${randomFigures[1].id}`}
                src={randomFigures[1].src}
                alt={`desenho`}
                className="mt-5"
              />
            </div>
          </Col>
          <Col>
            <div className="d-flex justify-content-center">
              <img
                id={`${randomFigures[2].id}`}
                src={randomFigures[2].src}
                alt={`desenho`}
              />
            </div>
          </Col>
        </Row>
        <Row className="no-gutters">
          <Col
            style={{
              height: "30vh",
            }}
          >
            <div
              className="d-flex justify-content-center align-items-center"
              style={{
                width: "100%",
                height: "100%",
              }}
            >
              <img
                id={`${randomFigures[3].id}`}
                src={randomFigures[3].src}
                alt={`desenho`}
              />
            </div>
          </Col>
          <Col>
            <div
              className="d-flex justify-content-center align-items-center"
              style={{
                width: "100%",
                height: "100%",
              }}
            >
              <img
                id={`${randomFigures[4].id}`}
                src={randomFigures[4].src}
                alt={`desenho`}
                className="mt-5"
              />
            </div>
          </Col>
          <Col>
            <div
              className="d-flex justify-content-center align-items-center"
              style={{
                width: "100%",
                height: "100%",
              }}
            >
              <img
                id={`${randomFigures[5].id}`}
                src={randomFigures[5].src}
                alt={`desenho`}
              />
            </div>
          </Col>
        </Row>
        <Row className="no-gutters">
          <Col>
            <div
              className="d-flex justify-content-center align-items-center"
              style={{
                width: "100%",
                height: "100%",
              }}
            >
              <img
                id={`${randomFigures[6].id}`}
                src={randomFigures[6].src}
                alt={`desenho`}
              />
            </div>
          </Col>
          <Col>
            <div
              className="d-flex justify-content-center align-items-center"
              style={{
                width: "100%",
                height: "100%",
              }}
            >
              <img
                id={`${randomFigures[7].id}`}
                src={randomFigures[7].src}
                alt={`desenho`}
              />
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Step5;
