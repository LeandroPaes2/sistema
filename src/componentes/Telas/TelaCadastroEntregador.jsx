import { Alert } from "react-bootstrap";
import FormCadEntregadores from "./Formularios/FormCadEntregadores";
import Pagina from "../layouts/Pagina";
import { useState } from "react";
import TabelaEntregadores from "./Tabelas/TabelaEntregadores";
import { entregadores } from "../../dados/mockEntregadores";

export default function TelaCadastroEntregador(props) {
    const [exibirTabela, setExibirTabela] = useState(true);
    const [listaDeEntregadores, setListaDeEntregadores] = useState(entregadores);
    const [modoEdicao, setModoEdicao] = useState(false);
    const [entregadorSelecionado, setEntregadorSelecionado] = useState({
        codigo: 0,
        nome: "",
        cpf: "",
        dataNascimento: "",
        fotoPerfil: "",
        email: "",
        endereco: "",
        cnh: ""
    });

    return (
        <div>
            <Pagina>
                <Alert className="mt-2 mb-2 text-center" variant="success">
                    <h2>Cadastro de Entregador</h2>
                </Alert>
                {
                    exibirTabela ?
                        <TabelaEntregadores
                            listaDeEntregadores={listaDeEntregadores}
                            setListaDeEntregadores={setListaDeEntregadores}
                            setExibirTabela={setExibirTabela}
                            setModoEdicao={setModoEdicao}
                            setEntregadorSelecionado={setEntregadorSelecionado}
                        /> :
                        <FormCadEntregadores
                            listaDeEntregadores={listaDeEntregadores}
                            setListaDeEntregadores={setListaDeEntregadores}
                            setExibirTabela={setExibirTabela}
                            entregadorSelecionado={entregadorSelecionado}
                            modoEdicao={modoEdicao}
                            setModoEdicao={setModoEdicao}
                        />
                }
            </Pagina>
        </div>
    );
}
