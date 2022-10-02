import React from 'react'

import Modal from 'react-bootstrap/Modal';

const ModalRemocaoProduto = ({ produtoASerRemovido, show, handleClose }) => {

  function handleRemocaoProduto(codigo) {
    fetch(`http://localhost:8080/produtos/remover/${codigo}`, {
      method: "DELETE"
    }
    )
    handleClose();
  }

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Remoção de produto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h6>Deseja mesmo remover o produto {produtoASerRemovido.nome}?</h6>
        </Modal.Body>
        <Modal.Footer>
          <button className='btn btn-secondary' onClick={handleClose}>Cancelar</button>
          <button className='btn btn-primary' onClick={() => handleRemocaoProduto(produtoASerRemovido.id)}>Confirmar</button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default ModalRemocaoProduto