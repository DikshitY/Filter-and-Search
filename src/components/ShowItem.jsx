function ShowItem({item}){
    return <div className="w-72 shadow-md rounded-xl">
        <img src={item.image} className="w-full rounded-t-xl"/>
        <div className="p-4 ">
            <p className="mb-4 text-xl font-bold">{item.name}</p>
            <p><span>Rs. </span>{item.price}</p>
            <p>{item.inStock ? 'In Stock' : 'Out of Stock'}</p>
            <p>{item.level}</p>
            <p>{item.fastDelivery ? 'Fast Delivery' : '3 days minimum'}</p>
        </div>
    </div>
}

export default ShowItem;