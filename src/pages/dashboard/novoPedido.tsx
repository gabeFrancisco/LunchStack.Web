import { useFormik } from "formik";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { useAppDispatch, useAppSelector } from "../../store/store";
import Skeleton from "react-loading-skeleton";
import { useEffect } from "react";
import { getAllTablesAsync } from "../../store/slices/tableSlice";

function NovoPedidoPage() {
  const dispatch = useAppDispatch();
  const tables = useAppSelector((state) =>
    state.tables.tableList.filter((table) => table.isBusy === false)
  );

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
            <div className="m-3">
              <label className="txt-label" htmlFor="c.name">
                Nome*
              </label>
              <input type="text" className="txt-input" />
            </div>
            <div className="m-3">
              <label className="txt-label" htmlFor="c.name">
                Telefone
              </label>
              <input type="text" className="txt-input" />
            </div>
            <div className="m-3">
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
          <div className="px-3 py-5 m-2 border rounded">
            <div className="m-3">
              <label
                className="txt-label"
                htmlFor="c.name"
              >
                Nome
              </label>
              <input type="text" className="txt-input " />
            </div>
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
    </div>
  );
}

export default NovoPedidoPage;
