import { useState } from "react";
import api from "../../service/api";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

function DashboardPage() {
  const [result, setResult] = useState("Ready!");
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
      
    </div>
  );
}

export default DashboardPage;
