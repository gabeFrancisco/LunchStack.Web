import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { getAllProductsAsync } from "../../store/slices/productSlice";
import Skeleton from "react-loading-skeleton";

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
                  <th scope="col" className="sticky px-6 py-4">
                    #
                  </th>
                  <th scope="col" className="sticky px-6 py-4">
                    First
                  </th>
                  <th scope="col" className="sticky px-6 py-4">
                    Last
                  </th>
                  <th scope="col" className="sticky px-6 py-4">
                    Handle
                  </th>
                </tr>
              </thead>
              <tbody className="h-24 overflow-scroll max-h-24">
                {products.length > 0 ? (
                  products.map((el, index) => (
                    <tr
                      className="border-b border-neutral-200 dark:border-white/10"
                      key={index}
                    >
                      <th className="px-6 py-2 whitespace-nowrap">{el.name}</th>
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
