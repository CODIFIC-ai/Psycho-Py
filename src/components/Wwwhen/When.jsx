import { useState } from "react";
import { Image } from "react-bootstrap";
import Draggable from "react-draggable";

import X from "../../assets/x.svg";

function When(props) {
  const { handleStepStado, phase } = props;

  const [position, setPostion] = useState(0);
  const [arrayObject, setArrayObject] = useState(
    JSON.parse(localStorage.getItem(phase))
  );

  // SALVANDO A RESPOSTA DO USÚARIO
  function handleAnswer(answer) {
    // arrayObject.push()
    const obj = arrayObject.map((evt, index) => {
      if (index === position) {
        return { ...evt, when: answer };
      }
      return { ...evt };
    });

    setArrayObject(obj);
    setPostion(position + 1);
    if (arrayObject.length - 1 === position) {
      localStorage.setItem(phase, JSON.stringify(obj));
      handleStepStado();
    }
  }

  console.log("arrayObject[position] ", arrayObject[position]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12 mx-auto">
          <Image
            alt="x"
            src={X}
            style={{
              position: "absolute",
              left: arrayObject[position].x + "px",
              top: arrayObject[position].y + "px",
            }}
          />

          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <h1 className="display-5 lead">
              Você escondeu algum objeto neste local?
            </h1>
            <button
              type="button"
              className="btn btn-primary btn-lg px-4 gap-3"
              onClick={() => handleAnswer("sim")}
            >
              Sim
            </button>
            <button
              type="button"
              className="btn btn-outline-secondary btn-lg px-4"
              onClick={() => handleAnswer("não")}
            >
              Não
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default When;
