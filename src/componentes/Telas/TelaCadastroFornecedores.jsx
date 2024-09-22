import { Alert } from "react-bootstrap";
import FormCadFornecedores from "./Formularios/FormCadFornecedores";
import Pagina from "../layouts/Pagina";
import { useState } from "react";
import TabelaFornecedores from "./Tabelas/TabelaFornecedores";

export default function TelaCadastroFornecedor(){
    const [listaDeFornecedores, setListaDeFornecedores] = useState([]); 
    const [exibirTabela, setExibirTabela] = useState(true);
    const [fornecedorSelecionado, setFornecedorSelecionado] = useState(null); 
    const [modoEdicao, setModoEdicao] = useState(false); 

    return(
        <div>
            <Pagina>
                <Alert className="mt-02 mb-02 success text-center" variant="success">
                    <h2>Cadastro de Fornecedor</h2>
                </Alert>
                {
                    exibirTabela ?
                        <TabelaFornecedores 
                            listaDeFornecedores={listaDeFornecedores} 
                            setListaDeFornecedores={setListaDeFornecedores}
                            setExibirTabela={setExibirTabela} 
                            setFornecedorSelecionado={setFornecedorSelecionado}
                            setModoEdicao={setModoEdicao} 
                        /> :
                        <FormCadFornecedores
                            listaDeFornecedores={listaDeFornecedores} 
                            setListaDeFornecedores={setListaDeFornecedores} 
                            setExibirTabela={setExibirTabela} 
                            fornecedorSelecionado={fornecedorSelecionado} 
                            modoEdicao={modoEdicao} 
                            setModoEdicao={setModoEdicao}
                        />
                }
            </Pagina>
        </div>

    );

}