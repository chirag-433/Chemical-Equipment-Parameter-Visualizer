import Upload from "./components/Upload";
import History from "./components/History";
import "./App.css";

function App() {
  return (
    <div className="app-root">
      <header className="app-header">
        <h1 className="app-title">Chemical Equipment Visualizer</h1>
        <p className="app-subtitle">
          Upload process data and review computed equipment summaries.
        </p>
      </header>

      <main className="app-main">
        <section className="card upload-card">
          <h2 className="card-title">Upload CSV</h2>
          <p className="card-description">
            CSV must include columns: <strong>Equipment Name</strong>,{" "}
            <strong>Type</strong>, <strong>Flowrate</strong>,{" "}
            <strong>Pressure</strong>, <strong>Temperature</strong>.
          </p>
          <Upload />
        </section>

        <section className="card history-card">
          <h2 className="card-title">Upload History</h2>
          <History />
        </section>
      </main>
    </div>
  );
}

export default App;
