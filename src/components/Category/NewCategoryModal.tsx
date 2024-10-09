import { useFormik } from "formik";
import Modal from "../Modal";
import { useAppDispatch } from "../../store/store";
import { addCategoryAsync } from "../../store/slices/categorySlice";
import { Category } from "../../models/Category";

interface Props {
  handleClose: () => void;
}

function NewCategoryModal(props: Props) {
  const dispatch = useAppDispatch();
  const formik = useFormik({
    initialValues: {
      name: "",
      color: "#9999ff",
    },
    validateOnChange: false,
    enableReinitialize: false,

    onSubmit: (values) => {
      dispatch(addCategoryAsync(values as Category)).then(props.handleClose);
    },
  });
  return (
    <Modal
      toggleModal={props.handleClose}
      title="Nova categoria"
    >
      <form onSubmit={formik.handleSubmit}>
        <div className="flex flex-row w-full">
          <label htmlFor="name">Nome da categoria: </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Nome"
            value={formik.values.name}
            onChange={formik.handleChange}
          />
        </div>
        <div>
          <label htmlFor="color">Cor</label>
          <input
            name="color"
            value={formik.values.color}
            onChange={formik.handleChange}
            id="color"
            type="color"
          />
        </div>{" "}
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

export default NewCategoryModal;
