import { useFormik } from "formik";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { useAppDispatch, useAppSelector } from "../../store/store";
import Skeleton from "react-loading-skeleton";
import { useEffect, useState } from "react";
import { getAllTablesAsync } from "../../store/slices/tableSlice";
import ProductOrderList from "../../components/ProductOrder/ProductOrderList";
import NewProductOrderModal from "../../components/ProductOrder/NewProductOrderModal";

function NovoPedidoPage() {
  const dispatch = useAppDispatch();
  const tables = useAppSelector((state) =>
    state.tables.tableList.filter((table) => table.isBusy === false)
  );

  const [newProductOrderModal, setNewProductOrderModal] = useState(false);
  const handleNewProductOrderModal = () =>
    newProductOrderModal
      ? setNewProductOrderModal(false)
      : setNewProductOrderModal(true);

  useEffect(() => {
    dispatch(getAllTablesAsync());
  }, []);

  const formik = useFormik({
    initialValues: {},
    onSubmit: (values) => {},
  });
  return (
    <div>
      <SectionTitle
        title="Novo pedido"
        subtitle="Crie um novo pedido para o seu negócio nesta seção"
        backRoute="/dashboard/pedidos"
      />
      <form
        className="grid grid-cols-1 p-2 my-2 text-gray-500 lg:grid-cols-2"
        onSubmit={formik.handleSubmit}
      >
        <div>
          <label className="form-label" htmlFor="c.name">
            Cliente
          </label>
          <div className="form-section">
            <div className="mx-3 mt-2 mb-5">
              <label className="txt-label" htmlFor="c.name">
                Nome*
              </label>
              <input type="text" className="txt-input" />
            </div>
            <div className="mx-3 mb-5">
              <label className="txt-label" htmlFor="c.name">
                Telefone
              </label>
              <input type="text" className="txt-input" />
            </div>
            <div className="mx-3 mb-5">
              <label className="txt-label" htmlFor="c.name">
                Email
              </label>
              <input type="email" className="txt-input" />
            </div>
          </div>
        </div>

        <div>
          <label className="form-label" htmlFor="c.name">
            Produtos
          </label>
          <div className="form-section">
            <button className="w-full btn-green" onClick={handleNewProductOrderModal}>Adicionar produto</button>
            <ProductOrderList />
          </div>
        </div>

        <div className="flex flex-row">
          <label htmlFor="tables">Mesas disponíveis:</label>
          {tables.length > 0 ? (
            <select>
              {tables.map((el, index) => (
                <option key={index} value={el.id!}>
                  {el.number}
                </option>
              ))}
            </select>
          ) : (
            <Skeleton />
          )}
        </div>
      </form>
      {newProductOrderModal && <NewProductOrderModal handleClose={handleNewProductOrderModal}/>}
    </div>
  );
}

export default NovoPedidoPage;
