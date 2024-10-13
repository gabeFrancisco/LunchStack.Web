import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { getAllOrderSheetsAsync } from "../../store/slices/orderSheetSlice";
import Skeleton from "react-loading-skeleton";
import OrderSheetCard from "./OrderSheetCard";

function OrderSheetList() {
  const dispatch = useAppDispatch();
  const orderSheets = useAppSelector(
    (state) => state.orderSheets.orderSheetList
  );
  useEffect(() => {
    dispatch(getAllOrderSheetsAsync());
  }, []);
  return (
    <div className="flex flex-col w-full">
      {orderSheets.length > 0 ? (
        orderSheets.map((el, index) => (
          <OrderSheetCard
          key={index}
            customerId={el.customerId!}
            openBy={el.openBy!}
            orderState={el.orderState}
            productOrders={el.productOrders}
            tableId={el.tableId}
          />
        ))
      ) : (
        <Skeleton height="2rem" className="w-full my-2" count={3} />
      )}
    </div>
  );
}

export default OrderSheetList;
