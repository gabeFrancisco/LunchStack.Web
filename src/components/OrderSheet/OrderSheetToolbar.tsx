import { useNavigate } from "react-router-dom";

interface Props {
  newOrderSheetModalState?: () => void;
}

function OrderSheetToolbar(props: Props) {
  const navigate = useNavigate();
  return (
    <div className="flex flex-row w-full py-2 borber-b">
      <button
        onClick={() => navigate("novoPedido")}
        className="btn-primary"
      >Novo pedido!</button>
    </div>
  );
}

export default OrderSheetToolbar;
