import ProductList from "../../components/Products/ProductList";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

function ProdutosPage() {
  return ( <div>
    <SectionTitle title="Produtos" subtitle="Gerencie todos os seus produtos por aqui."/>
    <ProductList/>
  </div> );
}

export default ProdutosPage;