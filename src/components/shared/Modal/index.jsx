export const Modal = ({ showModal, setShowModal }) => {
  return (
    <div>
      {showModal && <div className='fixed inset-0 bg-black opacity-40 z-40'></div>}
      <div
        className={`fixed inset-0 flex items-start justify-center z-50 mt-40 ${
          showModal ? 'opacity-100' : 'opacity-0 pointer-events-none'
        } transition-opacity duration-300 ease-in-out`}
      >
        <div className='bg-white w-2/5 p-4 rounded shadow-lg'>
          <div className='text-xl font-bold mb-4'>Modal Title</div>
          <p>This is the modal content.</p>
          <button
            onClick={() => setShowModal(false)}
            className='bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 mt-4 rounded'
          >
            Close
          </button>
          <button
            onClick={() => setShowModal(false)}
            className='bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 mt-4 rounded ml-8'
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};
