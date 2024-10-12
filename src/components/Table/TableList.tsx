import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { getAllTablesAsync } from "../../store/slices/tableSlice";
import Skeleton from "react-loading-skeleton";
import TableCard from "./TableCard";

function TableList() {
  const dispatch = useAppDispatch();
  const tables = useAppSelector((state) => state.tables.tableList);
  useEffect(() => {
    dispatch(getAllTablesAsync());
  }, []);
  return (
    <div className="grid w-full grid-cols-3 gap-4">
      {tables.length > 0 ? (
        tables.map((el, index) => (
          <TableCard number={el.number} chairs={el.chairs} isBusy={el.isBusy} key={index}/>
        ))
      ) : (
        <Skeleton height="2rem" className="w-full my-2" count={3} />
      )}
    </div>
  );
}

export default TableList;
