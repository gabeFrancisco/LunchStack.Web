import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { getAllAsync } from "../../store/slices/categorySlice";
import Skeleton from "react-loading-skeleton";

function CategoryTable() {
  const dispatch = useAppDispatch();
  const categories = useAppSelector((state) => state.categories.categoryList);
  useEffect(() => {
    dispatch(getAllAsync());
  }, []);
  return (
    <div className="flex flex-col">
      <div className="w-full overflow-x-auto">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full text-sm font-light text-center text-surface dark:text-white">
              <thead className="font-medium">
                <tr>
                  <th scope="col" className="px-6 py-4">
                    Cor
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Nome
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Quantidade de Produtos 
                  </th>
                </tr>
              </thead>
              <tbody>
                {categories.length > 0 ? (
                  categories.map((el, index) => (
                    <tr className="w-full border-b border-gray-100" key={index}>
                      <td className="px-4 py-2 border-r whitespace-nowrap">
                        <div
                          style={{ backgroundColor: el.color }}
                          className="py-2 text-center rounded"
                        ></div>
                      </td>
                      <td className="px-4 py-2 whitespace-nowrap">{el.name}</td>
                      <td className="px-4 py-2 whitespace-nowrap">{el.id}</td>
                    </tr>
                  ))
                ) : (
                  <Skeleton count={2} />
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoryTable;
