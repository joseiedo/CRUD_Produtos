import React from 'react'

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Formulario from './Formulario';

const Menu = ({ setProduto }) => {
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <>
      <div className="mb-4">
        <Button variant="primary" className="me-2" onClick={handleShow}>
          Cadastrar produto
        </Button>
        <Button variant="secondary" onClick={() => window.location.reload()}>Recarregar</Button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Cadastro de produtos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Formulario setProduto={setProduto} handleClose={handleClose} />
        </Modal.Body>
      </Modal>
    </>
  )
}

export default Menu