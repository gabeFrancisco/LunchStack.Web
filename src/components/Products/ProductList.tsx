import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { getAllProductsAsync } from "../../store/slices/productSlice";
import Skeleton from "react-loading-skeleton";

function ProductList() {
  const products = useAppSelector(state => state.products.productList);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getAllProductsAsync())
  }, [])
  return <div className="flex flex-col w-full">
    {products.length > 0 ? (
      products.map((el, index) => (
        <p>{el.name}</p>
      ))
    ) : (
      <Skeleton count={3}/>
    )}
  </div>;
}

export default ProductList;
