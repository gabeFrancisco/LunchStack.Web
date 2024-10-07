
interface Props{
  handleModal: () => void
  children?: React.ReactNode
}

function Modal(props: Props) {
  return ( <div className="z-50 flex flex-col items-center w-full bg-slate-50">
      <div className="w-56 border rounded">
        Is opened!
        <button onClick={props.handleModal}>Close!</button>
      </div>
  </div> );
}

export default Modal;