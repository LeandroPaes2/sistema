import TelaCadastroProduto from "./componentes/Telas/TelaCadastroProduto";
import TelaCadastroCategoria from "./componentes/Telas/TelaCadastroCategoria";
import TelaCadastroFornecedor from "./componentes/Telas/TelaCadastroFornecedores";
import TelaCadastroCliente from "./componentes/Telas/TelaCadastroCliente";
import TelaCadastroUsuario from "./componentes/Telas/TelaCadastroUsuario";
import TelaCadastroEntregador from "./componentes/Telas/TelaCadastroEntregador";
import TelaMenu from "./componentes/Telas/TelaMenu";
import Tela404 from "./componentes/Telas/Tela404";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        { //A ordem das rotas é importante 
        }
        <Routes>
          <Route path="/cliente" element={<TelaCadastroCliente/>}/>
          <Route path="/fornecedor" element={<TelaCadastroFornecedor />}/>
          <Route path="/produto" element={<TelaCadastroProduto />} />
          <Route path="/usuario" element={<TelaCadastroUsuario/>}/>
          <Route path="/entregador" element={<TelaCadastroEntregador/>}/>
          <Route path="/categoria" element={<TelaCadastroCategoria />} />
          <Route path="/" element={<TelaMenu />} />
          <Route path="*" element={<Tela404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
