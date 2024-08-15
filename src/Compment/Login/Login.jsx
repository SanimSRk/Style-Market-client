import { useForm } from 'react-hook-form';

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = data => {
    console.log(data);
  };
  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-gray-100 py-[100px]">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md border border-[#D35400]">
          <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-4"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full  input input-bordered text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-green-500"
                id="email"
                type="email"
                placeholder="Enter your email"
                style={{ borderColor: '#D35400' }}
                {...register('email', { required: true })}
              />
            </div>

            <div className="mb-8">
              <label
                className="block text-gray-700 text-sm font-bold mb-2 mt-6"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full  input input-bordered text-gray-700 mb-3 leading-tight focus:outline-none focus:ring-2 focus:ring-green-500"
                id="password"
                type="password"
                placeholder="Enter your password"
                style={{ borderColor: '#D35400' }}
                {...register('password', { required: true })}
              />
            </div>
            {/* <p className="text-center text-red-600 font-semibold">{error}</p> */}
            <div className="flex items-center justify-between mb-4">
              <button
                className="bg-gradient-to-r btn w-full bg-[#D35400] text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Sign Up
              </button>
            </div>
          </form>
          {/* <div className="mt-4 text-center">
            <p className="text-gray-600 text-sm">
              Already have an account?{' '}
              <Link to={'/login'}>
                <a className="text-green-500 font-bold hover:text-green-800">
                  Login
                </a>
              </Link>
            </p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Login;
