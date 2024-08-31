import Pagina from "./componentes/layouts/Pagina";
function App() {
  return (
    <div className="App">
      <Pagina>
        <h1>Esta é a página de cadastro de cliente</h1>
      </Pagina>

      <Pagina>
        <h1>Esta é a página de cadastro de produto</h1>
      </Pagina>

      <Pagina>
        <h1>Esta é a página de cadastro de fornecedores</h1>
      </Pagina>
    </div>
  );
}

export default App;
