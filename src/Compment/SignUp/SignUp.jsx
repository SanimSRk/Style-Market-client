import axios from 'axios';
import { useForm } from 'react-hook-form';
import useAuth from '../../Hooks/useAuth';
import { FcGoogle } from 'react-icons/fc';
import useAxiosPublice from '../../Hooks/useAxiosPublice';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const SignUp = () => {
  const axiosPublice = useAxiosPublice();
  const navigate = useNavigate();
  const [error, seterror] = useState('');
  const {
    handileClickSignUp,
    handileClickUpdateProfile,
    handileClicksignWithGoogle,
  } = useAuth();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = data => {
    console.log(data);
    const { fullName, email, photo, password } = data;
    const img = photo[0];
    const formData = new FormData();
    formData.append('image', img);

    axios
      .post(
        `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMAGE_KEY}`,
        formData
      )
      .then(res => {
        console.log(res.data.data.display_url);
        const image = res?.data?.data?.display_url;
        const userInfo = {
          fullName,
          email,
          image,
          role: 'user',
        };
        handileClickSignUp(email, password)
          .then(res => {
            console.log(res?.user);
            if (res.user) {
              handileClickUpdateProfile(fullName, image).then(res => {
                axiosPublice.post('sign-user', userInfo).then(res => {
                  console.log(res.data);
                  navigate('/');
                });
              });
            }
          })
          .catch(error => {
            console.log(error);
            seterror(error.message);
          });
      });
  };
  const handileClickGoogle = () => {
    handileClicksignWithGoogle().then(res => {
      console.log(res.user);
      const userInfo = {
        fullName: res?.user?.displayName,
        image: res?.user?.photoURL,
        email: res?.user?.email,
        role: 'user',
      };
      if (res.user) {
        navigate('/');
        axiosPublice.post('/google-sign', userInfo).then(res => {
          console.log(res.data);
        });
      }
    });
  };
  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-gray-100 py-[100px]">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md border border-[#D35400]">
          <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full input input-bordered text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-[#D35400]"
                id="name"
                type="text"
                placeholder="Enter your name"
                style={{ borderColor: '#D35400' }}
                {...register('fullName', { required: true })}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
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
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="photo"
              >
                Photo
              </label>
              <input
                className="shadow appearance-none border rounded w-full  input input-bordered text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-green-500"
                id="photo"
                type="file"
                placeholder="Upload your photo"
                style={{ borderColor: '#D35400' }}
                {...register('photo', { required: true })}
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
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
            <p className="text-center text-red-600 font-semibold">{error}</p>
            <div className="flex items-center justify-between mb-4">
              <button
                className="bg-gradient-to-r btn w-full bg-[#D35400] text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Sign Up
              </button>
            </div>
          </form>
          <div>
            <button onClick={handileClickGoogle} className="btn w-full">
              <FcGoogle className="text-3xl" /> Sign wiht google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
