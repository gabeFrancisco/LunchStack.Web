interface Props {
  children?: React.ReactNode;
  toggleModal: () => void;
  title?: string;
  margin?: number
}

function Modal(props: Props) {
  const margin = props.margin ? props.margin : 64
  return (
    <div ref={null} className="fixed top-0 left-0 right-0 z-50 flex flex-col items-center justify-center w-screen h-screen bg-opacity-70 bg-slate-200">
      <div className={`z-50 w-4/5 lg:w-1/2 p-4 -mt-${margin} bg-white bg-opacity-100 rounded shadow-lg"`}>
        <div className="flex flex-row justify-between px-3 py-1 font-semibold text-gray-600 border-b">
          {props.title ?? "Modal"}
        </div>
        <div className="p-2 text-gray-600">{props.children}</div>
      </div>
    </div>
  );
}

export default Modal;
