import SectionTitle from "../../components/SectionTitle/SectionTitle";
import CategoryTable from "../../components/Category/CategoryTable";
import CategoryToolbar from "../../components/Category/CategoryToolbar";

function CategoriasPage() {
  return (
    <div>
      <SectionTitle
        title="Categorias"
        subtitle="Gerencie todas as suas categorias nessa seção!"
      />
      <CategoryToolbar/>
      <CategoryTable />
    </div>
  );
}

export default CategoriasPage;
