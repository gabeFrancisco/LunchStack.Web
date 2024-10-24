import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { getAllProductsAsync } from "../../store/slices/productSlice";
import Skeleton from "react-loading-skeleton";
import { addProductOrder } from "../../store/slices/productOrderSlice";

function ProductTable() {
  const products = useAppSelector((state) => state.products.productList);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllProductsAsync());
  }, []);

  return (
    <div className="flex flex-col h-52 max-h-52">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full text-sm font-light text-left text-surface dark:text-white">
              <thead className="sticky top-0 overflow-auto font-medium border-b border-neutral-200 dark:border-white/10">
                <tr>
                  <td scope="col" className="sticky px-6 py-4">
                    Produto
                  </td>
                  <td scope="col" className="sticky px-6 py-4">
                    Categoria
                  </td>
                  <td scope="col" className="sticky px-6 py-4">
                    Quantidade
                  </td>
                  <td scope="col" className="sticky px-6 py-4">
                    Preço
                  </td>
                </tr>
              </thead>
              <tbody className="h-24 overflow-scroll max-h-24">
                {products.length > 0 ? (
                  products.map((el, index) => (
                    <tr
                      onClick={() =>
                        dispatch(
                          addProductOrder({
                            productOrder: {
                              productId: el.id!,
                              quantity: 1,
                              product: el,
                            },
                          })
                        )
                      }
                      className="border-b border-neutral-200 dark:border-white/10 hover:bg-slate-100 hover:cursor-pointer"
                      key={index}
                    >
                      <td className="px-6 py-2 whitespace-nowrap">{el.name}</td>
                      <td className="px-6 py-2 whitespace-nowrap">
                        {el.categoryName}
                      </td>
                      <td className="px-6 py-2 whitespace-nowrap">
                        {el.quantity}
                      </td>
                      <td className="px-6 py-2 whitespace-nowrap">
                        {el.price.toFixed(2)}
                      </td>
                    </tr>
                  ))
                ) : (
                  <Skeleton />
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductTable;
