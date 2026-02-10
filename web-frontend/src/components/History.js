import React, { useEffect, useState } from "react";
import api from "../api";

function History() {
  const [data, setData] = useState([]);

  useEffect(() => {
    api
      .get("history/")
      .then((res) => setData(res.data))
      .catch((err) => console.error(err));
  }, []);

  if (!data.length) {
    return <p className="card-description">No datasets uploaded yet.</p>;
  }

  return (
    <ul className="history-list">
      {data.map((item) => (
        <li key={item.id} className="history-item">
          <h3 className="dataset-name">{item.name}</h3>
          <p className="dataset-meta">
            <span className="meta-pill">
              Records: <strong>{item.summary.total_records}</strong>
            </span>
            <span className="meta-pill">
              Flowrate: <strong>{item.summary.avg_flowrate.toFixed(2)}</strong>
            </span>
            <span className="meta-pill">
              Pressure: <strong>{item.summary.avg_pressure.toFixed(2)}</strong>
            </span>
            <span className="meta-pill">
              Temperature:{" "}
              <strong>{item.summary.avg_temperature.toFixed(2)}</strong>
            </span>
          </p>
        </li>
      ))}
    </ul>
  );
}

export default History;
