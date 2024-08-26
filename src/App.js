import "./App.css";
import logo from "./logo.svg";
import Sidebar from "./sideBar/Sidebar";
import Topbar from  "./topBar/Topbar";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className="content">
        <Topbar />
      </div>
    </div>
  );
}

export default App;
