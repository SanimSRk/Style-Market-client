import Banner from '../Banner/Banner';
import useAxiosPublice from '../../Hooks/useAxiosPublice';
import { useEffect, useState } from 'react';
import Select from 'react-select';
import { useQuery } from '@tanstack/react-query';
import ProductCard from './ProductCard';

const Home = () => {
  const axiosPublice = useAxiosPublice();
  const [showsProduct, setShowsProduct] = useState([]);

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

  const handileClickBrand = e => {
    console.log(e.target.value);
    const brand = e.target.value;
    axiosPublice.get(`/brand-name?brand=${brand}`).then(res => {
      console.log('click data brand name', res.data);
      setShowsProduct(res.data);
    });
  };
  const handileClickCategoryName = e => {
    console.log(e.target.value);
    const brand = e.target.value;
    axiosPublice.get(`/brand-name?brand=${brand}`).then(res => {
      console.log('click data brand name', res.data);
      setShowsProduct(res.data);
    });
  };
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
      </div>
      <div className="gap-3 lg:gap-4 grid grid-cols-2 lg:grid-cols-3 justify-between lg:w-2/3 mx-auto my-6">
        <select
          placeholder="Brand"
          className="border-2 p-2 lg:p-4"
          onChange={handileClickBrand}
          id="ddlViewBy"
        >
          <option disabled selected>
            Brand
          </option>
          <option value="SoundTech">SoundTech</option>
          <option value="TechWorld">TechWorld</option>
          <option value="FitWear">FitWear</option>
          <option value="CompuPro">CompuPro</option>
          <option value="HomeBrew">HomeBrew</option>
          <option value="HealthGear">HealthGear</option>
          <option value="VisionPro">VisionPro</option>
          <option value="KitchenMaster">KitchenMaster</option>
          <option value="SmileTech">SmileTech</option>
          <option value="GameX">GameX</option>
          <option value="YogaFlex">YogaFlex</option>
          <option value="TimeTech">TimeTech</option>
          <option value="SoundWave">SoundWave</option>
          <option value="ReadSmart">ReadSmart</option>
          <option value="BoilMaster">BoilMaster</option>
          <option value="EcoHome">EcoHome</option>
          <option value="CleanMaster">CleanMaster</option>
          <option value="CookPro">CookPro</option>
          <option value="CampSafe">CampSafe</option>
          <option value="AirGuard">AirGuard</option>
          <option value="Canon">Canon</option>
          <option value="George Foreman">George Foreman</option>
          <option value="Osprey">Osprey</option>
          <option value="Anker">Anker</option>
          <option value="Philips">Philips</option>
          <option value="Sony">Sony</option>
          <option value="Ninja">Ninja</option>
          <option value="Philips Hue">Philips Hue</option>
          <option value="Giant">Giant</option>
          <option value="Segway">Segway</option>
          <option value="Instant Pot">Instant Pot</option>
          <option value="August">August</option>
          <option value="Belkin">Belkin</option>
          <option value="iRobot">iRobot</option>
          <option value="Jabra">Jabra</option>
          <option value="Trek">Trek</option>
          <option value="Columbia">Columbia</option>
          <option value="Logitech">Logitech</option>
          <option value="Honeywell">Honeywell</option>
          <option value="Theragun">Theragun</option>
        </select>
        <select
          placeholder="Brand"
          className="border-2 p-2 lg:p-4"
          onChange={handileClickBrand}
          id="ddlViewBy"
        >
          <option disabled selected>
            Category Name
          </option>
          <option value="Electronics">Electronics</option>
          <option value="Clothing">Clothing</option>
          <option value="Home Appliances">Home Appliances</option>
          <option value="Sports">Sports</option>
          <option value="Books">Books</option>
          <option value="Health & Fitness">Health & Fitness</option>
          <option value="Beauty">Beauty</option>
          <option value="Toys & Games">Toys & Games</option>
          <option value="Automotive">Automotive</option>
          <option value="Furniture">Furniture</option>
          <option value="Garden">Garden</option>
          <option value="Office Supplies">Office Supplies</option>
          <option value="Pet Supplies">Pet Supplies</option>
          <option value="Jewelry">Jewelry</option>
          <option value="Travel">Travel</option>
          <option value="Music">Music</option>
          <option value="Photography">Photography</option>
          <option value="Food & Beverage">Food & Beverage</option>
          <option value="Outdoor">Outdoor</option>
          <option value="Software">Software</option>
        </select>
        <select
          placeholder="Brand"
          className="border-2 p-2 lg:p-4"
          onChange={handileClickBrand}
          id="ddlViewBy"
        >
          <option disabled selected>
            Brand
          </option>
          <option value="SoundTech">SoundTech</option>
          <option value="TechWorld">TechWorld</option>
          <option value="FitWear">FitWear</option>
          <option value="CompuPro">CompuPro</option>
          <option value="HomeBrew">HomeBrew</option>
          <option value="HealthGear">HealthGear</option>
          <option value="VisionPro">VisionPro</option>
          <option value="KitchenMaster">KitchenMaster</option>
          <option value="SmileTech">SmileTech</option>
          <option value="GameX">GameX</option>
          <option value="YogaFlex">YogaFlex</option>
          <option value="TimeTech">TimeTech</option>
          <option value="SoundWave">SoundWave</option>
          <option value="ReadSmart">ReadSmart</option>
          <option value="BoilMaster">BoilMaster</option>
          <option value="EcoHome">EcoHome</option>
          <option value="CleanMaster">CleanMaster</option>
          <option value="CookPro">CookPro</option>
          <option value="CampSafe">CampSafe</option>
          <option value="AirGuard">AirGuard</option>
          <option value="Canon">Canon</option>
          <option value="George Foreman">George Foreman</option>
          <option value="Osprey">Osprey</option>
          <option value="Anker">Anker</option>
          <option value="Philips">Philips</option>
          <option value="Sony">Sony</option>
          <option value="Ninja">Ninja</option>
          <option value="Philips Hue">Philips Hue</option>
          <option value="Giant">Giant</option>
          <option value="Segway">Segway</option>
          <option value="Instant Pot">Instant Pot</option>
          <option value="August">August</option>
          <option value="Belkin">Belkin</option>
          <option value="iRobot">iRobot</option>
          <option value="Jabra">Jabra</option>
          <option value="Trek">Trek</option>
          <option value="Columbia">Columbia</option>
          <option value="Logitech">Logitech</option>
          <option value="Honeywell">Honeywell</option>
          <option value="Theragun">Theragun</option>
        </select>
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
