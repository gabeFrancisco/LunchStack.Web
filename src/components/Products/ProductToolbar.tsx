interface Props {
  newProductModalState: () => void;
}

function ProductToolbar(props: Props) {
  return (
    <div className="flex flex-row w-full py-2 border-b">
      <button
        onClick={props.newProductModalState}
        className="btn-primary"
      >
        Novo produto!
      </button>
    </div>
  );
}

export default ProductToolbar;
