import { useFormik } from "formik";
import { useAppDispatch, useAppSelector } from "../../store/store";
import Modal from "../Modal/Modal";
import { useEffect } from "react";
import { getAllCategoriesAsync } from "../../store/slices/categorySlice";

interface Props {
  handleClose: () => void;
}

function NewProductModal(props: Props) {
  const dispatch = useAppDispatch();
  const categories = useAppSelector(state => state.categories.categoryList);
  useEffect(() => {
    if(categories.length <= 0){
      dispatch(getAllCategoriesAsync())
    }
  }, [])
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
            {categories.map((el, index) => (
              <option key={index} value={el.id}>{el.name}</option>
            ))}
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
