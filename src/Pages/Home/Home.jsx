import Banner from '../Banner/Banner';
import useAxiosPublice from '../../Hooks/useAxiosPublice';
import { useEffect, useState } from 'react';
import Select from 'react-select';
import { useQuery } from '@tanstack/react-query';
import ProductCard from './ProductCard';

const Home = () => {
  const axiosPublice = useAxiosPublice();
  const [showsProduct, setShowsProduct] = useState([]);
  const [itemPages, setItemsPages] = useState(9);
  const [curreentPages, setCureentPages] = useState(1);
  const [counts, setCounts] = useState(0);
  console.log(itemPages);
  const numberOfPages = Math.ceil(counts / itemPages);
  let pages = [];
  console.log(pages, numberOfPages);
  for (let i = 0; i < numberOfPages; i++) {
    pages.push(i + 1);
  }
  // const { data } = useQuery({
  //   queryKey: ['products'],
  //   queryFn: async () => {
  //     const { data } = await axiosPublice.get('/product-data');
  //     setShowsProduct(data);
  //     return data;
  //   },
  // });

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
    const category = e.target.value;
    axiosPublice.get(`/category-name?category=${category}`).then(res => {
      console.log('click data category', res.data);
      setShowsProduct(res?.data);
    });
  };

  const handileClickPriceSort = e => {
    console.log(e.target.value);
  };

  const handileClickLoewstHigest = e => {
    if (e.target.value === 'lowest') {
      axiosPublice.get('/price-lowest').then(res => {
        console.log(res.data);
        setShowsProduct(res.data);
      });
    }
    if (e.target.value === 'higest') {
      axiosPublice.get('/price-higest').then(res => {
        console.log(res.data);
        setShowsProduct(res.data);
      });
    }
  };

  const handileClickDateNew = e => {
    if (e.target.value === 'newDate') {
      axiosPublice.get('/news-firstDate').then(res => {
        console.log(res.data);
        setShowsProduct(res.data);
      });
    }
    if (e.target.value === 'oldDate') {
      axiosPublice.get('/old-dates').then(res => {
        console.log(res.data);
        setShowsProduct(res.data);
      });
    }
  };
  //--------------------- pagi nation section ------------------
  useEffect(() => {
    axiosPublice.get('/product-count').then(res => {
      console.log(res.data);
      setCounts(res.data.result);
    });
  }, []);
  useEffect(() => {
    axiosPublice
      .get(`/product-pagenation?page=${curreentPages - 1}&size=${itemPages}`)
      .then(res => {
        setShowsProduct(res.data);
      });
  }, [itemPages, curreentPages, counts]);

  const handileItemPage = e => {
    console.log(e.target.value);
    const vale = parseInt(e.target.value);
    setItemsPages(vale);
    setCureentPages(1);
  };
  const handileClikPrev = () => {
    if (curreentPages > 1) {
      setCureentPages(curreentPages - 1);
    }
  };
  const handileClickNext = () => {
    if (curreentPages < pages?.length) {
      setCureentPages(curreentPages + 1);
    }
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
      <div className="gap-3 lg:gap-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 lg:justify-around  justify-between mx-auto my-6">
        <select
          placeholder="Brand"
          className="border-2 p-2 lg:p-4"
          onChange={handileClickBrand}
          id="ddlViewBy"
        >
          <option disabled selected>
            Brand Name
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
          onChange={handileClickCategoryName}
          id="ddlViewBy"
        >
          <option disabled selected>
            Category Name
          </option>
          <option value="Electronics">Electronics</option>
          <option value="Footwear">Footwear</option>
          <option value="Home Appliances">Home Appliances</option>
          <option value="Health & Fitness">Health & Fitness</option>
          <option value="Kitchen Appliances">Kitchen Appliances</option>
          <option value="Personal Care">Personal Care</option>
          <option value="Outdoor Gear">Outdoor Gear</option>
          <option value="Home Decor">Home Decor</option>
          <option value="Home Security">Home Security</option>
        </select>
        <select
          placeholder="Brand"
          className="border-2 p-2 lg:p-4"
          onChange={handileClickPriceSort}
          id="ddlViewBy"
        >
          <option disabled selected>
            Brand
          </option>
          <option aria-valuemin="5" aria-valuemax="100">
            $5 - $100
          </option>
        </select>
        <select
          placeholder="Sorting"
          className="border-2 p-2 lg:p-4"
          onChange={handileClickLoewstHigest}
          id="ddlViewBy"
        >
          <option disabled selected>
            Sorting product
          </option>
          <option value={'lowest'}>Low to High</option>
          <option value={'higest'}> High to Low</option>
        </select>
        <select
          placeholder="Sorting Date"
          className="border-2 p-2 lg:p-4"
          onChange={handileClickDateNew}
          id="ddlViewBy"
        >
          <option disabled selected>
            Sorting Date
          </option>
          <option value={'newDate'}> Newest first</option>
          <option value={'oldDate'}> Newest first</option>
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-6 lg:grid-cols-3 gap-6">
        {showsProduct?.map(product => (
          <ProductCard key={product._id} product={product}></ProductCard>
        ))}
      </div>
      <div>
        <div className="justify-center flex gap-4 mt-12">
          <button
            onClick={handileClikPrev}
            className="btn bg-[#D35400] text-white"
          >
            Prev
          </button>
          {pages?.map(item => (
            <button
              onClick={() => setCureentPages(item)}
              className={
                curreentPages === item
                  ? 'bg-[#D35400] text-white font-semibold btn'
                  : 'btn font-semibold '
              }
              key={item}
            >
              {item}{' '}
            </button>
          ))}
          <button
            onClick={handileClickNext}
            className="btn bg-[#D35400] text-white"
          >
            Next
          </button>
          <select value={itemPages} onChange={handileItemPage} name="" id="">
            <option value="6">6</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="11">12</option>
            <option value="14">14</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Home;
