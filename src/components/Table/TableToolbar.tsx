interface Props {
  newTableModalState: () => void;
}

function TableToolbar(props: Props) {
  return (
    <div className="flex flex-row w-full py-2 border-b">
      <button
        onClick={props.newTableModalState}
        className="btn-primary"
      >
        Nova Mesa!
      </button>
    </div>
  );
}

export default TableToolbar;
