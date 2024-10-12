import { useState } from "react";
import { BiPurchaseTag, BiTable } from "react-icons/bi";

interface Props {
  number: number;
  chairs: number;
  isBusy: boolean
}

function TableCard(props: Props) {
  const [infoModal, setInfoModal] = useState(false);
  const handleInfoModal = () =>
    infoModal ? setInfoModal(false) : setInfoModal(true);
  return ( <div>
      <div
        className="flex flex-row w-full m-1 rounded shadow cursor-pointer justify-stretch hover:bg-slate-200"
        onClick={handleInfoModal}
      >
        <div className="flex flex-row items-center p-5 text-lg font-bold border-r">
         <BiPurchaseTag className="mr-1"/>{props.number}
        </div>
        <div className="flex flex-row items-center p-5 text-lg font-bold border-r">
          <BiTable className="mr-1" />
          {props.chairs}
        </div>
        <div className="px-4 py-4 text-xl font-bold truncate">{props.isBusy}</div>
      </div>
      {/* {infoModal && (
        <CategoryInfoModal
          handleClose={handleInfoModal}
          category={{ name: props.name, color: props.color }}
        />
      )} */}
  </div> );
}

export default TableCard;