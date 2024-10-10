import { useState } from "react";
import ProductList from "../../components/Products/ProductList";
import ProductToolbar from "../../components/Products/ProductToolbar";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import NewProductModal from "../../components/Products/NewProductModal";

function ProdutosPage() {
  const [newProductModal, setNewProductModal] = useState(false);
  const handleNewProductModal = () =>
    newProductModal ? setNewProductModal(false) : setNewProductModal(true);
  return ( <div>
    <SectionTitle title="Produtos" subtitle="Gerencie todos os seus produtos por aqui."/>
    <ProductToolbar newProductModalState={handleNewProductModal}/>
    <ProductList/>
    {newProductModal && <NewProductModal handleClose={handleNewProductModal}/>}
  </div> );
}

export default ProdutosPage;