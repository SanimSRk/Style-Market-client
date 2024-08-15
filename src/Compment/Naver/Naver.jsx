import { Link } from 'react-router-dom';

const Naver = () => {
  return (
    <div>
      <div className="navbar bg-[#2C3E50] text-white">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl font-bold">StyleMarket</a>
        </div>
        <div className="flex-none gap-4">
          <div className="gap-6 flex">
            <Link to={'/login'}>
              <button className="btn bg-[#D35400] border-none text-white">
                Login
              </button>
            </Link>
            <Link to={'/signup'}>
              <button className="btn bg-[#D35400] border-none text-white">
                Signup
              </button>
            </Link>
          </div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Naver;
