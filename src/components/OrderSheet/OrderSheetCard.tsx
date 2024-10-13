import { ProductOrder } from "../../models/ProductOrder";
import { OrderState } from "../../models/enums/OrderState";

interface Props {
  orderState: OrderState,
  openBy: string,
  tableId: number,
  productOrders: Array<ProductOrder>
  customerId: number
}

function OrderSheetCard(props: Props) {
  return ( <div className="p-3 my-2 border rounded shadow">
    <div>
      <p>{props.openBy}</p>
      <p>{props.customerId}</p>
    </div>
    <p>{props.orderState}</p>
  </div> );
}

export default OrderSheetCard;