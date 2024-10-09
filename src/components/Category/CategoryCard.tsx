import { BiFoodMenu } from "react-icons/bi";

interface Props {
  index: number;
  color: string;
  name: string;
  quantity: number;
}

function CategoryCard(props: Props) {
  return (
    <div
      className="flex flex-row justify-between flex-grow w-full m-1 transition ease-in-out rounded shadow cursor-pointer hover:bg-slate-50 hover:-translate-y-2 hover:"
      key={props.index}
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
  );
}

export default CategoryCard;
