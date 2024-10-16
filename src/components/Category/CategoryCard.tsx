import { useState } from "react";
import { BiFoodMenu } from "react-icons/bi";
import CategoryInfoModal from "./CategoryInfoModal";

interface Props {
  index: number;
  color: string;
  name: string;
  quantity: number;
}

function CategoryCard(props: Props) {
  const [infoModal, setInfoModal] = useState(false);
  const handleInfoModal = () =>
    infoModal ? setInfoModal(false) : setInfoModal(true);
  return (
    <div key={props.index}>
      <div
        className="relative flex flex-row justify-between w-full m-1 transition ease-in-out rounded shadow cursor-pointer hover:-translate-y-1 hover:shadow-lg"
        onClick={handleInfoModal}
      >
        <div className="mr-5">
          <div
            style={{ backgroundColor: props.color }}
            className="h-full p-8 text-center rounded-tl rounded-bl "
          ></div>
        </div>
        <div className="px-4 py-4 text-xl font-bold truncate">{props.name}</div>
        <div className="flex flex-row items-center px-4 py-4 text-lg font-bold border-l">
          <BiFoodMenu className="mr-1" />
          {props.quantity}
        </div>
      </div>
      {infoModal && (
        <CategoryInfoModal
          handleClose={handleInfoModal}
          category={{ name: props.name, color: props.color }}
        />
      )}
    </div>
  );
}

export default CategoryCard;
