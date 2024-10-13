import { createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import { OrderSheet } from "../../models/OrderSheet"
import { OrderState } from "../../models/enums/OrderState"
import { ProductOrder } from "../../models/ProductOrder"

export interface OrderSheetState{
  orderSheet: OrderSheet,
  orderSheetList: Array<OrderSheet>
}

const initialState: OrderSheetState = {
  orderSheet: {
    orderState: OrderState.ON_PREPARATION,
    productOrders: new Array<ProductOrder>(),
    tableId: 0,
  },
  orderSheetList: new Array<OrderSheet>()
}

export const OrderSheetSlice = createSlice({
  name: "OrderSheets",
  initialState,
  reducers: {},
  extraReducers: (builder) => {}
})

export default OrderSheetSlice.reducer;
export const {} = OrderSheetSlice.actions;
