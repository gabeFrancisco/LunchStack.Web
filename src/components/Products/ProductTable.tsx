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
    <table className="w-full overflow-scroll border rounded h-44">
      <thead>
        <tr>
          <th>Nome</th>
          <td>Categoria</td>
          <td>Quantidade</td>
          <td>Preço</td>
        </tr>
      </thead>
      <tbody>
        {products.length > 0 ? (
          products.map((el, index) => (
            <tr>
              <th className="font-normal">{el.name}</th>
              <td>{el.categoryName}</td>
              <td>{el.quantity}</td>
              <td>{el.price.toFixed(2)}</td>
            </tr>
          ))
        ) : (
          <Skeleton />
        )}
      </tbody>
    </table>
  );
}

export default ProductTable;
