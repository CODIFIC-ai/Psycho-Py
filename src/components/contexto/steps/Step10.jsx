function Step10(props) {
  return (
    <div
      style={{
        height: "100vh",
        color: "black",
        textAlign: "center",
      }}
      className="d-flex flex-column justify-content-center align-items-center m-3"
    >
      <div className="d-flex flex-column justify-content-center align-items-center">
        <h5 style={{ color: "red" }}>APLICAÇÃO DA TAREFA</h5>
      </div>
      <div>
        <div className="text-center">
          <p>
            A PARTIR DESTE MOMENTO INICIAREMOS A APLICAÇÃO DA TAREFA, AS REGRAS
            CONTINUAM AS MESMAS DO EXERCÍCIO ANTERIOR. MAS IREMOS RECORDAR-LÁ:
          </p>
        </div>
        <div>
          <p>
            - DOIS SLIDES SERÃO APRESENTADOS PARA ESTUDO, DURANTE 30 SEGUNDOS,
            COM INTERVALO DE 1 MINUTO ENTRE ELES;
          </p>
          <p>
            - CADA SLIDE CONTÉM AS MESMAS 9 FIGURAS. CONTUDO, ESTARÃO ESPALHADAS
            DE FORMA DIFERENTE PELOS CENÁRIOS QUE SERÃO DISTINTOS;
          </p>
          <p>
            - EM SEGUIDA RESPONDA A PÁGINA DE RESPOSTAS, QUE CONTÉM 9 QUESTÕES,
            NO TEMPO LIMITE DE 5 MINUTOS;
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
      <div className="mt-1">
        <button
          type="button"
          id="first"
          className="btn btn-outline-secondary btn-lg"
          onClick={props.fNextStep}
        >
          Começar
        </button>
      </div>
    </div>
  );
}

export default Step10;
