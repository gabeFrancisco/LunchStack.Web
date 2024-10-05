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
    <div className="grid w-full grid-cols-3 gap-4">
{categories.length > 0 ? (
  categories.map((el, index) => (
    <div className="flex flex-row flex-grow w-full my-3 rounded shadow justify-stretch" key={index}>
      <div className="mr-5">
        <div
          style={{ backgroundColor: el.color }}
          className="h-full p-8 text-center rounded-tl rounded-bl "
        ></div>
      </div>
      <div className="px-4 py-4 text-xl font-bold ">{el.name}</div>
      <div className="px-4 py-4 ">Produtos associados: {el.id}</div>
    </div>
  ))
) : (

    <Skeleton  height="2rem" className="w-full my-2" count={3} />
)}
    </div>
  );
}

export default CategoryTable;

