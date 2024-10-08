interface Props {
  children?: React.ReactNode;
  toggleModal: () => void;
  toggleAction: () => void;
  title?: string;
}

function Modal(props: Props) {
  return (
    <div className="fixed top-0 left-0 flex flex-col items-center justify-center w-screen h-screen bg-opacity-70 bg-slate-200">
      <div className="z-50 w-1/2 p-4 -mt-64 bg-white bg-opacity-100 border rounded shadow-lg">
        <div className="flex flex-row justify-between px-3 py-1 font-semibold text-gray-600 border-b">
          {props.title ?? "Modal"}
        </div>
        <div className="p-2 text-gray-600">{props.children}</div>
        <div className="flex flex-row justify-between p-2 lg:justify-center">
          <button
            type="button"
            onClick={props.toggleModal}
            className="p-1 mr-2 text-white bg-red-500 rounded shadow hover:bg-red-600"
          >
            Cancelar
          </button>
          <button
            type="button"
            onClick={props.toggleAction}
            className="p-1 ml-2 text-white rounded shadow bg-primary hover:bg-blue-800"
          >
            Confirmar
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
