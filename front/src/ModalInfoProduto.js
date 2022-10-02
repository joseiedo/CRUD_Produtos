import React from 'react'

import Modal from 'react-bootstrap/Modal';

const ModalInfoProduto = ({ produtoASerMostrado, show, handleClose }) => {


  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{produtoASerMostrado.nome}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={produtoASerMostrado.imagem} style={{ maxWidth: "100%", margin: "0 auto", display: "block" }} alt="" />
          <h6>{produtoASerMostrado.categoria}</h6>
          <p>{produtoASerMostrado.descricao}</p>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default ModalInfoProduto