import { useState } from "react";
import OrderSheetList from "../../components/OrderSheet/OrderSheetList";
import OrderSheetToolbar from "../../components/OrderSheet/OrderSheetToolbar";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import NewOrderSheetModal from "../../components/OrderSheet/NewOrderSheetModal";

function PedidosPage() {
  const [newOrderSheetModal, setNewOrderSheetModal] = useState(false)
  const handleNewOrderSheetModal = () => {
    newOrderSheetModal ? setNewOrderSheetModal(false) : setNewOrderSheetModal(true)
  }
  return (
    <div>
      <SectionTitle
        title="Pedidos"
        subtitle="Gerencie seus pedidos nesta seção."
      />
      <OrderSheetToolbar newOrderSheetModalState={handleNewOrderSheetModal}/>
      <OrderSheetList/>
      {newOrderSheetModal && <NewOrderSheetModal handleClose={handleNewOrderSheetModal}/>}
    </div>
  );
}

export default PedidosPage;
