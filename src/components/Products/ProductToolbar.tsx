interface Props {
  newProductModalState: () => void;
}

function ProductToolbar(props: Props) {
  return (
    <div className="flex flex-row w-full py-2 my-3 border-b">
      <button
        onClick={props.newProductModalState}
        className="px-3 py-1 text-sm text-white rounded bg-primary hover:bg-blue-900"
      >
        Novo produto!
      </button>
    </div>
  );
}

export default ProductToolbar;
