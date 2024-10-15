import Modal from "../Modal/Modal";

interface Props{
  handleClose: () => void
}

function NewProductOrderModal(props: Props) {
  return ( <Modal toggleModal={props.handleClose}>
    <button
          type="button"
          onClick={props.handleClose}
          className="btn-red mx-3"
        >
          Cancelar
        </button>
        <button
          type="button"
          onClick={() => {}}
          className="btn-primary mx-3"
        >
          Confirmar
        </button>
  </Modal> );
}

export default NewProductOrderModal; 