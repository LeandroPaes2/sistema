import { Alert } from "react-bootstrap";
import FormCadUsuario from "./Formularios/FormCadUsuario";
import Pagina from "../layouts/Pagina";
import { useState } from "react";
import TabelaUsuarios from "./Tabelas/TabelaUsuarios";
import { usuarios } from "../../dados/mockUsuario"

export default function TelaCadastroUsuario(props) {
    const [exibirTabela, setExibirTabela] = useState(true);
    const [listaDeUsuarios, setListaDeUsuarios] = useState(usuarios);
    const [modoEdicao, setModoEdicao] = useState(false);
    const [usuarioSelecionado, setUsuarioSelecionado] = useState({
        codigo: 0,
        nome: "",
        email: "",
        senha: "",
        telefone: ""
    });
    

    return (
        <div>
            <Pagina>
                <Alert className="mt-2 mb-2 text-center" variant="success">
                    <h2>Cadastro de Usuario</h2>
                </Alert>
                {
                    exibirTabela ?
                        <TabelaUsuarios 
                            listaDeUsuarios={listaDeUsuarios}
                            setListaDeUsuarios={setListaDeUsuarios}
                            setExibirTabela={setExibirTabela}
                            setModoEdicao={setModoEdicao}
                            setUsuarioSelecionado={setUsuarioSelecionado}
                            
                        /> :
                        <FormCadUsuario
                            listaDeUsuarios={listaDeUsuarios}
                            setListaDeUsuarios={setListaDeUsuarios}
                            setExibirTabela={setExibirTabela}
                            usuarioSelecionado={usuarioSelecionado}
                            modoEdicao={modoEdicao}
                            setModoEdicao={setModoEdicao}
                        />
                }
            </Pagina>
        </div>
    );
}
