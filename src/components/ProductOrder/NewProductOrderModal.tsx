import Modal from "../Modal/Modal";
import ProductTable from "../Products/ProductTable";
import SelectedProductOrderList from "./SelectedProductOrderList";

interface Props {
  handleClose: () => void;
}

function NewProductOrderModal(props: Props) {
  return (
    <Modal toggleModal={props.handleClose} margin={0}>
      <div className="flex flex-col justify-center">
        <ProductTable />
        <h3 className="my-2">Itens do pedido:</h3>
        <SelectedProductOrderList/>
        <div className="flex flex-row justify-center">
          <button
            type="button"
            onClick={props.handleClose}
            className="mx-3 btn-red"
          >
            Cancelar
          </button>
          <button type="button" onClick={() => {}} className="mx-3 btn-primary">
            Confirmar
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default NewProductOrderModal;
