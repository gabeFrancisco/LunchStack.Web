import { useState } from "react";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import TableList from "../../components/Table/TableList";
import TableToolbar from "../../components/Table/TableToolbar";
import NewTableModal from "../../components/Table/NewTableModal";

function MesasPage() {
  const [newTableModal, setNewTableModal] = useState(false);
  const handleNewTableModal = () => 
    newTableModal ? setNewTableModal(false) : setNewTableModal(true)
  return (
    <div>
      <SectionTitle title="Mesas" subtitle="Gerencie todas as mesas de seu negócio aqui!"/>
      <TableToolbar newTableModalState={handleNewTableModal}/>
      <TableList/>
      {newTableModal && (
        <NewTableModal handleClose={handleNewTableModal}/>
      )}
    </div>
  );
}

export default MesasPage;
