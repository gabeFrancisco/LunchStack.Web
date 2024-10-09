import SectionTitle from "../../components/SectionTitle/SectionTitle";
import CategoryTable from "../../components/Category/CategoryTable";
import CategoryToolbar from "../../components/Category/CategoryToolbar";
import { useEffect, useState } from "react";
import NewCategoryModal from "../../components/Category/NewCategoryModal";

function CategoriasPage() {
  const [newCategoryModal, setNewCategoryModal] = useState(false);
  const handleNewCategoryModal = () =>
    newCategoryModal ? setNewCategoryModal(false) : setNewCategoryModal(true);

  useEffect(() => {
    console.log(newCategoryModal);
  }, [newCategoryModal]);
  return (
    <div>
      <SectionTitle
        title="Categorias"
        subtitle="Gerencie todas as suas categorias nessa seção!"
      />
      <CategoryToolbar newCategoryModalState={handleNewCategoryModal} />
      <CategoryTable />
      {newCategoryModal && (
        <NewCategoryModal handleClose={handleNewCategoryModal}/>
      )}
    </div>
  );
}

export default CategoriasPage;
