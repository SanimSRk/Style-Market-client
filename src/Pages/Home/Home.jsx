import Banner from '../Banner/Banner';
import useAxiosPublice from '../../Hooks/useAxiosPublice';
import { useState } from 'react';
import Select from 'react-select';
import { useQuery } from '@tanstack/react-query';
import ProductCard from './ProductCard';

const options1 = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];
const options2 = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];
const options3 = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];
const Home = () => {
  const axiosPublice = useAxiosPublice();
  const [showsProduct, setShowsProduct] = useState([]);
  const [selectedOption1, setSelectedOption1] = useState(null);
  const [selectedOption2, setSelectedOption2] = useState(null);
  const [selectedOption3, setSelectedOption3] = useState(null);

  const { data } = useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      const { data } = await axiosPublice.get('/product-data');
      setShowsProduct(data);
      return data;
    },
  });

  const handileClickSearch = e => {
    e.preventDefault();
    console.log(e.target.search.value);
    const search = e.target.search.value;
    axiosPublice.get(`/search-products?search=${search}`).then(res => {
      console.log(res.data);
      setShowsProduct(res.data);
    });
  };

  console.log(showsProduct);
  return (
    <div className="mt-1 mb-[100px]">
      <div>
        <Banner></Banner>
      </div>
      <div className="navbar  bg-[#D35400]  justify-center  mx-auto mt-2">
        <div className="">
          <form onSubmit={handileClickSearch}>
            <div className=" flex items-center">
              <input
                className="shadow appearance-none  border-2 rounded-lg w-full  md:w-[300px] lg:w-[380px]  input input-bordered text-gray-700 leading-tight focus:outline-none rounded-r-none"
                id="search"
                type="search"
                name="search"
                placeholder="Search your products......"
              />
              <button
                type="submit"
                className="btn  bg-[#2C3E50] text-whitess text-white font-semibold rounded-l-none"
              >
                Search
              </button>
            </div>
          </form>
        </div>
        <div className="gap-3 lg:gap-4">
          <Select
            className="bg-[#D35400]"
            placeholder="Brand"
            defaultValue={selectedOption1}
            onChange={setSelectedOption1}
            options={options1}
          />
          <Select
            className="bg-[#D35400]"
            placeholder="Category"
            defaultValue={selectedOption2}
            onChange={setSelectedOption2}
            options={options2}
          />
          <Select
            className="bg-[#D35400]"
            placeholder="Price"
            defaultValue={selectedOption3}
            onChange={setSelectedOption3}
            options={options3}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-6 lg:grid-cols-3 gap-6">
        {showsProduct?.map(product => (
          <ProductCard key={product._id} product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
