import React from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

const FormularioAlteracaoProduto = ({ produto, handleClose }) => {
  const [nome, setNome] = React.useState(produto.nome);
  const [categoria, setCategoria] = React.useState(produto.categoria);
  const [imagem, setImagem] = React.useState(produto.imagem);
  const [descricao, setDescricao] = React.useState(produto.descricao);
  const [validacao, setValidacao] = React.useState(false);

  React.useEffect(() => {
    if (nome === "" || categoria === "" || imagem === "" || descricao === "") {
      setValidacao(true);
    } else {
      setValidacao(false);
    }
  }, [nome, categoria, imagem, descricao]);

  return (
    <Row className="g-2">
      <Form.Group className="mb-3">
        <Form.Label>Nome do produto</Form.Label>
        <Form.Control
          required
          type="text"
          placeholder="Ex: Notebook Samsung"
          value={nome}
          onChange={({ target }) => {
            setNome(target.value);
          }}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Categoria</Form.Label>
        <Form.Select
          required
          value={categoria}
          onChange={({ target }) => setCategoria(target.value)}
        >
          <option value="default" disabled>
            Selecione uma categoria
          </option>
          <option value="Celulares e Smartphones">
            Celulares e Smartphones
          </option>
          <option value="Computadores e Notebooks">
            Computadores e Notebooks
          </option>
          <option value="Moda">Moda</option>
          <option value="Saúde e Qualidade de vida">
            Saúde e Qualidade de vida
          </option>
          <option value="Instrumentos musicais">Instrumentos musicais</option>
          <option value="Eletrônicos">Eletrônicos</option>
          <option value="Outro">Outro</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Imagem</Form.Label>
        <Form.Control
          required
          type="text"
          placeholder="Insira a URL da imagem"
          value={imagem}
          onChange={({ target }) => {
            setImagem(target.value);
          }}
        />
      </Form.Group>
      <Form.Label>Descrição</Form.Label>
      <Form.Control
        required
        as="textarea"
        rows={3}
        maxLength={250}
        placeholder="Máximo de 250 caracteres"
        value={descricao}
        onChange={({ target }) => {
          setDescricao(target.value);
        }}
      />

      <Button
        onClick={(e) => {
          e.preventDefault();
          handleClose(true);

          fetch("http://localhost:8080/produtos/atualizar", {
            method: "PUT",
            body: JSON.stringify({
              id: produto.id,
              nome: nome,
              categoria: categoria,
              imagem: imagem,
              descricao: descricao,
            }),
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
          });
        }}
        variant="primary"
        type="submit"
        disabled={validacao}
      >
        Confirmar alterações
      </Button>
    </Row>
  );
};

export default FormularioAlteracaoProduto;
