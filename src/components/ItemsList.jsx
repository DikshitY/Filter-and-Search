import { useSelector } from "react-redux";
import ShowItem from "./ShowItem";

function ItemsList() {
  const { data, checkBox, radio } = useSelector(
    ({ items, filter: { checkBox, radio } }) => {
      return {
        data: items,
        checkBox,
        radio,
      };
    }
  );

  let filteredData;

   let displayData = data.filter((item) => {
      if (checkBox[1] && checkBox[0]) {
        if (item.fastDelivery && !item.inStock) {
          return item;
        }
      } else if (checkBox[0]) {
        return !item.inStock;
      } else if (checkBox[1]) {
        return item.fastDelivery;
      } else {
        return item;
      }
    });

    if(radio === "highToLow"){
        filteredData = displayData.sort((a,b) => {
            return Number(b.price) - Number(a.price)
        })
    }else if(radio === "lowToHigh"){
        filteredData = displayData.sort((a,b) => {
            return Number(a.price) - Number(b.price)
        })
    }else{
        filteredData = displayData;
    }

  const renderData = filteredData.map((item) => (
    <ShowItem item={item} key={item.id} />
  ));

  return <div className="flex flex-wrap gap-6 justify-center mb-12">{renderData}</div>;
}

export default ItemsList;
