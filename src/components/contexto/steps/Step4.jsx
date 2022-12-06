function Step4(props) {
  return (
    <>
      <div
        style={{
          height: "100vh",
          color: "black",
        }}
        className="d-flex flex-column justify-content-center align-items-center p-1"
      >
        <h5 style={{ color: "red" }}>Como Funciona</h5>
        <div className="text-center">
          <div>
            <p>
              - DOIS SLIDES SERÃO APRESENTADOS PARA ESTUDO, DURANTE 30 SEGUNDOS,
              COM INTERVALO DE 1 MINUTO ENTRE ELES;
            </p>
            <p>
              - CADA SLIDE CONTÉM AS MESMAS 9 FIGURAS. CONTUDO, ESTARÃO
              ESPALHADAS DE FORMA DIFERENTE PELOS CENÁRIOS QUE SERÃO DISTINTOS;
            </p>
            <p>
              - EM SEGUIDA RESPONDA A PÁGINA DE RESPOSTAS, QUE CONTÉM 9
              QUESTÕES, NO TEMPO LIMITE DE 5 MINUTOS;
            </p>
            <p>
              - QUANDO OS TEMPOS SE ESGOTAREM, NÃO SERÁ POSSÍVEL RETORNAR AO
              PROCESSO ANTERIOR;
            </p>
            <p>
              - APÓS INICIADO, NÃO SERÁ POSSÍVEL RETORNAR OU REFAZER A TAREFA;
            </p>
          </div>
        </div>
        <div>
          <button
            type="button"
            className="btn btn-outline-secondary btn-lg px-4"
            onClick={props.fNextStep}
          >
            Começar
          </button>
        </div>
      </div>
    </>
  );
}

export default Step4;
