import { useState, useEffect } from "react";
import { Image } from "react-bootstrap";

import Draggable from "react-draggable";
import { listObject } from "../../providers/listObject";
import IntegrationBackground from "./IntegrationBackground";

function Integration(props) {
  const { qtdObject, handleStepStado, phase } = props;

  const [arrayObject, setArrayObject] = useState([]);
  const [releaseButton, setReleaseButton] = useState(false);

  useEffect(() => {
    let obj = listObject.filter((evt) => qtdObject.includes(evt.name) && evt);
    setArrayObject(obj);
  }, [qtdObject]);

  function handleSetPosition(drgg, obj) {
    const setPostion = arrayObject.map((evt) => {
      if (evt.name === obj.name) {
        return {
          ...evt,
          x: drgg.clientX,
          y: drgg.clientY,
          display: "none",
        };
      }
      return evt;
    });
    setArrayObject(setPostion);

    localStorage.setItem(phase, JSON.stringify(setPostion));

    // VERIFICAR SE O USÚARIO MOVEU TODO OS OBJETOS
    const leng = setPostion.length;
    const checkPosition = setPostion.filter(
      (evt) => evt.x !== "" && evt.y !== ""
    );
    setReleaseButton(checkPosition.length === leng);
  }

  return (
    <div className="container px-4 py-5">
      <div className="container d-flex flex-wrap  d-flex justify-content-between border-bottom">
        <div>
          <h2 className="pb-2 ">Lista dos objetos</h2>
        </div>

        <span className="d-block mb-3">
          <button
            type="button"
            className="btn btn-outline-secondary btn-lg px-4 mt-2"
            onClick={handleStepStado}
            disabled={!releaseButton}
          >
            Continuar {">"}
          </button>
        </span>
      </div>

      <div className="row mb-5">
        {arrayObject.map((object, index) => (
          <div className="col-2" key={index}>
            <Draggable onStop={(evt) => handleSetPosition(evt, object)}>
              <Image
                alt={object.name}
                src={object.img}
                style={{ display: object.display, position: "absolute" }}
              />
            </Draggable>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Integration;
