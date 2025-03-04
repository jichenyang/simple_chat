import React from "react";
import GenderCheckbox from "./GenderCheckbox";
import { Link } from "react-router-dom";
import { useState } from "react";
import useSignUp from "../../hooks/useSignUp.js";

const SignUp = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const { loading, signup } = useSignUp();

  const handleCheckboxChange = (gender) => {
    setInputs({ ...inputs, gender: gender });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs);
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-green-300 bg-clip-padding backdrop-filter backfrop-blur-lg bg-opacity-50">
        <h1 className="text-3xl font-semibold text-center text-gray-100 h-full w-full rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 border border-gray-100">
          Sign Up
          <span className="text-blue-500"> SimpleChat</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="John Young"
              className="w-full input input-bordered h-10"
              value={inputs.fullName}
              onChange={(e) =>
                setInputs({ ...inputs, fullName: e.target.value })
              }
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="johnyoung"
              className="w-full input input-bordered h-10"
              value={inputs.username}
              onChange={(e) =>
                setInputs({ ...inputs, username: e.target.value })
              }
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full input input-bordered h-10"
              value={inputs.password}
              onChange={(e) =>
                setInputs({ ...inputs, password: e.target.value })
              }
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Confirm Password</span>
            </label>
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full input input-bordered h-10"
              value={inputs.confirmPassword}
              onChange={(e) =>
                setInputs({ ...inputs, confirmPassword: e.target.value })
              }
            />
          </div>

          <GenderCheckbox
            onCheckboxChange={handleCheckboxChange}
            selectedGender={inputs.gender}
          />

          <Link
            to={"/login"}
            className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block"
          >
            Already have an account?
          </Link>

          <div>
            <button
              className="btn btn-block btn-sm mt-2 border-slate-500"
              disabled={loading}
            >
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "Sign Up"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;

// STARTER CODE FOR THIS FILE
// const SignUp = () => {
//   return (
//     <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
//       <div className="w-full p-6 rounded-lg shadow-md bg-green-300 bg-clip-padding backdrop-filter backfrop-blur-lg bg-opacity-50">
//         <h1 className="text-3xl font-semibold text-center text-gray-100 h-full w-full rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 border border-gray-100">
//           Sign Up
//           <span className='text-blue-500'> SimpleChat</span>
//         </h1>
//
//         <form>
//           <div>
//             <label className='label p-2'>
//               <span className='text-base label-text'>Full Name</span>
//             </label>
//             <input type="text" placeholder='John Young' className='w-full input input-bordered h-10' />
//           </div>
//           <div>
//             <label className='label p-2'>
//               <span className='text-base label-text'>Username</span>
//             </label>
//             <input type="text" placeholder='johnyoung' className='w-full input input-bordered h-10' />
//           </div>
//           <div>
//             <label className='label p-2'>
//               <span className='text-base label-text'>Password</span>
//             </label>
//             <input type="password" placeholder='Enter Password' className='w-full input input-bordered h-10' />
//           </div>
//           <div>
//             <label className='label p-2'>
//               <span className='text-base label-text'>Confirm Password</span>
//             </label>
//             <input type="password" placeholder='Confirm Password' className='w-full input input-bordered h-10' />
//           </div>
//
//           {/* Gender checkbox here */}
//           <GenderCheckbox />
//
//           <a href="#" className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>
//             Already have an account?
//           </a>
//
//           <div>
//             <button className='btn btn-block btn-sm mt-2 border-slate-500'>Sign Up</button>
//           </div>
//
//         </form>
//
//       </div>
//     </div>
//   )
// }
//
// export default SignUp
//
