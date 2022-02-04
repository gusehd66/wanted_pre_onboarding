import "./App.css";
import AutoComplete from "./component/AutoComplete";
import ClickToEdit from "./component/ClickToEdit";
import Modal from "./component/Modal";
import Tab from "./component/Tab";
import Tag from "./component/Tag";
import Toggle from "./component/Toggle";

function App() {
  return (
    <div className="App">
      <AutoComplete />
      <ClickToEdit />
      <Modal />
      <Tab />
      <Tag />
      <Toggle />
    </div>
  );
}

export default App;
