import { Route, Routes } from "react-router-dom";

import Login from "./Login"
import Wwwhen from "./Wwwhen"
import Context from "./Context"
import Header from "../components/Header"

const App = () => (
    <Routes>
        <Route path="/" element={<Login />} />

        <Route path="experiment" element={<Header />}>
            <Route path="wwwhen" element={<Wwwhen />} />
            <Route path="contexto" element={<Context />} />
        </Route>

        {/* <Route path="*" element={<h1>Página não existe!</h1>} /> */}
    </Routes>

)
export default App;