function Step3(props) {
  return (
    <>
      <div
        style={{
          height: "100vh",
          color: "black",
        }}
        className="d-flex flex-column justify-content-center align-items-center mt-1"
      >
        <h5 className="text-center" style={{ color: "red" }}>
          INTEGRAÇÃO E FAMILIARIZAÇÃO
        </h5>
        <div className="text-center p-4">
          <p>
            ESTA É A FASE DE INTEGRAÇÃO, PARA FAMILIARIZAÇÃO COM A FERRAMENTA.
          </p>
          <p>
            CONSISTE EM UMA TAREFA QUE MEDIRÁ O DESEMPENHO DA MEMÓRIA EPISÓDICA
            BASEADA EM INFORMAÇÕES CONTEXTUAIS E ESPECIAIS.
          </p>
        </div>
        <div>
          <button
            type="button"
            className="btn btn-outline-secondary btn-lg px-4"
            onClick={props.fNextStep}
          >
            Continuar {">"}
          </button>
        </div>
      </div>
    </>
  );
}

export default Step3;
