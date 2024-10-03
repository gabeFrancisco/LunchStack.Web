import { useEffect } from "react";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { getAllAsync } from "../../store/slices/categorySlice";

function CategoriasPage() {
  const dispatch = useAppDispatch();
  const categories = useAppSelector((state) => state.categories.categoryList);

  useEffect(() => {
    dispatch(getAllAsync());
  }, []);
  return ( <div>
    <SectionTitle title="Categorias" subtitle="Gerencie todas as suas categorias nessa seção!"/>
    {categories.map((el, index) => (
        <p key={index}>{el.name}</p>
      ))}
  </div> );
}

export default CategoriasPage;