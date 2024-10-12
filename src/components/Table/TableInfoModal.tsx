import { useFormik } from "formik";
import { Table } from "../../models/Table";
import Modal from "../Modal/Modal";

interface Props {
  handleClose: () => void;
  table: Table
}

function TableInfoModal(props: Props) {
  const formik = useFormik({
    initialValues: {},
    onSubmit: () => {}
  })
  return ( <div>
    <Modal toggleModal={props.handleClose} title="Informações da mesa">
    <button
          type="button"
          onClick={props.handleClose}
          className="p-1 mr-2 text-white bg-red-500 rounded shadow hover:bg-red-600"
        >
          Cancelar
        </button>
        <button
          type="button"
          onClick={() => formik.handleSubmit()}
          className="p-1 ml-2 text-white rounded shadow bg-primary hover:bg-blue-800"
        >
          Confirmar
        </button>
    </Modal>
  </div>);
}

export default TableInfoModal;