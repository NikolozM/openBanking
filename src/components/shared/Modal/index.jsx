import { useState } from 'react';

export const Modal = ({ showModal, setShowModal, confirmation, input }) => {
  const [value, setValue] = useState('');

  const confirmButtonAction = () => {
    confirmation && confirmation(value, setValue), setShowModal(false);
  };
  return (
    <div>
      {showModal && <div className='fixed inset-0 bg-black opacity-40 z-40'></div>}
      <div
        className={`fixed inset-0 flex items-start justify-center z-50 mt-40 ${
          showModal ? 'opacity-100' : 'opacity-0 pointer-events-none'
        } transition-opacity duration-300 ease-in-out`}
      >
        <div className='bg-white w-2/5 p-4 rounded shadow-lg'>
          {/* <div className='text-xl font-bold mb-4'>
            Modal Title
          </div> */}
          <p>This is the modal content.</p>

          {input && (
            <div>
              <input
                className='input'
                id='70'
                type='text'
                placeholder='...'
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
            </div>
          )}

          <div className='flex justify-end'>
            <button
              onClick={() => setShowModal(false)}
              className='bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-2 mt-4 rounded'
            >
              Close
            </button>
            <button
              onClick={confirmButtonAction}
              className='bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-2 mt-4 rounded ml-8'
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
