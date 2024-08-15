import { RiArrowDropDownLine } from 'react-icons/ri';
import Banner from '../Banner/Banner';

const Home = () => {
  return (
    <div className="mt-1 mb-[100px]">
      <div>
        <Banner></Banner>
      </div>
      <div className="navbar   bg-[#D35400] text-white lg:w-2/3 mx-auto mt-2">
        <div className="flex-1">
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
        </div>
        <div className=" navbar-end  lg:gap-4">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="lg:btn md:btn p-2  btn-ghost rounded-bt "
            >
              <span className="flex items-center">
                {' '}
                Category{' '}
                <RiArrowDropDownLine className=" text-xl lg:text-4xl" />
              </span>{' '}
            </div>
            <ul
              tabIndex={0}
              className="menu dropdown-content bg-[#D35400] rounded-box z-[1] mt-4 w-52 p-2 shadow"
            >
              <li>
                <a>Brand Name</a>
              </li>
              <li>
                <a>Category Name</a>
              </li>
              <li>
                <a>Price Range</a>
              </li>
            </ul>
          </div>
          <div className="dropdown dropdown-end ">
            <div
              tabIndex={0}
              role="button"
              className=" lg:btn md:btn p-2 btn-ghost rounded-btn "
            >
              <span className="flex items-center ">
                Sorting <RiArrowDropDownLine className=" text-xl lg:text-4xl" />
              </span>
            </div>
            <ul
              tabIndex={0}
              className="menu dropdown-content bg-[#D35400] rounded-box z-[1] mt-4 w-52 p-2 shadow"
            >
              <li>
                <a>Price</a>
              </li>
              <li>
                <a>Date Added</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
