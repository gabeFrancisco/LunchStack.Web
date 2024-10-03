import { useEffect, useState } from "react";
import api from "../../service/api";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { getAllAsync } from "../../store/slices/categorySlice";

function DashboardPage() {
  const [result, setResult] = useState("Ready!");
  const dispatch = useAppDispatch();
  const categories = useAppSelector(state => state.categories.categoryList);

  useEffect(() => {
    dispatch(getAllAsync())
  }, [])

  const fetch = () => {
    api.get("/auth").then((res) => {
      if (res.status === 200) {
        setResult("Authorized!");
      } else {
        setResult("Token expired!");
      }
    });
  };
  return (
    <div>
      <SectionTitle title="Dashboard" subtitle="Visualize em tempo real informações sobre seu dia e negócio."/>
      <button
        type="button"
        onClick={fetch}
        className="px-2 py-1 border rounded"
      >
        Fetch!
      </button>
      <p>{result}</p>
      {categories.map((el, index) => (
        <p key={index}>{el.name}</p>
      ))}
      
    </div>
  );
}

export default DashboardPage;
