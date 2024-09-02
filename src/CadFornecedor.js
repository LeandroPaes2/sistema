import Pagina from "./componentes/layouts/Pagina";
import TelaFornecedor from "./componentes/layouts/TelaFoenecedor";
import { render } from "@testing-library/react";



function CadFornecedor() {

    render(
        <Pagina>
            <TelaFornecedor/>
        </Pagina>

        
    );

}



export default CadFornecedor;