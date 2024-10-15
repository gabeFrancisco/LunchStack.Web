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
          className="mx-3 btn-red"
        >
          Cancelar
        </button>
        <button
          type="button"
          onClick={() => formik.handleSubmit()}
          className="mx-3 btn-primary"
        >
          Confirmar
        </button>
      </div>
    </Modal>
  );
}

export default CategoryInfoModal;
