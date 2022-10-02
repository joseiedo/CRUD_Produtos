import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ModalAlteracaoProduto from './ModalAlteracaoProduto';
import ModalInfoProduto from './ModalInfoProduto';
import ModalRemocaoProduto from './ModalRemocaoProduto';

const Produto = ({ dados }) => {
  const [showEdit, setShowEdit] = React.useState(false);
  const [showInfo, setShowInfo] = React.useState(false);
  const [showRemocao, setShowRemocao] = React.useState(false);

  const handleClose = () => setShowEdit(false);
  const handleShowEditModal = () => setShowEdit(true);

  const handleShowInfoModal = () => setShowInfo(true);
  const handleCloseInfoModal = () => setShowInfo(false);

  const handleShowRemocaoModal = () => setShowRemocao(true);
  const handleCloseRemocaoModal = () => setShowRemocao(false);

  return (
    <Card style={{ width: '18rem', minHeight: "300px", margin: "0 auto" }}>
      <Card.Img variant="top" src={dados.imagem} style={{ objectFit: "cover", height: "14rem" }} />
      <Card.Body>
        <Card.Title>{dados.nome}</Card.Title>
        <Card.Subtitle className="mb-3">{dados.categoria}</Card.Subtitle>
        <Button variant="primary" className="me-2" onClick={handleShowEditModal}>Editar</Button>
        <Button variant="danger me-2" onClick={handleShowRemocaoModal}>Excluir</Button>
        <Button variant="info " onClick={handleShowInfoModal}>Info</Button>
      </Card.Body>
      <ModalAlteracaoProduto handleClose={handleClose} handleShow={handleShowEditModal} show={showEdit} setShow={setShowEdit} produtoASerAlterado={dados} />
      <ModalInfoProduto handleClose={handleCloseInfoModal} handleShow={handleShowInfoModal} show={showInfo} setShow={setShowInfo} produtoASerMostrado={dados} />
      <ModalRemocaoProduto handleClose={handleCloseRemocaoModal} handleShow={handleShowRemocaoModal} show={showRemocao} setShow={setShowRemocao} produtoASerRemovido={dados} />
    </Card>
  )
}

export default Produto