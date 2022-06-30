import "./App.css";
import SideBar from "./SideBar";
import Content from "./Content";
function App() {
  return (
    <div className="flex bg-gray-500 w-screen h-screen">
      <SideBar />
      <Content />
    </div>
  );
}

export default App;
