import Contexto from "../components/contexto/Contexto";
import { ContextoProvider } from "../providers/contexto";

function Context() {
  return (
    <>
      <ContextoProvider>
        <Contexto />
      </ContextoProvider>
    </>
  );
}

export default Context;
