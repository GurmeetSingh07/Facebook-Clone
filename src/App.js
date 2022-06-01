import "./App.css";

import Header from "./components/Header";
import LeftSidebar from "./components/LeftSidebar";
import Story from "./components/Story";

function App() {
  return (
    <div>
      <Header />
      <div className="main">
        <LeftSidebar />
        <Story />
      </div>
    </div>
  );
}

export default App;
