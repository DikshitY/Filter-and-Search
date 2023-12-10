import { useSelector } from "react-redux";
import Search from "./components/Search";
import Filter from "./components/Filter";
import ItemsList from "./components/ItemsList";

function App() {
  const data = useSelector((state) => state.items.data);

  return (
    <div>
      <Search />
      <Filter />
      <ItemsList />
    </div>
  );
}

export default App;
