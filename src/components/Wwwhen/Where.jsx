import { useState } from "react";
import { Image } from "react-bootstrap";

function Where(props) {
  const { handleStepStado, phase } = props;

  const [arrayObject, setArrayObject] = useState(
    JSON.parse(localStorage.getItem(phase))
  );

  const [auxObject, setAuxObject] = useState(
    JSON.parse(localStorage.getItem(phase)).slice(0, 2)
  );
  const [auxPosition, setAuxPosition] = useState(2);

  // SALVANDO A RESPOSTA DO USÚARIO
  function handleAnswer(answer, name) {
    let newView = [];
    setAuxObject(newView);

    const res = arrayObject.map((evt) => {
      if (evt.name === name[0])
        return { ...evt, where: answer[0] + " do(a) " + name[1] };
      if (evt.name === name[1])
        return { ...evt, where: answer[1] + " do(a) " + name[0] };
      return evt;
    });

    newView = JSON.parse(localStorage.getItem(phase)).slice(
      auxPosition,
      auxPosition + 2
    );

    // SETANDO NOVA VISUALIZAÇÃO DE OBJS
    setAuxObject(newView); // atualizando visualização

    setArrayObject(res); // objs
    setAuxPosition(auxPosition + 2);

    localStorage.setItem(phase, JSON.stringify(res));

    if (newView.length === 0) handleStepStado();
  }

  return (
    <section className="px-4 py-5 my-5 text-center">
      <div className="col-lg-6 mx-auto">
        <h1 className="display-5 lead mb-4">
          Qual destes objetos foi escondido antes?
        </h1>
        <div className="row">
          {auxObject.length !== 0 && (
            <>
              <div className="col-lg-6 mx-auto">
                <button
                  type="button"
                  className="btn btn-link"
                  onClick={() =>
                    handleAnswer(
                      ["Antes", "Depois"],
                      [auxObject[0]?.name, auxObject[1]?.name]
                    )
                  }
                >
                  <Image alt={auxObject[0].name} src={auxObject[0].img} />
                </button>
              </div>
              <div className="col-lg-6 mx-auto">
                <button
                  type="button"
                  className="btn btn-link"
                  onClick={() =>
                    handleAnswer(
                      ["Antes", "Depois"],
                      [auxObject[1]?.name, auxObject[0]?.name]
                    )
                  }
                >
                  <Image alt={auxObject[1].name} src={auxObject[1].img} />
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export default Where;
