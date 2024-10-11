import { useFormik } from "formik";
import { useAppDispatch, useAppSelector } from "../../store/store";
import Modal from "../Modal/Modal";
import { useEffect } from "react";
import { getAllCategoriesAsync } from "../../store/slices/categorySlice";
import { addProductAynsc } from "../../store/slices/productSlice";

interface Props {
  handleClose: () => void;
}

function NewProductModal(props: Props) {
  const dispatch = useAppDispatch();
  const categories = useAppSelector(state => state.categories?.categoryList);
  useEffect(() => {
      dispatch(getAllCategoriesAsync())
  }, [])
  const formik = useFormik({
    initialValues: {
      name: "",
      categoryId: categories[0]?.id,
      quantity: 0,
      price: 0,
    },
    validateOnChange: false,
    enableReinitialize: true,
    onSubmit: (values) => {
      console.log(values)
      dispatch(addProductAynsc({
        name: values.name,
        quantity: values.quantity,
        price: values.price,
        categoryId: values.categoryId!
      })).then(props.handleClose)
    },
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
        <label htmlFor="categoryId">Categoria:</label>
          <select id="categoryId" name="categoryId" value={formik.values.categoryId} onChange={formik.handleChange}>
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

export default NewProductModal;
