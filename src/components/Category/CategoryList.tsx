import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { getAllCategoriesAsync } from "../../store/slices/categorySlice";
import Skeleton from "react-loading-skeleton";
import CategoryCard from "./CategoryCard";

function CategoryList() {
  const dispatch = useAppDispatch();
  const categories = useAppSelector((state) => state.categories.categoryList);
  useEffect(() => {
    dispatch(getAllCategoriesAsync());
  }, []);
  return (
    <div className="grid w-full grid-cols-3 gap-4">
      {categories.length > 0 ? (
        categories.map((el, index) => (
          <CategoryCard
          key={index}
            index={index}
            color={el.color}
            name={el.name}
            quantity={el.id!}
          />
        ))
      ) : (
        <Skeleton height="2rem" className="w-full my-2" count={3} />
      )}
    </div>
  );
}

export default CategoryList;
