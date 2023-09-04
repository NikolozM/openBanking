import { Modal } from "../components/shared/Modal";
import { useState } from "react";

const MainQuestions = ({
  initState,
  setInitState,
  inputChange,
}) => {
  const [showModal, setShowModal] = useState(false);

  const addUnstructuredArrayInfo = (value, setValue) => {
    if (value) {
      setInitState((prev) => ({
        ...prev,
        remittanceInformationUnstructuredArray: [
          ...prev.remittanceInformationUnstructuredArray,
          value,
        ],
      }));
      setValue("");
    }
  };

  console.log(initState);
  return (
    <div className='flex animate-smoothOpening'>
      <div className='flex flex-col flex-initial w-6/12'>
        <div className='divBorder'>
          Debtor Account
          <label className='label' htmlFor='1'>
            Iban
          </label>
          <input
            className='input'
            id='1'
            type='text'
            placeholder='...'
            value={initState.debtorAccountIban}
            onChange={(e) =>
              inputChange(
                "debtorAccountIban",
                e.target.value
              )
            }
          />
          <label className='label' htmlFor='2'>
            Currency
          </label>
          <input
            className='input'
            id='2'
            type='text'
            placeholder='...'
            value={initState.debtorAccountCurrency}
            onChange={(e) =>
              inputChange(
                "debtorAccountCurrency",
                e.target.value
              )
            }
          />
        </div>

        <div className='divBorder'>
          Instructed Amount
          <label className='label' htmlFor='3'>
            Amount
          </label>
          <input
            className='input'
            id='3'
            type='text'
            placeholder='...'
            value={initState.instructedAmountAmount}
            onChange={(e) =>
              inputChange(
                "instructedAmountAmount",
                e.target.value
              )
            }
          />
          <label className='label' htmlFor='4'>
            Currency
          </label>
          <input
            className='input'
            id='4'
            type='text'
            placeholder='...'
            value={initState.intructedAmountCurrency}
            onChange={(e) =>
              inputChange(
                "intructedAmountCurrency",
                e.target.value
              )
            }
          />
        </div>
      </div>

      <div className='flex-initial w-6/12'>
        <div className='divBorder'>
          Creditor Account
          <label className='label' htmlFor='5'>
            Iban
          </label>
          <input
            className='input '
            id='5'
            type='text'
            placeholder='...'
            value={initState.creditorAccountIban}
            onChange={(e) =>
              inputChange(
                "creditorAccountIban",
                e.target.value
              )
            }
          />
          <label className='label' htmlFor='6'>
            Currency
          </label>
          <input
            className='input'
            id='6'
            type='text'
            placeholder='...'
            value={initState.creditorAccountCurrency}
            onChange={(e) =>
              inputChange(
                "creditorAccountCurrency",
                e.target.value
              )
            }
          />
          <label className='label' htmlFor='7'>
            Other Identification
          </label>
          <input
            className='input'
            id='7'
            type='text'
            placeholder='...'
            value={
              initState.creditorAccountOtherIdentification
            }
            onChange={(e) =>
              inputChange(
                "creditorAccountOtherIdentification",
                e.target.value
              )
            }
          />
        </div>

        <div className='divBorder'>
          <label className='label' htmlFor='8'>
            Creditor Name
          </label>
          <input
            className='input'
            id='8'
            type='text'
            placeholder='...'
            value={initState.creditorName}
            onChange={(e) =>
              inputChange("creditorName", e.target.value)
            }
          />
        </div>
        <div className='divBorder'>
          <label className='label' htmlFor='9'>
            Remittance Information Unstructured
          </label>
          <input
            className='input'
            id='9'
            type='text'
            placeholder='...'
            value={
              initState.remittanceInformationUnstructured
            }
            onChange={(e) =>
              inputChange(
                "remittanceInformationUnstructured",
                e.target.value
              )
            }
          />
        </div>
        <div className='divBorder'>
          <label className='label' htmlFor='10'>
            Remittance Information Unstructured Array
          </label>
          {initState.remittanceInformationUnstructuredArray.map(
            (item, index) => (
              <p className='label' key={`item-${index}`}>
                {index + 1}
                {") "}
                {item}
              </p>
            )
          )}
          <button
            onClick={() => setShowModal(true)}
            id='10'
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded'
          >
            Add
          </button>
        </div>
      </div>
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        confirmation={addUnstructuredArrayInfo}
        input
      />
    </div>
  );
};

export default MainQuestions;
