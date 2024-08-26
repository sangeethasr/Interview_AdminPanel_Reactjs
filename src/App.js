import "./App.css";
import Dashboard from "./dashboard/Dashboard";
import Sidebar from "./sideBar/Sidebar";
import Topbar from  "./topBar/Topbar";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className="content">
        <Topbar />
        <hr className="horizontalLine" />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
