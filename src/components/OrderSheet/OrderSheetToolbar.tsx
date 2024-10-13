interface Props {
  newOrderSheetModalState: () => void;
}

function OrderSheetToolbar(props: Props) {
  return (
    <div className="flex flex-row w-full py-2 borber-b">
      <button
        onClick={props.newOrderSheetModalState}
        className="px-3 py-1 text-sm text-white rounded bg-primary hover:bg-blue-900"
      >Novo pedido!</button>
    </div>
  );
}

export default OrderSheetToolbar;
