function Step2(props) {
  return (
    <>
      <div
        style={{
          height: "100vh",
          color: "black",
        }}
        className="d-flex flex-column justify-content-center align-items-center"
      >
        <p
          className="text-center"
          style={{
            width: "50vw",
          }}
        >
          PARA REALIZAR A TAREFA SEGUINTE, PROCURE UM LUGAR SEGURO E CONFORTÁVEL
          PARA PROSSEGUIR. POIS, NÃO SERÁ POSSÍVEL REINICIAR OU REFAZER A
          TAREFA.
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

export default Step2;
