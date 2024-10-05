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
    <div className="w-full px-3 py-2 border rounded shadow-sm">
{categories.length > 0 ? (
  categories.map((el, index) => (
    <div className="w-full border-b border-gray-100" key={index}>
      <div className="px-4 py-2 border-r whitespace-nowrap">
        <div
          style={{ backgroundColor: el.color }}
          className="py-2 text-center rounded"
        ></div>
      </div>
      <div className="px-4 py-2 whitespace-nowrap">{el.name}</div>
      <div className="px-4 py-2 whitespace-nowrap">{el.id}</div>
    </div>
  ))
) : (

    <Skeleton  height="2rem" className="w-full my-2" count={1} />
)}
    </div>
  );
}

export default CategoryTable;

