import SectionTitle from "../../components/SectionTitle/SectionTitle";
import CategoryTable from "../../components/Category/CategoryTable";
import CategoryToolbar from "../../components/Category/CategoryToolbar";
import { useEffect, useState } from "react";
import Modal from 'react-modal'

function CategoriasPage() {
  const [newCategoryModal, setNewCategoryModal] = useState(false);
  const handleNewCategoryModal = () =>
    newCategoryModal ? setNewCategoryModal(false) : setNewCategoryModal(true);

  useEffect(() => {
    console.log(newCategoryModal)
  }, [newCategoryModal])
  return (
    <div>
      <SectionTitle
        title="Categorias"
        subtitle="Gerencie todas as suas categorias nessa seção!"
      />
      <CategoryToolbar newCategoryModalState={handleNewCategoryModal} />
      <CategoryTable />
      <Modal isOpen={newCategoryModal} shouldCloseOnOverlayClick={true}>
        Nova categoria!
        <button onClick={handleNewCategoryModal}>Fechar</button>
      </Modal>
    </div>
  );
}

export default CategoriasPage;
