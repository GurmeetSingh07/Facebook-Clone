import "./App.css";
import DisplayStory from "./components/DisplayStory";

import Header from "./components/Header";
import LeftSidebar from "./components/LeftSidebar";
import Middle from "./components/Middle";

import RightSidebar from "./components/RightSidebar";
import Story from "./components/Story";

function App() {
  return (
    <div>
      <Header />

      <div className="main">
        <LeftSidebar />
        <DisplayStory />
        <RightSidebar />
      </div>
    </div>
  );
}

export default App;
