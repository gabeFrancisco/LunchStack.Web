import OrderSheetList from "../../components/OrderSheet/OrderSheetList";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

function PedidosPage() {
  return (
    <div>
      <SectionTitle
        title="Pedidos"
        subtitle="Gerencie seus pedidos nesta seção."
      />
      <OrderSheetList/>
    </div>
  );
}

export default PedidosPage;
