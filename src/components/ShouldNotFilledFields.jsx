import { useState } from "react";
import { Modal } from "./shared/Modal";
const ShouldNotFilledFields = ({
  initState,
  inputChange,
}) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className='flex animate-smoothOpening'>
      <div className='flex flex-col flex-initial w-6/12'>
        <div className='divBorder'>
          <label className='label' htmlFor='29'>
            Debtor Id
          </label>
          <input
            className='input'
            id='29'
            type='text'
            placeholder='...'
            value={initState.debtorId}
            onChange={(e) =>
              inputChange("debtorId", e.target.value)
            }
          />
        </div>

        <div className='divBorder'>
          Exchange Rate Information
          <label className='label' htmlFor='30'>
            Unit Currency
          </label>
          <input
            className='input'
            id='30'
            type='text'
            placeholder='...'
            value={
              initState.exchangeRateInformationUnitCurrency
            }
            onChange={(e) =>
              inputChange(
                "exchangeRateInformationUnitCurrency",
                e.target.value
              )
            }
          />
          <label className='label' htmlFor='31'>
            Exchange Rate
          </label>
          <input
            className='input'
            id='31'
            type='text'
            placeholder='...'
            value={
              initState.exchangeRateInformationExchangeRate
            }
            onChange={(e) =>
              inputChange(
                "exchangeRateInformationExchangeRate",
                e.target.value
              )
            }
          />
          <label className='label' htmlFor='32'>
            Contract Identification
          </label>
          <input
            className='input'
            id='32'
            type='text'
            placeholder='...'
            value={
              initState.exchangeRateInformationContractIdentification
            }
            onChange={(e) =>
              inputChange(
                "exchangeRateInformationContractIdentification",
                e.target.value
              )
            }
          />
          <label className='label' htmlFor='33'>
            Rate type
          </label>
          <input
            className='input'
            id='33'
            type='text'
            placeholder='...'
            value={
              initState.exchangeRateInformationRateType
            }
            onChange={(e) =>
              inputChange(
                "exchangeRateInformationRateType",
                e.target.value
              )
            }
          />
        </div>
        <div className='divBorder'>
          <label className='label' htmlFor='34'>
            Currency Of Transfer
          </label>
          <input
            className='input'
            id='34'
            type='text'
            placeholder='...'
            value={initState.currencyOfTransfer}
            onChange={(e) =>
              inputChange(
                "currencyOfTransfer",
                e.target.value
              )
            }
          />
        </div>
        <div className='divBorder'>
          <label className='label' htmlFor='50'>
            Creditor Agent Name
          </label>
          <input
            className='input'
            id='50'
            type='text'
            placeholder='...'
            value={initState.creditorAgentName}
            onChange={(e) =>
              inputChange(
                "creditorAgentName",
                e.target.value
              )
            }
          />
        </div>
        <div className='divBorder'>
          <label className='label' htmlFor='35'>
            Creditor Id
          </label>
          <input
            className='input'
            id='35'
            type='text'
            placeholder='...'
            value={initState.creditorId}
            onChange={(e) =>
              inputChange("creditorId", e.target.value)
            }
          />
        </div>
        <div className='divBorder'>
          <label className='label' htmlFor='36'>
            Creditor Name And Address
          </label>
          <input
            className='input'
            id='36'
            type='text'
            placeholder='...'
            value={initState.creditorNameAndAddress}
            onChange={(e) =>
              inputChange(
                "creditorNameAndAddress",
                e.target.value
              )
            }
          />
        </div>
        <div className='divBorder'>
          <label className='label' htmlFor='37'>
            Ultimate Creditor
          </label>
          <input
            className='input'
            id='37'
            type='text'
            placeholder='...'
            value={initState.ultimateCreditor}
            onChange={(e) =>
              inputChange(
                "ultimateCreditor",
                e.target.value
              )
            }
          />
        </div>
      </div>

      <div className='flex-initial w-6/12'>
        <div className='divBorder'>
          Ultimate Creditor Identification
          <label className='label' htmlFor='38'>
            Private Id
          </label>
          <input
            className='input'
            id='38'
            type='text'
            placeholder='...'
            value={
              initState.ultimateCreditorIdentificationPritaveId
            }
            onChange={(e) =>
              inputChange(
                "ultimateCreditorIdentificationPritaveId",
                e.target.value
              )
            }
          />
          <label className='label' htmlFor='39'>
            Organisation Id
          </label>
          <input
            className='input'
            id='39'
            type='text'
            placeholder='...'
            value={
              initState.ultimateCreditorIdentificationOrganisationId
            }
            onChange={(e) =>
              inputChange(
                "ultimateCreditorIdentificationOrganisationId",
                e.target.value
              )
            }
          />
        </div>

        <div className='divBorder'>
          <label className='label' htmlFor='40'>
            Purpose Code
          </label>
          <input
            className='input'
            id='40'
            type='text'
            placeholder='...'
            value={initState.purposeCode}
            onChange={(e) =>
              inputChange("purposeCode", e.target.value)
            }
          />
        </div>

        <div className='divBorder'>
          <label className='label' htmlFor='41'>
            Service Level
          </label>
          <input
            className='input'
            id='41'
            type='text'
            placeholder='...'
            value={initState.serviceLevel}
            onChange={(e) =>
              inputChange("serviceLevel", e.target.value)
            }
          />
        </div>

        <div className='divBorder'>
          Remittance Information Structured
          <label className='label' htmlFor='42'>
            Reference
          </label>
          <input
            className='input'
            id='42'
            type='text'
            placeholder='...'
            value={
              initState.remittanceInformationStructuredReference
            }
            onChange={(e) =>
              inputChange(
                "remittanceInformationStructuredReference",
                e.target.value
              )
            }
          />
          <label className='label' htmlFor='43'>
            Reference Type
          </label>
          <input
            className='input'
            id='43'
            type='text'
            placeholder='...'
            value={
              initState.remittanceInformationStructuredReferenceType
            }
            onChange={(e) =>
              inputChange(
                "remittanceInformationStructuredReferenceType",
                e.target.value
              )
            }
          />
          <label className='label' htmlFor='44'>
            Reference Issuer
          </label>
          <input
            className='input'
            id='44'
            type='text'
            placeholder='...'
            value={
              initState.remittanceInformationStructuredReferenceIssuer
            }
            onChange={(e) =>
              inputChange(
                "remittanceInformationStructuredReferenceIssuer",
                e.target.value
              )
            }
          />
        </div>

        <div className='divBorder'>
          <label className='label' htmlFor='45'>
            Remittance Information Structured Array
          </label>
          <button
            onClick={() => setShowModal(true)}
            id='45'
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded'
          >
            Add
          </button>
        </div>
        <div className='divBorder'>
          <label className='label' htmlFor='46'>
            Additional Information
          </label>
          <input
            className='input'
            id='46'
            type='text'
            placeholder='...'
            value={initState.additionalInformation}
            onChange={(e) =>
              inputChange(
                "additionalInformation",
                e.target.value
              )
            }
          />
        </div>
        <div className='divBorder'>
          <label className='label' htmlFor='47'>
            Requested Execution Date
          </label>
          <input
            className='input'
            id='47'
            type='text'
            placeholder='...'
            value={initState.requestedExecutionDate}
            onChange={(e) =>
              inputChange(
                "requestedExecutionDate",
                e.target.value
              )
            }
          />
        </div>
        <div className='divBorder'>
          <label className='label' htmlFor='48'>
            Requested Execution Time
          </label>
          <input
            className='input'
            id='48'
            type='text'
            placeholder='...'
            value={initState.requestedExecutionTime}
            onChange={(e) =>
              inputChange(
                "requestedExecutionTime",
                e.target.value
              )
            }
          />
        </div>
      </div>
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </div>
  );
};

export default ShouldNotFilledFields;
