interface Props {
  newTableModalState: () => void;
}

function TableToolbar(props: Props) {
  return (
    <div className="flex flex-row w-full py-2 border-b">
      <button
        onClick={props.newTableModalState}
        className="px-3 py-1 text-sm text-white transition ease-in-out rounded shadow shadow-primary bg-primary hover:bg-blue-900"
      >
        Nova Mesa!
      </button>
    </div>
  );
}

export default TableToolbar;
