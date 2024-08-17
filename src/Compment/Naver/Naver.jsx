import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Naver = () => {
  const { user, handileClickLogout } = useAuth();
  const handileclickLogoutsUser = () => {
    handileClickLogout();
  };
  return (
    <div>
      <div className="navbar bg-[#D35400] text-white">
        <div className="flex-1">
          <img
            className="w-14 bg-white h-14 rounded-full"
            src="/FuturePowerMarket-Favicon.png"
            alt=""
          />
          <a className="btn btn-ghost text-xl font-bold">StyleMarket</a>
        </div>
        <div className="flex-none gap-4">
          {user ? (
            <>
              <div className="dropdown dropdown-end text-black">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full">
                    <img
                      alt="Tailwind CSS Navbar component"
                      src={user?.photoURL}
                    />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                >
                  <li>
                    <a className="justify-between">
                      {user.displayName || ' undefined'}
                      <span className="badge">New</span>
                    </a>
                  </li>
                  <li>
                    <a>Settings</a>
                  </li>
                  <li onClick={handileclickLogoutsUser}>
                    <a>Logout</a>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <>
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
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Naver;
