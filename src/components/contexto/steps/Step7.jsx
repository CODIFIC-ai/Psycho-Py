import { useState } from "react";
import { useEffect } from "react";
import { useContexto } from "../../../providers/contexto";
import shuffle from "../../../utils/shuffle";
import getRandomNumber from "../../../utils/getRandomNumber";
import Form from "react-bootstrap/Form";

function Step7(props) {
  const {
    integrationRandomFiguresSecond,
    integrationRandomFiguresFirst,
    errorFigures,
  } = useContexto();
  const [images, setImages] = useState([
    [
      [
        {
          id: 1,
          image: integrationRandomFiguresFirst[getRandomNumber(0, 8)],
          response: "true",
        },
        {
          id: 2,
          image: integrationRandomFiguresSecond[getRandomNumber(0, 8)],
          response: "true",
        },
      ],
      {
        id: 1,
        image: errorFigures[getRandomNumber(0, 9)],
        response: "false",
      },
    ],
  ]);
  const [question, setQuestion] = useState([]);
  const [response, setResponse] = useState();

  useEffect(() => {
    setQuestion(
      shuffle([
        {
          id: 1,
          image: images[0][0][getRandomNumber(0, 2)],
        },
        {
          id: 2,
          image: images[0][1],
        },
      ])
    );
  }, []);

  function registerQuestion(e) {
    if (response) {
      props.fNextStep();
    } else {
      alert("Selecione uma imagem");
    }
  }

  function generateQuestion() {
    return (
      <>
        <div className="d-flex flex-column">
          <div className="d-flex justify-content-evenly mb-4">
            {question.map(({ image }, i) => (
              <div key={i} className="d-flex flex-column align-items-center">
                <img
                  src={image.image?.src}
                  alt="imagem"
                  style={
                    window.screen.width <= 768
                      ? {
                          width: "60px",
                          height: "60px",
                        }
                      : window.screen.width <= 992
                      ? {
                          width: "70px",
                          height: "70px",
                        }
                      : window.screen.width <= 1400
                      ? {
                          width: "80px",
                          height: "80px",
                        }
                      : {
                          width: "80px",
                          height: "80px",
                        }
                  }
                />
                <div className="mt-2">
                  <Form.Check
                    type="radio"
                    name="question"
                    onChange={() => setResponse(image)}
                    id={image.id}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="d-flex justify-content-center mt-4">
            <button
              type="button"
              className="btn btn-outline-secondary btn-lg px-4 mt-2"
              onClick={registerQuestion}
              style={{ maxWidth: "200px" }}
            >
              Próxima
            </button>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div
        className="d-flex justify-content-center p-4"
        style={{ height: "100vh" }}
      >
        <div className="text-center">
          <h5>Qual imagem você viu nos slides ?</h5>
          <div className="mt-3" style={{ width: "100%" }}>
            {generateQuestion()}
          </div>
        </div>
      </div>
    </>
  );
}

export default Step7;
