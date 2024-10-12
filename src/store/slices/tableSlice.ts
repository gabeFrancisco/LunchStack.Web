import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Table } from '../../models/Table'
import ajaxAdapter from "../../service/ajaxAdapter";

export interface TableState{
  table: Table;
  tableList: Array<Table>
}

const initialState: TableState = {
  table: {
    id: 0,
    number: 0,
    chairs: 0,
    isBusy: false
  },
  tableList: new Array<Table>()
}

export const getAllTablesAsync = createAsyncThunk(
  "tables/getAll",
  async () => 
    await ajaxAdapter.get("/tables").then((res) => {
      if(res.status === 200){
        return res.data;
      }
    })
)

export const TableSlice = createSlice({
  name: "Tables",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllTablesAsync.fulfilled, (state, action) => {
      state.tableList = action.payload
    })
  }
})

export default TableSlice.reducer;
export const {} = TableSlice.actions