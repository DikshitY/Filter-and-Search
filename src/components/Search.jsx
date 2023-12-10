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
        <h1 className="bg-orange-600 text-white font-bold text-xl sm:text-4xl p-3 text-center">Filter and Search</h1>
      <form onSubmit={changeDisplay} className="form sm:my-8 my-4 flex justify-center flex-wrap items-center">
        <label htmlFor="search" className="mr-2 text-xl font-semibold">Search: </label>
        <input
          id="search"
          type="text"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={handleInputChange}
          className="border p-2 outline-none rounded mr-8"
        />
        <button className="mt-3 sm:ml-12 border bg-slate-500 text-white px-6 py-1 rounded font-semibold hover:bg-slate-600 mb-3">Search</button>
      </form>
    </div>
  );
}

export default Search;
