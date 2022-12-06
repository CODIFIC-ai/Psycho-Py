import { useState } from "react";
import { Image } from "react-bootstrap";

function What(props) {
  const { handleStepStado, phase } = props;

  const [position, setPostion] = useState(0);
  const [arrayObject, setArrayObject] = useState(JSON.parse(localStorage.getItem(phase)));

  // SALVANDO A RESPOSTA DO USÚARIO
  function handleAnswer(answer) {
    // arrayObject.push()
    const obj = arrayObject.map((evt, index) => {
      if (index === position) return { ...evt, what: answer };
      return { ...evt };
    });

    setArrayObject(obj);
    setPostion(position + 1);
    if (arrayObject.length - 1 === position) {
      localStorage.setItem(phase, JSON.stringify(obj));
      handleStepStado();
    }
  }

  return (
    <section className="px-4 py-5 my-5 text-center">
      <Image
        alt={arrayObject[position].name}
        src={arrayObject[position]?.img}
      />

      <div className="col-lg-6 mx-auto">
        <h1 className="display-5 lead mb-4">Você escondeu esse objeto?</h1>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
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
    </section>
  );
}

export default What;
