import { useFormik } from "formik";
import { useAppDispatch } from "../../store/store";
import Modal from "../Modal/Modal";

interface Props {
  handleClose: () => void;
}

function NewProductModal(props: Props) {
  const dispatch = useAppDispatch();
  const formik = useFormik({
    initialValues: {
      name: "",
      categoryId: 0,
      quantity: 0,
      price: 0,
    },
    onSubmit: () => {},
  });
  return (
    <Modal toggleModal={props.handleClose} title="Novo produto">
      <form onSubmit={formik.handleSubmit}>
        <div className="flex flex-row w-full m-2">
          <label htmlFor="name">Nome do produto: </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Nome"
            value={formik.values.name}
            onChange={formik.handleChange}
            className="border"
          />
        </div>
        <div className="flex flex-row w-full m-2">
        <label htmlFor="quantity">Quantidade: </label>
          <input
            type="text"
            name="quantity"
            id="quantity"
            placeholder="Nome"
            value={formik.values.quantity}
            onChange={formik.handleChange}
            className="border"
          />
        </div>
        <div className="flex flex-row w-full m-2">
        <label htmlFor="category">Categoria:</label>
          <select>
            <option>Burgers</option>
          </select>
        </div>
        <div className="flex flex-row w-full m-2">
          <label htmlFor="price">Preço: </label>
          <input
            type="text"
            name="price"
            id="price"
            placeholder="Nome"
            value={formik.values.price}
            onChange={formik.handleChange}
            className="border"
          />
        </div>
        <button onClick={props.handleClose}>Fechar</button>
      </form>
    </Modal>
  );
}

export default NewProductModal;
