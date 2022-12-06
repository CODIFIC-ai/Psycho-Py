function Step1(props) {
  return (
    <>
      <div
        style={{
          height: "100vh",
          color: "black",
        }}
        className="d-flex flex-column justify-content-center align-items-center"
      >
        <h5 className="mb-3">Fase de Teste</h5>
        <p
          className="text-center fz-sm-5"
          style={{
            width: "50vw",
            color: "tomato",
          }}
        >
          POR GENTILEZA, LEIA COM MUITA ATENÇÃO AS INSTRUÇÕES A SEGUIR.
        </p>
        <div className="mt-4">
          <button
            type="button"
            className="btn btn-outline-secondary btn-lg px-4 mt-2"
            onClick={props.fNextStep}
          >
            Continuar {">"}
          </button>
        </div>
      </div>
    </>
  );
}

export default Step1;
