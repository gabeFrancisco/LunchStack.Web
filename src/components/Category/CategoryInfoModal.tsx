import { useFormik } from "formik";
import { Category } from "../../models/Category";
import Modal from "../Modal/Modal";

interface Props {
  handleClose: () => void;
  category: Category;
}

function CategoryInfoModal(props: Props) {
  const formik = useFormik({
    initialValues: {},
    onSubmit: () => {},
  });
  return (
    <Modal toggleModal={props.handleClose} title={props.category.name}>
      <div
        className="p-5 rounded-full"
        style={{
          backgroundColor: props.category.color,
        }}
      >
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
    </Modal>
  );
}

export default CategoryInfoModal;
