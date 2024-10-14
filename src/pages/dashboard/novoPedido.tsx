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
          <label
            className="absolute z-10 px-1 ml-3 -mt-1 text-sm font-bold text-gray-400 bg-white rounded"
            htmlFor="c.name"
          >
            Cliente
          </label>
          <div className="px-3 py-5 m-2 border rounded">
            <div className="w-full m-3">
              <label
                className="absolute z-10 px-1 ml-3 -mt-2 text-sm bg-white rounded 0"
                htmlFor="c.name"
              >
                Nome
              </label>
              <input type="text" className="w-full p-1 border rounded" />
            </div>
            <div className="m-3">
              <label
                className="absolute z-10 px-1 ml-3 -mt-2 text-sm text-gray-400 bg-white rounded"
                htmlFor="c.name"
              >
                Telefone
              </label>
              <input type="text" className="p-1 border rounded" />
            </div>
          </div>
        </div>

        <div>
          <label
            className="absolute z-10 px-1 ml-3 -mt-1 text-sm font-bold text-gray-400 bg-white rounded"
            htmlFor="c.name"
          >
            Produtos
          </label>
          <div className="px-3 py-5 m-2 border rounded">
            <div>
              <label
                className="absolute z-10 px-1 ml-3 -mt-2 text-sm text-gray-400 bg-white rounded"
                htmlFor="c.name"
              >
                Nome
              </label>
              <input type="text" className="p-1 border rounded" />
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
