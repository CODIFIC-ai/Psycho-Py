import { useState } from "react";
import { useEffect } from "react";
import { useContexto } from "../../../../providers/contexto";
import shuffle from "../../../../utils/shuffle";
import getRandomNumber from "../../../../utils/getRandomNumber";
import Form from "react-bootstrap/Form";

function Step18(props) {
  const {
    integrationRandomFiguresSecond,
    integrationRandomFiguresFirst,
    errorFigures,
    responses,
    setResponses,
  } = useContexto();
  const [images, setImages] = useState([
    [
      [
        {
          id: 1,
          image: integrationRandomFiguresFirst[getRandomNumber(0, 8)],
          response: "true",
          tipoquestao: "1",
        },
        {
          id: 2,
          image: integrationRandomFiguresSecond[getRandomNumber(0, 8)],
          response: "true",
          tipoquestao: "1",
        },
      ],
      {
        id: 1,
        image: errorFigures[getRandomNumber(0, 9)],
        response: "false",
        tipoquestao: "1",
      },
    ],
  ]);
  const [question, setQuestion] = useState([]);
  const [response, setResponse] = useState();

  function registerQuestion(e) {
    console.log(response);
    if (response) {
      setResponses([
        ...responses,
        {
          id: response.id,
          image: response.image,
          response: response.response,
          tipoquestao: response.tipoquestao,
        },
      ]);
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
                  alt="123"
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
                    onChange={() => setResponse({ ...image, slide: i === 0 ? 'first' : 'second' })}
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
              Pr??xima
            </button>
          </div>
        </div>
      </>
    );
  }

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

  return (
    <>
      <div
        className="d-flex justify-content-center p-4"
        style={{ height: "100vh" }}
      >
        <div className="text-center">
          <h5>Qual imagem voc?? viu nos slides ?</h5>
          <div className="mt-5" style={{ width: "100%" }}>
            {generateQuestion()}
          </div>
        </div>
      </div>
    </>
  );
}

export default Step18;
