import "./styles.css";
import Header from "./Header/Header";
import List from "./Components/ToDoList";
export default function App() {
  return (
    <div className="Application">
     <Header/>
     <List/>
    </div>
  );
}
