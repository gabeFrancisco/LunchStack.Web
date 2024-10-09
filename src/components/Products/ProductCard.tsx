interface Props{
  name: string;
  categoryId: number,
  quantity: number,
  price: number;
}

function ProductCard(props: Props) {
  return ( <div className="flex flex-row w-full p-2 my-2 rounded shadow">
    <p className="mx-2">{props.name}</p>
    <p className="mx-2">{props.quantity}</p>
    <p className="mx-2">{props.price.toFixed(2)}</p>
  </div> );
}

export default ProductCard;