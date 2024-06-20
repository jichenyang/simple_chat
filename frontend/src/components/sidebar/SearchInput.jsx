import React from 'react';
import {IoSearchSharp} from 'react-icons/io5';

const SearchInput = () => {
  return (
    <form className='flex items-center gap-2'>
      <input type="text" placeholder='Search...' className='input m-1 input-bordered rounded-full' />
      <button type='submit' className='btn btn-circle bg-green-400 text-white'>
        <IoSearchSharp className='w-7 h-7 outline-none' />
      </button>
    </form>
  )
}

export default SearchInput


// START CODE FOR THIS FILE
// const SearchInput = () => {
//   return (
//     <form className='flex items-center gap-2'>
//       <input type="text" placeholder='Search...' className='input m-1 input-bordered rounded-full' />
//       <button type='submit' className='btn btn-circle bg-green-400 text-white'>
//         <IoSearchSharp className='w-7 h-7 outline-none' />
//       </button>
//     </form>
//   )
// }
// 
// export default SearchInput
// 