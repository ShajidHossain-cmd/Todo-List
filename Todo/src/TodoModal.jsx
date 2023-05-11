import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

const TodoModal = ({ updateValue }) => {
  const [showModal, setShowModal] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleClose = () => {
    setShowModal(false);
  };

  const handleAdd = () => {
    updateValue(inputValue);
    handleClose();
  };

  return (
    <>
      <Button variant="primary" onClick={() => setShowModal(true)}>
        Open Modal
      </Button>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Todo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Enter your task"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAdd}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default TodoModal;
