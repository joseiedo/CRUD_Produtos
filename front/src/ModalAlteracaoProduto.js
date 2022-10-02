import React from 'react'

import Modal from 'react-bootstrap/Modal';
import FormularioAlteracaoProduto from './FormularioAlteracaoProduto';

const ModalAlteracaoProduto = ({ produtoASerAlterado, setProduto, show, handleClose }) => {


  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Cadastro de produtos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormularioAlteracaoProduto produto={produtoASerAlterado} setProduto={setProduto} handleClose={handleClose} />
        </Modal.Body>
      </Modal>
    </>
  )
}

export default ModalAlteracaoProduto