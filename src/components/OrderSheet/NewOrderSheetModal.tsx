import { useFormik } from "formik";
import { useAppDispatch } from "../../store/store";
import Modal from "../Modal/Modal";

interface Props {
  handleClose: () => void;
}

function NewOrderSheetModal(props: Props) {
  const dispatch = useAppDispatch();
  const formik = useFormik({
    initialValues: {},
    onSubmit: (values) => {},
  });
  return (
    <Modal toggleModal={props.handleClose} title="Novo pedido">
      <form onSubmit={formik.handleSubmit}>
      <div className="flex flex-row justify-between p-2 lg:justify-center">
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
        </div>
      </form>
    </Modal>
  );
}

export default NewOrderSheetModal;
