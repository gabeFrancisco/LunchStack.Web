import { useAppSelector } from "../../store/store";

function SelectedProductOrderList() {
  const selectedProductOrders = useAppSelector(state => state.productOrders.selectedProductOrderList)

  return <div className="flex flex-col h-52 max-h-52">
  <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
      <div className="overflow-hidden">
        <table className="min-w-full text-sm font-light text-left text-surface dark:text-white">
          <thead className="sticky top-0 overflow-auto font-medium border-b border-neutral-200 dark:border-white/10">
            <tr>
              <th scope="col" className="sticky px-6 py-4">
                Produto
              </th>
              <th scope="col" className="sticky px-6 py-4">
                Categoria
              </th>
              <th scope="col" className="sticky px-6 py-4">
                Quantidade
              </th>
              <th scope="col" className="sticky px-6 py-4">
                Total
              </th>
            </tr>
          </thead>
          <tbody className="h-24 overflow-scroll max-h-24">
            {selectedProductOrders.length > 0 ? (
              selectedProductOrders.map((el, index) => (
                <tr
                  className="border-b border-neutral-200 dark:border-white/10"
                  key={index}
                >
                  <th className="px-6 py-2 whitespace-nowrap">{el.product?.name}</th>
                  <td className="px-6 py-2 whitespace-nowrap">
                    {el.product?.categoryName}
                  </td>
                  <td className="px-6 py-2 whitespace-nowrap">
                    {el.quantity}
                  </td>
                  <td className="px-6 py-2 whitespace-nowrap">
                    {el.product?.price! * el.quantity}
                  </td>
                </tr>
              ))
            ) : (
              <tr className="flex flex-col items-center w-full">
                <p>Selecione items na lista acima!</p>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
}

export default SelectedProductOrderList;
