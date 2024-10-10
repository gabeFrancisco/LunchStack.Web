import { useFormik } from "formik";
import { useAppDispatch } from "../../store/store";
import Modal from "../Modal/Modal";

interface Props {
  handleClose: () => void;
}

function NewProductModal(props: Props) {
  const dispatch = useAppDispatch();
  const formik = useFormik({
    initialValues: {},
    onSubmit: () => {},
  });
  return (
    <Modal toggleModal={props.handleClose} title="Novo produto">
      <form onSubmit={formik.handleSubmit}></form>
    </Modal>
  );
}

export default NewProductModal;
