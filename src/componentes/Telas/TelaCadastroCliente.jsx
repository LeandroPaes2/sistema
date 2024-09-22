import { Alert } from "react-bootstrap";
import FormCadClientes from "./Formularios/FormCadClientes";
import Pagina from "../layouts/Pagina";
import { useState } from "react";
import TabelaClientes from "./Tabelas/TabelaClientes";

export default function TelaCadastroCliente() {
    const [listaDeClientes, setListaDeClientes] = useState([]);
    const [exibirTabela, setExibirTabela] = useState(true);
    const [clienteSelecionado, setClienteSelecionado] = useState(null);
    const [modoEdicao, setModoEdicao] = useState(false);

    return (
        <div>
            <Pagina>
                <Alert className="mt-2 mb-2 text-center" variant="success">
                    <h2>Cadastro de Cliente</h2>
                </Alert>
                {
                    exibirTabela ?
                        <TabelaClientes 
                            listaDeClientes={listaDeClientes}
                            setListaDeClientes={setListaDeClientes}
                            setExibirTabela={setExibirTabela}
                            setClienteSelecionado={setClienteSelecionado}
                            setModoEdicao={setModoEdicao}
                        /> :
                        <FormCadClientes
                            listaDeClientes={listaDeClientes}
                            setListaDeClientes={setListaDeClientes}
                            setExibirTabela={setExibirTabela}
                            clienteSelecionado={clienteSelecionado}
                            modoEdicao={modoEdicao}
                            setModoEdicao={setModoEdicao}
                        />
                }
            </Pagina>
        </div>
    );
}
