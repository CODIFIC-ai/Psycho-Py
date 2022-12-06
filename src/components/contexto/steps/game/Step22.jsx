import { useEffect } from "react";
import { useContexto } from "../../../../providers/contexto";
import { useState } from "react";

function Step22(props) {
  const { generateExcel, isFirst } = useContexto();
  const [sendEmail, setSendEmail] = useState(!isFirst ? true : false);

  useEffect(() => {
    if (sendEmail) {
      getExcel();
    }
  }, []);

  const getExcel = () => {
    generateExcel();
  };

  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <div>Fim, Obrigado !</div>
      <br />
      {isFirst ? (
        <button
          type="button"
          className="btn btn-outline-secondary btn-lg px-4 mt-2"
          onClick={props.fTryAgain}
        >
          Refazer Experimento
        </button>
      ) : (
        ""
      )}
    </div>
  );
}

export default Step22;
