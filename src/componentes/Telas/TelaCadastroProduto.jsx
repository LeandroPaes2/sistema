import { Alert } from "react-bootstrap";
import FormCadProdutos from "./Formularios/FormCadProduto";
import Pagina from "../layouts/Pagina";
import { useState } from "react";
import TabelaProdutos from "./Tabelas/TabelaProdutos";

export default function TelaCadastroProduto() {
    const [listaDeProdutos, setListaDeProdutos] = useState([]); 
    const [exibirTabela, setExibirTabela] = useState(true);
    const [produtoSelecionado, setProdutoSelecionado] = useState(null); 
    const [modoEdicao, setModoEdicao] = useState(false); 

    return (
        <div>
            <Pagina>
                <Alert className="mt-02 mb-02 success text-center" variant="success">
                    <h2>Cadastro de Produto</h2>
                </Alert>
                {
                    exibirTabela ?
                        <TabelaProdutos 
                            listaDeProdutos={listaDeProdutos} 
                            setListaDeProdutos={setListaDeProdutos}
                            setExibirTabela={setExibirTabela} 
                            setProdutoSelecionado={setProdutoSelecionado}
                            setModoEdicao={setModoEdicao} 
                        /> :
                        <FormCadProdutos 
                            listaDeProdutos={listaDeProdutos} 
                            setListaDeProdutos={setListaDeProdutos} 
                            setExibirTabela={setExibirTabela} 
                            produtoSelecionado={produtoSelecionado} 
                            modoEdicao={modoEdicao} 
                            setModoEdicao={setModoEdicao}
                        />
                }
            </Pagina>
        </div>
    );
}
