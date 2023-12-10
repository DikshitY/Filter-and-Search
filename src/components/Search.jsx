import { useSelector, useDispatch } from "react-redux";
import { changeSearchTerm, searchFilter } from "../store";

function Search() {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => state.filter.searchTerm);

  const handleInputChange = (event) => {
    dispatch(changeSearchTerm(event.target.value));
  };

  const changeDisplay = (e) => {
    e.preventDefault()
    dispatch(searchFilter(searchTerm));
  };

  return (
    <div>
        <h1 className="bg-orange-600 text-white font-bold text-4xl p-3 text-center">Filter and Search</h1>
      <form onSubmit={changeDisplay} className="my-8 flex justify-center items-center">
        <label htmlFor="search" className="mr-2 text-xl font-semibold">Search: </label>
        <input
          id="search"
          type="text"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={handleInputChange}
          className="border p-2 outline-none rounded"
        />
        <button className="ml-12 border bg-slate-500 text-white px-6 py-1 rounded font-semibold hover:bg-slate-600">Search</button>
      </form>
    </div>
  );
}

export default Search;
