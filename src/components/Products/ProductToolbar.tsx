interface Props {
  newProductModalState: () => void;
}

function ProductToolbar(props: Props) {
  return (
    <div className="flex flex-row w-full py-2 border-b">
      <button
        onClick={props.newProductModalState}
        className="transition ease-in-out px-3 py-1 text-sm text-white rounded shadow shadow-primary bg-primary hover:bg-blue-900"
      >
        Novo produto!
      </button>
    </div>
  );
}

export default ProductToolbar;
