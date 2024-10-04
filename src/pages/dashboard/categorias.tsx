import { Suspense, useEffect } from "react";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { getAllAsync } from "../../store/slices/categorySlice";
import Skeleton from "react-loading-skeleton";

function CategoriasPage() {
  const dispatch = useAppDispatch();
  const categories = useAppSelector((state) => state.categories.categoryList);

  useEffect(() => {
    dispatch(getAllAsync());
  }, []);
  return (
    <div>
      <SectionTitle
        title="Categorias"
        subtitle="Gerencie todas as suas categorias nessa seção!"
      />
        {categories.length > 0 ? categories.map((el, index) => (
          <p key={index}>{el.name}</p>
        )) : <Skeleton count={2}/>}
    </div>
  );
}

export default CategoriasPage;
