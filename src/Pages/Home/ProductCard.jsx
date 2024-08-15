const ProductCard = ({ product }) => {
  const { ProductImage, ProductName, Description, Ratings, Price } = product;
  return (
    <div className="rounded-lg p-6 shadow-md  grid items-end bg-base-100">
      <div className=" grid justify-center">
        <img
          className="object-cover w-60 object-center text-center"
          src={ProductImage}
          alt=""
        />
      </div>
      <p className="text-xl font-bold mt-3">{ProductName}</p>
      <p className=" mt-2">{Description}</p>
      <div className="flex mt-2 justify-between">
        <p>Price : {Price}$</p>
        <p>Rating : {Ratings}</p>
      </div>
      <button className="btn w-full mt-4 bg-[#D35400] text-white">
        Add to card
      </button>
    </div>
  );
};

export default ProductCard;
