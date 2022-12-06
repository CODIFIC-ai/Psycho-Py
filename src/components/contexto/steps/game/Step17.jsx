import getRandomNumber from "../../../../utils/getRandomNumber";
import { useContexto } from "../../../../providers/contexto";
import { useEffect, useState } from "react";

import backImageFirst from "../../../../assets/contexto/fundo5mini.png";
import backImageSecond from "../../../../assets/contexto/fundo4mini.jpg";

function Step17(props) {
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
    //     Background: backImageFirst,
    //     incorrectBackground: backImageSecond,
    //     tipoquestao: "3",
    //   },
    //   {
    //     id: 2,
    //     image: integrationRandomFiguresSecond[getRandomNumber(0, 8)],
    //     slide: "second",
    //     Background: backImageSecond,
    //     incorrectBackground: backImageFirst,
    //     tipoquestao: "3",
    //   },
    // ],
  ]);
  if (!images.length) {
    let first = getRandomNumber(0, 8);
    let second = getRandomNumber(0, 8);
    while (
      integrationRandomFiguresFirst[first].positions.top ===
      integrationRandomFiguresSecond[first].positions.top
    ) {
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
          Background: backImageFirst,
          incorrectBackground: backImageSecond,
          tipoquestao: "3",
        },
        {
          id: 2,
          image: integrationRandomFiguresSecond[second],
          slide: "second",
          background: backImageSecond,
          incorrectBackground: backImageFirst,
          tipoquestao: "3",
        },
      ],
    ]);
  }
  const [question, setQuestion] = useState([]);

  useEffect(() => {
    setTitle(
      "Sobre qual imagem de fundo você viu este símbolo nesse determinado local ?"
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
          // Background: question[0].Background,
          // incorrectBackground: question[0].incorrectBackground,
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
          // Background: question[0].Background,
          // incorrectBackground: question[0].incorrectBackground,
          tipoquestao: question[0].tipoquestao,
          response: "false",
        },
      ]);
    }
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
    <div style={{ height: "100vh", position: "relative" }}>
      {generateQuestion()}
      <div className="d-flex justify-content-center align-items-center">
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
            style={{ maxWidth: "200px" }}
          >
            <img
              id="first"
              src={backImageFirst}
              style={
                window.screen.width <= 768
                  ? {
                      width: "40px",
                      height: "40px",
                    }
                  : window.screen.width <= 992
                  ? {
                      width: "50px",
                      height: "50px",
                    }
                  : window.screen.width <= 1400
                  ? {
                      width: "60px",
                      height: "60px",
                    }
                  : {
                      width: "70px",
                      height: "70px",
                    }
              }
              alt=""
            />
          </button>
          <button
            type="button"
            id="second"
            className="btn btn-outline-secondary btn-lg mx-1"
            onClick={registerQuestion}
            style={{ maxWidth: "200px" }}
          >
            <img
              id="second"
              src={backImageSecond}
              style={
                window.screen.width <= 768
                  ? {
                      width: "40px",
                      height: "40px",
                    }
                  : window.screen.width <= 992
                  ? {
                      width: "50px",
                      height: "50px",
                    }
                  : window.screen.width <= 1400
                  ? {
                      width: "60px",
                      height: "60px",
                    }
                  : {
                      width: "70px",
                      height: "70px",
                    }
              }
              alt=""
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Step17;
