import { useSelector, useDispatch } from "react-redux";
import {
  changeCheckBox1,
  changeCheckBox2,
  changeRadio,
} from "../store";

function Filter() {
  const dispatch = useDispatch();
  const { radio, checkBox } = useSelector(({ filter: { radio, checkBox } }) => {
    return {
      radio,
      checkBox,
    };
  });

  const handleCheckbox1 = (e) => {
      dispatch(changeCheckBox1(e.target.checked));
  };

  const handleCheckbox2 = (e) => {
      dispatch(changeCheckBox2(e.target.checked));
  };

  return (
    <div className="flex justify-start gap-12 mb-4 sm:mb-12 sm:ml-20 p-4">
      <div className="flex flex-col">
        <p className="font-semibold mb-2">Sort by:-</p>
        <label  className="text-xs sm:text-base">
          <input
            type="radio"
            name="radio-check"
            value="highToLow"
            onChange={() => dispatch(changeRadio("highToLow"))}
          />
          Price - High to Low
        </label>
        <label className="text-xs sm:text-base">
          <input
            type="radio"
            name="radio-check"
            value="lowToHigh"
            onChange={() => dispatch(changeRadio("lowToHigh"))}
          />
          Price - Low to High
        </label>
      </div>
      <div className="flex flex-col">
        <p className="font-semibold mb-2">Filter by:-</p>
        <label className="text-xs sm:text-base">
          <input
            type="checkbox"
            value={checkBox[0]}
            onChange={handleCheckbox1}
          />
          Include Out of Stock
        </label>
        <label className="text-xs sm:text-base">
          <input
            type="checkbox"
            value={checkBox[1]}
            onChange={handleCheckbox2}
          />
          Fast Delivery Only
        </label>
      </div>
    </div>
  );
}

export default Filter;
