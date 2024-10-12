import SectionTitle from "../../components/SectionTitle/SectionTitle";
import CategoryToolbar from "../../components/Category/CategoryToolbar";
import CategoryList from "../../components/Category/CategoryList";
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
      <CategoryList />
      {newCategoryModal && (
        <NewCategoryModal handleClose={handleNewCategoryModal}/>
      )}
    </div>
  );
}

export default CategoriasPage;
