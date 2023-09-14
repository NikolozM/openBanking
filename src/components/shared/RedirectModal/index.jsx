export const Modal = ({ showModal, setShowModal, testLink, developersLink }) => {
  return (
    <div>
      {showModal && <div className='fixed inset-0 bg-black opacity-40 z-40'></div>}
      <div
        className={`fixed inset-0 flex items-start justify-center z-50 mt-40 ${
          showModal ? 'opacity-100' : 'opacity-0 pointer-events-none'
        } transition-opacity duration-300 ease-in-out`}
      >
        <div className='bg-white w-2/5 p-4 rounded shadow-lg'>
          {testLink && (
            <div>
              <p>{testLink}</p>
              <a
                target='_blank'
                href={`https://openbanking.24-7.ge/?ui_locales=ka&scope=PIS:${testLink}&response_type=code&state=da4336d2-f854-4318-877a-80e6ac3590bf&redirect_uri=https:%2F%2Fapi.procreditbank.ge&code_challenge_method=S256&nonce=2e59a5228b0fa5a69b1cc8ee11d2b827&code_challenge=SEM1j5LMisJdJ-tt6RsDaWYdUsKapr2e_qffxYON4d4&client_id=PSDGE-NBG-MIBGGE22`}
              >
                ავტორიზაციის ბმული
              </a>
              <a
                target='_blank'
                href={`http://localhost:3000?ui_locales=ka&scope=PIS:${testLink}&response_type=code&state=da4336d2-f854-4318-877a-80e6ac3590bf&redirect_uri=https:%2F%2Fapi.procreditbank.ge&code_challenge_method=S256&nonce=2e59a5228b0fa5a69b1cc8ee11d2b827&code_challenge=SEM1j5LMisJdJ-tt6RsDaWYdUsKapr2e_qffxYON4d4&client_id=PSDGE-NBG-MIBGGE22`}
              >
                დეველოპერის ავტორიზაციის ბმული
              </a>
            </div>
          )}

          <div className='flex justify-end'>
            <button
              onClick={() => setShowModal(false)}
              className='bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-2 mt-4 rounded'
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
