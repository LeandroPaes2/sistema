import { Button } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useState } from 'react';

export default function FormCadEntregadores(props) {
    const [entregador, setEntregador] = useState(props.entregadorSelecionado);
    const [formValidado, setFormValidado] = useState(false);

    function manipularSubmissao(evento) {
        const form = evento.currentTarget;
        if (form.checkValidity()) {
            if (!props.modoEdicao) {
                props.setListaDeEntregadores([...props.listaDeEntregadores, entregador]);
                props.setExibirTabela(true);
            } else {
                props.setListaDeEntregadores(props.listaDeEntregadores.map((item) => {
                    if (item.codigo !== entregador.codigo)
                        return item;
                    else
                        return entregador;
                }));

                props.setModoEdicao(false);
                props.setEntregadorSelecionado({
                    codigo: 0,
                    nome: "",
                    cpf: "",
                    dataNascimento: "",
                    fotoPerfil: "",
                    email: "",
                    endereco: "",
                    cnh: ""
                });
                props.setExibirTabela(true);
            }
        } else {
            setFormValidado(true);
        }
        evento.preventDefault();
        evento.stopPropagation();
    }

    function manipularMudanca(evento) {
        const elemento = evento.target.name;
        const valor = evento.target.value;
        setEntregador({ ...entregador, [elemento]: valor });
    }

    return (
        <Form noValidate validated={formValidado} onSubmit={manipularSubmissao}>
            <Row className="mb-4">
                <Form.Group as={Col} md="4">
                    <Form.Label>Código</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        id="codigo"
                        name="codigo"
                        value={entregador.codigo}
                        onChange={manipularMudanca}
                        disabled={props.modoEdicao}
                    />
                    
                    <Form.Control.Feedback type="invalid">Por favor, informe o código do entregador!</Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Row className="mb-4">
                <Form.Group as={Col} md="4">
                    <Form.Label>Nome</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        id="nome"
                        name="nome"
                        value={entregador.nome}
                        onChange={manipularMudanca}
                    />
                    <Form.Control.Feedback type="invalid">Por favor, informe o nome do entregador!</Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Row className="mb-4">
                <Form.Group as={Col} md="4">
                    <Form.Label>CPF</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        id="cpf"
                        name="cpf"
                        value={entregador.cpf}
                        onChange={manipularMudanca}
                    />
                    <Form.Control.Feedback type="invalid">Por favor, informe o CPF do entregador!</Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Row className="mb-4">
                <Form.Group as={Col} md="4">
                    <Form.Label>Data de Nascimento</Form.Label>
                    <Form.Control
                        required
                        type="date"
                        id="dataNascimento"
                        name="dataNascimento"
                        value={entregador.dataNascimento}
                        onChange={manipularMudanca}
                    />
                    <Form.Control.Feedback type="invalid">Por favor, informe a data de nascimento do entregador!</Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Row className="mb-4">
                <Form.Group as={Col} md="4">
                    <Form.Label>Foto de Perfil</Form.Label>
                    <Form.Control
                        required
                        type="file"
                        id="fotoPerfil"
                        name="fotoPerfil"
                        onChange={(e) => setEntregador({ ...entregador, fotoPerfil: e.target.files[0] })}
                    />
                    <Form.Control.Feedback type="invalid">Por favor, escolha uma foto de perfil!</Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Row className="mb-4">
                <Form.Group as={Col} md="4">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        required
                        type="email"
                        id="email"
                        name="email"
                        value={entregador.email}
                        onChange={manipularMudanca}
                    />
                    <Form.Control.Feedback type="invalid">Por favor, informe o email do entregador!</Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Row className="mb-4">
                <Form.Group as={Col} md="4">
                    <Form.Label>Endereço</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        id="endereco"
                        name="endereco"
                        value={entregador.endereco}
                        onChange={manipularMudanca}
                    />
                    <Form.Control.Feedback type="invalid">Por favor, informe o endereço do entregador!</Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Row className="mb-4">
                <Form.Group as={Col} md="4">
                    <Form.Label>CNH</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        id="cnh"
                        name="cnh"
                        value={entregador.cnh}
                        onChange={manipularMudanca}
                    />
                    <Form.Control.Feedback type="invalid">Por favor, informe o número da CNH do entregador!</Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Row className='mt-2 mb-2'>
                <Col md={1}>
                    <Button type="submit">
                        {props.modoEdicao ? "Atualizar" : "Confirmar"}
                    </Button>
                </Col>
                <Col md={{ offset: 1 }}>
                    <Button onClick={() => {props.setExibirTabela(true)}}>Voltar</Button>
                </Col>
            </Row>
        </Form>
    );
}
