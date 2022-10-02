import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import React from "react";
import Menu from "./Menu";
import Produto from "./Produto";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Button from 'react-bootstrap/Button';


const App = () => {
  /**
   * END POINTS
   *
   * GET
   * localhost:8080/produtos
   * localhost:8080/produtos/{nome}
   * localhost:8080/produtos/produto/{id}
   * localhost:8080/produtos/categoria/{categoria}
   *
   * POST
   * localhost:8080/produtos/cadastrar
   *
   * PUT
   * localhost:8080/produtos/atualizar
   *
   * DELETE
   * localhost:8080/produtos/remover
   */

  const [dados, setDados] = React.useState(null)
  const [produto, setProduto] = React.useState(null)

  function atualizarDadosProdutos() {
    fetch("http://localhost:8080/produtos")
      .then((r) => r.json())
      .then((r) => { setDados(r); })
  }
  React.useEffect(() => {
    atualizarDadosProdutos();
  }, []);

  return (
    <div style={{
      minHeight: "100vh"
    }}
      className="d-flex p-4 justify-content-center align-items-center bg-dark"
    >
      <div

        style={{ minHeight: "80vh", maxWidth: "700px", backgroundColor: "#fff" }}
        className="shadow d-flex flex-column p-4 rounded-3 justify-content-center align-items-center container-fluid"
      >
        <h1>Cadastro de produtos</h1>
        <Menu setProduto={setProduto} />

        {dados ? <Container fluid className="">
          <Row className=" justify-content-n-center">
            {dados.map((produto) => {
              return (<Col key={produto.id} className="mb-4">
                <Produto dados={produto} />
              </Col>
              )
            })}
            {produto && <Col><Produto dados={produto} /></Col>}
          </Row>
        </Container> :
          <div className="d-flex align-items-center" style={{ height: "60vh" }}>
            <h3>nenhum produto adicionado...</h3>
          </div>
        }
      </div>
    </div >
  );
};

export default App;
