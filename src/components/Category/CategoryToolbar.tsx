interface Props {
  newCategoryModalState: () => void;
}

function CategoryToolbar(props: Props) {
  return (
    <div className="flex flex-row w-full py-2 border-b">
      <button
        onClick={props.newCategoryModalState}
        className="px-3 py-1 text-sm text-white rounded bg-primary hover:bg-blue-900"
      >
        Nova Categoria!
      </button>
    </div>
  );
}

export default CategoryToolbar;
