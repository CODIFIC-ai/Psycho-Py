import { useEffect, useState } from "react";
import Instruction from "../components/Wwwhen/Instruction";
import IntegrationBackground from "../components/Wwwhen/IntegrationBackground";
import Integration from "../components/Wwwhen/Integration";
import What from "../components/Wwwhen/What";
import Where from "../components/Wwwhen/Where";
import { phase } from "../providers/listObject";
import shuffle from "../utils/shuffle";
import When from "../components/Wwwhen/When";
import BasicTable from "../components/BasicTable";

function Wwwhen() {
  const [stepIntriduction, setStepIntriduction] = useState(0);
  const [stepProgress, setStepProgress] = useState(0);
  const [phaseShuffle, setPhaseShuffle] = useState([]);

  useEffect(() => {
    setPhaseShuffle(shuffle(phase));
  }, []);

  // CONTROLADOR DE DO PASSO A PASSO
  function intructionStep() {
    // setStepProgress(stepProgress + 20)
    console.log("stepIntriduction ", stepIntriduction);
    switch (stepIntriduction) {
      case 0:
        return (
          <Instruction handleStepStado={handleStepStado}>
            <h3 className="fw-normal">FASE DE INTEGRAÇÃO “WWWHEN”</h3>
            <p className="text-start">
              POR GENTILEZA, LEIA COM MUITA ATENÇÃO AS INSTRUÇÕES A SEGUIR.
            </p>
          </Instruction>
        );
      case 1:
        return (
          <Instruction handleStepStado={handleStepStado}>
            <p className="text-start">
              PARA REALIZAR A TAREFA SEGUINTE, PROCURE UM LUGAR SEGURO E
              CONFORTÁVEL PARA PROSSEGUIR.{" "}
            </p>
            <p className="text-start">
              POIS, NÃO SERÁ POSSÍVEL REINICIAR OU REFAZER A TAREFA.
            </p>
          </Instruction>
        );
      case 2:
        return (
          <Instruction handleStepStado={handleStepStado}>
            <h3 className="fw-normal">FASE DE INTRODUÇÃO</h3>
            <p className="text-start">
              ESTA É A FASE DE INTRODUÇÃO, PARA FAMILIARIZAÇÃO COM A FERRAMENTA.
            </p>
            <p className="text-start">
              O OBJETIVO DESTA TAREFA É VERIFICAR O DESEMPENHO DA MEMÓRIA
              EPISÓDICA.
            </p>
            <ul className="list-group ">
              <li className="list-group-item">
                NÃO ESCONDA MAIS DE UM OBJETO NO MESMO LUGAR;
              </li>
              <li className="list-group-item">
                EVITE GUARDAR OS OBJETOS NOS CANTOS DA TELA;
              </li>
            </ul>
          </Instruction>
        );
      // FASE DE INTEGRAÇÃO
      case 3:
        return (
          <>
            {/* FASE DE INTRODUÇÃO */}
            <IntegrationBackground bg={1} />
            <Integration
              qtdObject={["Lixo", "Barraca"]}
              handleStepStado={handleStepStado}
              phase="INTRODUÇÃO"
              bg={1}
            />
          </>
        );
      case 4:
        return <What handleStepStado={handleStepStado} phase="INTRODUÇÃO" />;
      case 5:
        return (
          <>
            <IntegrationBackground bg={1} />
            <When
              qtdObject={["Lixo", "Barraca"]}
              handleStepStado={handleStepStado}
              phase={"INTRODUÇÃO"}
            />
          </>
        );
      case 6:
        return <Where handleStepStado={handleStepStado} phase="INTRODUÇÃO" />;
      case 7:
        return (
          <Instruction handleStepStado={handleStepStado}>
            <h3 className="fw-normal">ATENÇÃO</h3>
            <p className="text-start">
              ESTE É O MOMENTO APLICAÇÃO DA TAREFA “WWWHEN”.
            </p>
            <p className="text-start">
              A PARTIR DE AGORA SUAS RESPOSTAS SERÃO COLETADAS E UTILIZADAS PARA
              VERIFICAR O DESEMPENHO DE SUA MEMÓRIA EPISÓDICA.
            </p>
          </Instruction>
        );
      case 8:
        return (
          <Instruction handleStepStado={handleStepStado}>
            <h3 className="fw-normal">INSTRUÇÕES</h3>
            <ul className="list-group ">
              <li className="list-group-item">
                VOCÊ TERÁ UM TEMPO MÁXIMO DE 30 SEGUNDOS PARA ESCONDER CADA
                OBJETO;
              </li>
              <li className="list-group-item">
                NÃO ESCONDA MAIS DE UM OBJETO NO MESMO LUGAR;
              </li>
              <li className="list-group-item">
                EVITE GUARDAR OS OBJETOS NOS CANTOS DA TELA;
              </li>
              <li className="list-group-item">
                APÓS INICIADA A TAREFA NÃO PODERÁ SER REINICIADA OU REFEITA;
              </li>
            </ul>
          </Instruction>
        );
      // FASE 01
      case 9:
        return (
          <>
            <IntegrationBackground bg={1} />
            <Integration
              qtdObject={phaseShuffle[0]?.arrObj}
              handleStepStado={handleStepStado}
              phase={phaseShuffle[0]?.type}
            />
          </>
        );
      case 10:
        return (
          <What
            handleStepStado={handleStepStado}
            phase={phaseShuffle[0]?.type}
          />
        );
      case 11:
        return (
          <>
            <IntegrationBackground bg={1} />
            <When
              qtdObject={phaseShuffle[0]?.arrObj}
              handleStepStado={handleStepStado}
              phase={phaseShuffle[0]?.type}
            />
          </>
        );
      case 12:
        return (
          <Where
            handleStepStado={handleStepStado}
            phase={phaseShuffle[0]?.type}
          />
        );
      // FASE 02
      case 13:
        return (
          <>
            <IntegrationBackground bg={2} />
            <Integration
              qtdObject={phaseShuffle[1]?.arrObj}
              handleStepStado={handleStepStado}
              phase={phaseShuffle[1]?.type}
            />
          </>
        );
      case 14:
        return (
          <What
            handleStepStado={handleStepStado}
            phase={phaseShuffle[1]?.type}
          />
        );
      case 15:
        return (
          <>
            <IntegrationBackground bg={2} />
            <When
              qtdObject={phaseShuffle[1]?.arrObj}
              handleStepStado={handleStepStado}
              phase={phaseShuffle[1]?.type}
            />
          </>
        );
      case 16:
        return (
          <Where
            handleStepStado={handleStepStado}
            phase={phaseShuffle[1]?.type}
          />
        );
      // FASE 03
      case 17:
        return (
          <>
            <IntegrationBackground bg={3} />
            <Integration
              qtdObject={phaseShuffle[2]?.arrObj}
              handleStepStado={handleStepStado}
              phase={phaseShuffle[2]?.type}
            />
          </>
        );
      case 18:
        return (
          <What
            handleStepStado={handleStepStado}
            phase={phaseShuffle[2]?.type}
          />
        );
      case 19:
        return (
          <>
            <IntegrationBackground bg={3} />
            <When
              qtdObject={phaseShuffle[2]?.arrObj}
              handleStepStado={handleStepStado}
              phase={phaseShuffle[2]?.type}
            />
          </>
        );
      case 20:
        return (
          <Where
            handleStepStado={handleStepStado}
            phase={phaseShuffle[2]?.type}
          />
        );
      // FASE 04
      case 21:
        return (
          <>
            <IntegrationBackground bg={4} />
            <Integration
              qtdObject={phaseShuffle[3]?.arrObj}
              handleStepStado={handleStepStado}
              phase={phaseShuffle[3]?.type}
            />
          </>
        );
      case 22:
        return (
          <What
            handleStepStado={handleStepStado}
            phase={phaseShuffle[3]?.type}
          />
        );
      case 23:
        return (
          <>
            <IntegrationBackground bg={4} />
            <When
              qtdObject={phaseShuffle[3]?.arrObj}
              handleStepStado={handleStepStado}
              phase={phaseShuffle[3]?.type}
            />
          </>
        );
      case 24:
        return (
          <Where
            handleStepStado={handleStepStado}
            phase={phaseShuffle[3]?.type}
          />
        );
      // FASE 05
      case 25:
        return (
          <>
            <IntegrationBackground bg={5} />
            <Integration
              qtdObject={phaseShuffle[4]?.arrObj}
              handleStepStado={handleStepStado}
              phase={phaseShuffle[4]?.type}
            />
          </>
        );
      case 26:
        return (
          <What
            handleStepStado={handleStepStado}
            phase={phaseShuffle[4]?.type}
          />
        );
      case 27:
        return (
          <>
            <IntegrationBackground bg={5} />
            <When
              qtdObject={phaseShuffle[4]?.arrObj}
              handleStepStado={handleStepStado}
              phase={phaseShuffle[4]?.type}
            />
          </>
        );
      case 28:
        return (
          <Where
            handleStepStado={handleStepStado}
            phase={phaseShuffle[4]?.type}
          />
        );
      // FASE 06
      case 29:
        return (
          <>
            <IntegrationBackground bg={6} />
            <Integration
              qtdObject={phaseShuffle[5]?.arrObj}
              handleStepStado={handleStepStado}
              phase={phaseShuffle[5]?.type}
            />
          </>
        );
      case 30:
        return (
          <What
            handleStepStado={handleStepStado}
            phase={phaseShuffle[5]?.type}
          />
        );
      case 31:
        return (
          <>
            <IntegrationBackground bg={6} />
            <When
              qtdObject={phaseShuffle[5]?.arrObj}
              handleStepStado={handleStepStado}
              phase={phaseShuffle[5]?.type}
            />
          </>
        );
      case 32:
        return (
          <Where
            handleStepStado={handleStepStado}
            phase={phaseShuffle[5]?.type}
          />
        );
      default:
        return <BasicTable />;
    }
  }

  function handleStepStado() {
    setStepIntriduction(stepIntriduction + 1);
    setStepProgress(stepProgress + 20);
  }

  return (
    <>
      <section className="position-relative overflow-hidden text-center">
        {phaseShuffle.length !== 0 && intructionStep()}
      </section>
    </>
  );
}

export default Wwwhen;
