import React from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";
import PropTypes from "prop-types";

const ElementRemove = ({ remove, goBack }) => {
  return (
    <Modal isOpen>
      <ModalHeader>Eliminar categoria</ModalHeader>
      <ModalBody>¿Desea eliminar categoria?</ModalBody>
      <ModalFooter>
        <Button color="danger" onClick={remove}>
          Si
        </Button>
        <Button color="secondary" onClick={goBack}>
          No
        </Button>
      </ModalFooter>
    </Modal>
  );
};

ElementRemove.propTypes = {
  remove: PropTypes.func.isRequired,
  goBack: PropTypes.func.isRequired
};

ElementRemove.displayName = "CategoryRemove";

export default ElementRemove;
