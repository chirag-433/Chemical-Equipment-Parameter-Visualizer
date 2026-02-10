import React, { useEffect, useState } from "react";
import api from "../api";
import Charts from "./Charts";

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

          <table className="summary-table">
            <thead>
              <tr>
                <th>Records</th>
                <th>Avg Flowrate</th>
                <th>Avg Pressure</th>
                <th>Avg Temperature</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{item.summary.total_records}</td>
                <td>{item.summary.avg_flowrate.toFixed(2)}</td>
                <td>{item.summary.avg_pressure.toFixed(2)}</td>
                <td>{item.summary.avg_temperature.toFixed(2)}</td>
              </tr>
            </tbody>
          </table>

          <Charts summary={item.summary} />
        </li>
      ))}
    </ul>
  );
}

export default History;
