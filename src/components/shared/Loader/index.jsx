import React from 'react';

function LoaderWithApi({ loader, children }) {
  return (
    <div className='relative m-auto w-full'>
      {loader && (
        <div className='text-amber-600 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10'>
          <div
            className='h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]'
            role='status'
          ></div>
        </div>
      )}
      <div
        className={`bg-bg-color1 w-9/12 flex flex-col items-center m-auto shadow-md shadow-stone-300 rounded-xl ${
          loader ? 'blur' : ''
        }`}
      >
        {children}
      </div>
    </div>
  );
}

export default LoaderWithApi;
