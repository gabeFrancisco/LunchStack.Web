import { useState } from "react";
import api from "../../service/api";

function DashboardPage() {
  const [result, setResult] = useState("dsas");
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
