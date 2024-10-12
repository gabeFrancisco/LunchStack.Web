import { useFormik } from "formik";
import { useAppDispatch } from "../../store/store";
import Modal from "../Modal/Modal";
import { addTableAsync } from "../../store/slices/tableSlice";

interface Props {
  handleClose: () => void;
}

function NewTableModal(props: Props) {
  const dispatch = useAppDispatch();
  const formik = useFormik({
    initialValues: {
      number: 0,
      chairs: 0,
      isBusy: false,
    },
    onSubmit: (values) => {
      dispatch(addTableAsync({
        chairs: values.chairs,
        number: values.number,
        isBusy: false
      })).then(props.handleClose)
    },
  });
  return (
    <Modal toggleModal={props.handleClose} title="Nova mesa">
      <form onSubmit={formik.handleSubmit}>
        <div className="flex flex-row w-full m-1">
          <label htmlFor="number">Número:</label>
          <input
            type="number"
            name="number"
            id="number"
            placeholder="Número"
            value={formik.values.number}
            onChange={formik.handleChange}
          />
          </div>
          <div className="flex flex-row w-full m-1">
              <label htmlFor="chairs">Quantidade de cadeiras:</label>
              <input
                name="chairs"
                value={formik.values.chairs}
                onChange={formik.handleChange}
                id="chairs"
                type="number"
              />
          </div>

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

export default NewTableModal;
