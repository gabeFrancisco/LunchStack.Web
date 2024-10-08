import SectionTitle from "../../components/SectionTitle/SectionTitle";
import CategoryTable from "../../components/Category/CategoryTable";
import CategoryToolbar from "../../components/Category/CategoryToolbar";
import { useEffect, useState } from "react";
import Modal from "../../components/Modal";

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
        <Modal
          toggleModal={handleNewCategoryModal}
          toggleAction={() => {}}
          title="Nova categoria"
        >
          <form>
            <div className="flex flex-row w-full">
              <label>Nome da categoria: </label>
              <input type="text" name="name" id="name" placeholder="Nome" />
            </div>
          </form>
        </Modal>
      )}
    </div>
  );
}

export default CategoriasPage;
