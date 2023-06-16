import Navbar from "./scenes/navbar";
import Sidebar from "./scenes/sidebar";

function App() {
  return (
    <div className="flex">
      <div>
        <Sidebar />
      </div>
      <div className="w-screen">
        <Navbar />
      </div>
    </div>
  );
}

export default App;
