import { useEffect, useState } from "react";
import { useContexto } from "../../../../providers/contexto";
import getRandomNumber from "../../../../utils/getRandomNumber";

function Step12(props) {
  const {
    integrationRandomFiguresSecond,
    integrationRandomFiguresFirst,
    responses,
    setResponses,
    setTitle,
  } = useContexto();
  const [images, setImages] = useState([
    // [
    //   {
    //     id: 1,
    //     image: integrationRandomFiguresFirst[getRandomNumber(0, 8)],
    //     slide: "first",
    //     tipoquestao: "2",
    //   },
    //   {
    //     id: 2,
    //     image: integrationRandomFiguresSecond[getRandomNumber(0, 8)],
    //     slide: "second",
    //     tipoquestao: "2",
    //   },
    // ],
  ]);
  if (!images.length) {
    let first = getRandomNumber(0, 8);
    let second = getRandomNumber(0, 8);
    while (integrationRandomFiguresFirst[first].positions.top === integrationRandomFiguresSecond[first].positions.top) {
      console.log("mesma posição");
      first = getRandomNumber(0, 8);
      second = getRandomNumber(0, 8);
    }
    console.log("numeros diferentes");
    setImages([
      [
        {
          id: 1,
          image: integrationRandomFiguresFirst[first],
          slide: "first",
          tipoquestao: "2",
        },
        {
          id: 2,
          image: integrationRandomFiguresSecond[second],
          slide: "second",
          tipoquestao: "2",
        },
      ],
    ]);
  }
  const [question, setQuestion] = useState([]);

  useEffect(() => {
    setTitle(
      "Qual slide você viu esse símbolo nessa determinada localização ?"
    );
    setQuestion([images[0][getRandomNumber(0, 2)]]);
  }, []);

  function registerQuestion(e) {
    if (question[0].slide === e.target.id) {
      setResponses([
        ...responses,
        {
          id: question[0].id,
          image: question[0].image,
          slide: question[0].slide,
          tipoquestao: question[0].tipoquestao,
          response: "true",
        },
      ]);
    } else {
      setResponses([
        ...responses,
        {
          id: question[0].id,
          image: question[0].image,
          slide: question[0].slide,
          tipoquestao: question[0].tipoquestao,
          response: "false",
        },
      ]);
    }
    console.log(responses);
    props.fNextStep();
  }

  function generateQuestion() {
    return (
      <>
        {question.length ? (
          <div style={{ position: "relative" }}>
            <img
              id={`${question[0].id}`}
              src={question[0].image.src}
              alt={`desenho`}
              style={
                window.screen.width <= 768
                  ? {
                      width: "60px",
                      height: "60px",
                      position: "fixed",
                      top: question[0].image.positions.top + "px",
                      left: question[0].image.positions.left + "px",
                    }
                  : window.screen.width <= 992
                  ? {
                      width: "70px",
                      height: "70px",
                      position: "fixed",
                      top: question[0].image.positions.top + "px",
                      left: question[0].image.positions.left + "px",
                    }
                  : window.screen.width <= 1400
                  ? {
                      width: "80px",
                      height: "80px",
                      position: "fixed",
                      top: question[0].image.positions.top + "px",
                      left: question[0].image.positions.left + "px",
                    }
                  : {
                      width: "80px",
                      height: "80px",
                      position: "fixed",
                      top: question[0].image.positions.top + "px",
                      left: question[0].image.positions.left + "px",
                    }
              }
            />
          </div>
        ) : (
          ""
        )}
      </>
    );
  }

  return (
    <div>
      <div
        style={{
          height: "100vh",
          position: "relative",
        }}
      >
        {generateQuestion()}
        <div
          style={
            window.screen.width <= 768
              ? {
                  height: "60%",
                }
              : window.screen.width <= 992
              ? {
                  height: "70px",
                }
              : window.screen.width <= 1400
              ? {
                  height: "59%",
                }
              : window.screen.width <= 1700
              ? {
                  height: "45%",
                }
              : {
                  height: "59%",
                }
          }
          className="d-flex flex-column justify-content-between align-items-center text-center"
        >
          <div>
            <h4 className="mt-1"> </h4>
          </div>
          <div
            style={{
              position: "fixed",
              top: "85vh",
            }}
          >
            <button
              type="button"
              id="first"
              className="btn btn-outline-secondary btn-lg mx-1"
              onClick={registerQuestion}
              style={{ maxWidth: "200px", backgroundColor: "white" }}
            >
              1º slide
            </button>
            <button
              type="button"
              id="second"
              className="btn btn-outline-secondary btn-lg mx-1"
              onClick={registerQuestion}
              style={{ maxWidth: "200px", backgroundColor: "white" }}
            >
              2º slide
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Step12;
