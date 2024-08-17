import { Rating } from '@smastrom/react-rating';

import '@smastrom/react-rating/style.css';
const ProductCard = ({ product }) => {
  const {
    ProductImage,
    ProductName,
    Description,
    Ratings,
    Price,
    ProductDate,
  } = product;
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

      <div className="flex mt-2 justify-between items-center">
        <p>Price : {Price}$</p>
        <p className="mt-2">Date: {ProductDate}</p>
      </div>
      <Rating
        className="text-center text-xl mt-3"
        style={{ maxWidth: 250 }}
        value={Ratings}
        readOnly
      />
      <button className="btn w-full mt-4 bg-[#D35400] text-white">
        Add to card
      </button>
    </div>
  );
};

export default ProductCard;
