import Navbar from "./scenes/navbar";
import Sidebar from "./scenes/sidebar";
import Dashboard from "./scenes/dashboard";
function App() {
  return (
    <>
      <div className="flex ">
        <div className="border-r border-[#DBDBDB] ">
          <Sidebar />
        </div>
        <div className="w-screen ">
          <Navbar />
          <Dashboard />
        </div>
      </div>
    </>
  );
}

export default App;
