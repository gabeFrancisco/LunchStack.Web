interface Props {
  newCategoryModalState: () => void;
}

function CategoryToolbar(props: Props) {
  return (
    <div className="flex flex-row w-full py-2 mb-2 border-b">
      <button
        onClick={props.newCategoryModalState}
        className="btn-primary"
      >
        Nova Categoria!
      </button>
    </div>
  );
}

export default CategoryToolbar;
