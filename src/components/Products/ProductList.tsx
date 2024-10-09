import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { getAllProductsAsync } from "../../store/slices/productSlice";
import Skeleton from "react-loading-skeleton";
import ProductCard from "./ProductCard";

function ProductList() {
  const products = useAppSelector(state => state.products.productList);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getAllProductsAsync())
  }, [])
  return <div className="flex flex-col w-full">
    {products.length > 0 ? (
      products.map((el, index) => (
        <ProductCard key={index} categoryId={0} name={el.name} quantity={el.quantity} price={el.price}/>
      ))
    ) : (
      <Skeleton count={3}/>
    )}
  </div>;
}

export default ProductList;
