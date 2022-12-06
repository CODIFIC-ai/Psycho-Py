import axios from "axios";
import React, { useState } from "react";
import XLSX from "xlsx";
import qs from 'qs'

import desenho1 from "../assets/contexto/desenho1.png";
import desenho2 from "../assets/contexto/desenho2.png";
import desenho3 from "../assets/contexto/desenho3.png";
import desenho4 from "../assets/contexto/desenho4.png";
import desenho5 from "../assets/contexto/desenho5.png";
import desenho6 from "../assets/contexto/desenho6.png";
import desenho7 from "../assets/contexto/desenho7.png";
import desenho8 from "../assets/contexto/desenho8.png";

import erro1 from "../assets/contexto/errors/error1.png";
import erro2 from "../assets/contexto/errors/error2.png";
import erro3 from "../assets/contexto/errors/error3.png";
import erro4 from "../assets/contexto/errors/error4.png";
import erro5 from "../assets/contexto/errors/error5.png";
import erro6 from "../assets/contexto/errors/error6.png";
import erro7 from "../assets/contexto/errors/error7.png";
import erro8 from "../assets/contexto/errors/error8.png";
import erro9 from "../assets/contexto/errors/error9.png";

export const ContextoContext = React.createContext({});

export const ContextoProvider = (props) => {
  const [title, setTitle] = useState();
  const [figures, setFigures] = useState([
    {
      id: 1,
      src: desenho1,
      x: "35px",
      y: "80px",
      positionsRandom: {},
      type: 'Imagem1'
    },
    {
      id: 2,
      src: desenho2,
      x: "100px",
      y: "30px",
      positionsRandom: {},
      type: 'Imagem2'
    },
    {
      id: 3,
      src: desenho3,
      x: "150px",
      y: "20px",
      positionsRandom: {},
      type: 'Imagem3'
    },
    {
      id: 4,
      src: desenho4,
      x: "130px",
      y: "200px",
      positionsRandom: {},
      type: 'Imagem4'
    },
    {
      id: 5,
      src: desenho5,
      x: "20px",
      y: "400px",
      positionsRandom: {},
      type: 'Imagem5'
    },
    {
      id: 6,
      src: desenho6,
      x: "-130px",
      y: "250px",
      positionsRandom: {},
      type: 'Imagem6'
    },
    {
      id: 7,
      src: desenho7,
      x: "30px",
      y: "200px",
      positionsRandom: {},
      type: 'Imagem7'
    },
    {
      id: 8,
      src: desenho8,
      x: "30px",
      y: "400px",
      positionsRandom: {},
      type: 'Imagem8'
    },
  ]);

  const [errorFigures, setErrorFigures] = useState([
    {
      id: 1,
      src: erro1,
    },
    {
      id: 2,
      src: erro2,
    },
    {
      id: 3,
      src: erro3,
    },
    {
      id: 4,
      src: erro4,
    },
    {
      id: 5,
      src: erro5,
    },
    {
      id: 6,
      src: erro6,
    },
    {
      id: 7,
      src: erro7,
    },
    {
      id: 8,
      src: erro8,
    },
    {
      id: 9,
      src: erro9,
    },
  ]);

  const [responses, setResponses] = useState([]);
  const [isFirst, setIsFirst] = useState(true);

  const [integrationRandomFiguresFirst, setIntegrationRandomFiguresFirst] =
    useState([]);
  const [integrationRandomFiguresSecond, setIntegrationRandomFiguresSecond] =
    useState([]);

  const createElementFromHTML = (htmlString) => {
    var div = document.createElement("div");
    div.innerHTML = htmlString.trim();
    return div.firstChild;
  };

  const generateExcel = async () => {
    const wb = XLSX.utils.book_new();
    const paciente = JSON.parse(localStorage.getItem("paciente"));

    wb.Props = {
      Title: `Contexto-${paciente.name}`,
      Author: "Psycho",
    };

    wb.SheetNames.push(`Contexto-${paciente.name}`);
    let linhas = "";
    let resultados = "";

    responses.forEach((item, i) => {
      linhas += `
        <tr>
          <td>${item.tipoquestao}</td>
          <td>${item.response === "true" ? "Certo" : "Errado"}</td>
          <td>${item.slide === "first" ? "Primeira" : "Segunda"}</td>
        </tr>
      `;
    });

    resultados = `
    <table id="xport">
      <tr>
        <td>Nº: </td>
        <td>Nome: </td>
        <td>Email: </td>
      </tr>
      <tr>
        <td>${paciente.numero}</td>    
        <td>${paciente.name}</td>
        <td>${paciente.email}</td>
      </tr>
      <tr>
        <td>Tipo Questão: </td>
        <td>Resposta: </td>
        <td>Alternativa Escolhida: </td>
      </tr>
      ${linhas}
    </table>
    `;

    const ws = XLSX.utils.table_to_sheet(createElementFromHTML(resultados));
    wb.Sheets[`Contexto-${paciente.name}`] = ws;

    // Envio do arquivo excel
    const wbBase64 = XLSX.write(wb, { bookType: "xlsx", type: "base64" });
    const data = {
      file: wbBase64,
      paciente,
      experimento: "Contexto"
    }
    axios.post("https://psycho-api-production.up.railway.app/send-email", qs.stringify(data));
  };

  return (
    <ContextoContext.Provider
      value={{
        figures,
        setFigures,
        integrationRandomFiguresFirst,
        setIntegrationRandomFiguresFirst,
        integrationRandomFiguresSecond,
        setIntegrationRandomFiguresSecond,
        errorFigures,
        setErrorFigures,
        responses,
        setResponses,
        title,
        setTitle,
        generateExcel,
        isFirst,
        setIsFirst
      }}
    >
      {props.children}
    </ContextoContext.Provider>
  );
};

export const useContexto = () => React.useContext(ContextoContext);
