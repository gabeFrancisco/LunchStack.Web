import { createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import { OrderSheet } from "../../models/OrderSheet"
import { OrderState } from "../../models/enums/OrderState"
import { ProductOrder } from "../../models/ProductOrder"
import ajaxAdapter from "../../service/ajaxAdapter"

export interface OrderSheetState{
  orderSheet: OrderSheet,
  orderSheetList: Array<OrderSheet>
}

const initialState: OrderSheetState = {
  orderSheet: {
    orderState: OrderState.ON_PREPARATION,
    table: {
      chairs: 0,
      isBusy: false,
      number: 0,
    },
    customer: {
      name: "",
    },
    customerId: 0,
    productOrders: new Array<ProductOrder>(),
    tableId: 0,
  },
  orderSheetList: new Array<OrderSheet>()
}

export const getAllOrderSheetsAsync = createAsyncThunk(
  "orderSheets/add",
  async () => 
    await ajaxAdapter.get("/ordersheets").then((res) => {
      if(res.status === 200){
        return res.data;
      }
    })
)

export const OrderSheetSlice = createSlice({
  name: "OrderSheets",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllOrderSheetsAsync.fulfilled, (state, action) => {
      state.orderSheetList = action.payload
    })
  }
})

export default OrderSheetSlice.reducer;
export const {} = OrderSheetSlice.actions;
