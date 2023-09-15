import { useState } from 'react';
import { Modal } from '../RedirectModal';
import {
  handleMakePostRequest,
  handleMakeForeignPostRequest,
  handleMakeBulkPostRequest,
} from '../../helpers/apiHelpers';

const BottomNavigation = ({ initState, setInitState, paymentTypeIndex, setPaymentTypeIndex, setLoad }) => {
  // only Bulkpayments should be in array, so we store it only this time
  const [bulkpaymentarray, setBulkPaymentArray] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date());
  const formattedDate = currentDate.toISOString().split('T')[0];
  const [testLink, setTestLink] = useState(null);

  const makeDataForBulk = () => {
    const data = {
      batchBookingPreferred: true,
      debtorAccount: {
        iban: 'GE61PC0133600100071105',
        currency: 'GEL',
      },
      requestedExecutionDate: formattedDate,
      payments: bulkpaymentarray,
    };
    return data;
  };

  const makeBulkData = () => {
    const data = {
      additionalInformation: initState.additionalInformation,
      chargeBearer: initState.chargeBearer,
      creditorAccount: {
        iban: initState.creditorAccountIban,
        currency: initState.creditorAccountCurrency,
        other: { identification: initState.creditorAccountOtherIdentification },
      },
      creditorAddress: {
        streetName: initState.creditorAddressStreetName,
        buildingNumber: initState.creditorAddressBuildingNumber,
        townName: initState.creditorAddressTownName,
        postCode: initState.creditorAddressPostCode,
        country: initState.creditorAddressCountry,
      },
      creditorAgent: initState.creditorAgent,
      creditorAgentName: initState.creditorAgentName,
      creditorId: initState.creditorId,
      creditorIdentification: {
        organisationId: {
          others: [{ identification: initState.creditorIdentificationOrganisationId }],
        },
        privateId: {
          others: [{ identification: initState.creditorIdentificationPrivateId }],
        },
      },
      creditorName: initState.creditorName,
      creditorNameAndAddress: initState.creditorNameAndAddress,
      currencyOfTransfer: initState.currencyOfTransfer,

      // debtorAccount: {
      //   iban: initState.debtorAccountIban,
      //   currency: initState.debtorAccountCurrency,
      //   other: {},
      // },

      debtorIdentification: {
        organisationId: {
          others: [{ identification: initState.debtorIdentificationOrganisationId }],
        },
        privateId: {
          others: [{ identification: initState.debtorIdentificationPrivateId }],
        },
      },

      debtorId: initState.debtorId,
      debtorName: initState.debtorName,
      endToEndIdentification: initState.endToEndIdentification,
      exchangeRateInformation: {
        contractIdentification: initState.exchangeRateInformationContractIdentification,
        exchangeRate: initState.exchangeRateInformationExchangeRate,
        rateType: initState.exchangeRateInformationRateType,
        unitCurrency: initState.exchangeRateInformationUnitCurrency,
      },
      instructedAmount: {
        amount: initState.instructedAmountAmount,
        currency: initState.intructedAmountCurrency,
      },
      instructionIdentification: initState.instructionIdentification,
      instructionPriority: initState.instructionPriority,
      purposeCode: initState.purposeCode,
      remittanceInformationStructured: {
        reference: initState.remittanceInformationStructuredReference,
        referenceIssuer: initState.remittanceInformationStructuredReferenceIssuer,
        referenceType: initState.remittanceInformationStructuredReferenceType,
      },

      // aq chasasmelia remittanceInformationStructuredArray

      remittanceInformationUnstructured: initState.remittanceInformationUnstructured,
      remittanceInformationUnstructuredArray: initState.remittanceInformationUnstructuredArray,
      requestedExecutionDate: initState.requestedExecutionDate,
      requestedExecutionTime: initState.requestedExecutionTime,
      serviceLevel: initState.serviceLevel,
      ultimateCreditor: initState.ultimateCreditor,

      ultimateCreditorIdentification: {
        organisationId: {
          others: [{ identification: initState.ultimateCreditorIdentificationOrganisationId }],
        },
        privateId: {
          others: [{ identification: initState.ultimateCreditorIdentificationPritaveId }],
        },
      },
      ultimateDebtor: initState.ultimateDebtor,
      ultimateDebtorIdentification: {
        organisationId: {
          others: [{ identification: initState.ultimateDebtorIdentificationOrganisationId }],
        },
        privateId: {
          others: [{ identification: initState.ultimateDebtorIdentificationPrivateId }],
        },
      },
    };
    return data;
  };

  // build data for backend
  const makeData = () => {
    const data = {
      additionalInformation: initState.additionalInformation,
      chargeBearer: initState.chargeBearer,
      creditorAccount: {
        iban: initState.creditorAccountIban,
        currency: initState.creditorAccountCurrency,
        other: { identification: initState.creditorAccountOtherIdentification },
      },
      creditorAddress: {
        streetName: initState.creditorAddressStreetName,
        buildingNumber: initState.creditorAddressBuildingNumber,
        townName: initState.creditorAddressTownName,
        postCode: initState.creditorAddressPostCode,
        country: initState.creditorAddressCountry,
      },
      creditorAgent: initState.creditorAgent,
      creditorAgentName: initState.creditorAgentName,
      creditorId: initState.creditorId,
      creditorIdentification: {
        organisationId: {
          others: [{ identification: initState.creditorIdentificationOrganisationId }],
        },
        privateId: {
          others: [{ identification: initState.creditorIdentificationPrivateId }],
        },
      },
      creditorName: initState.creditorName,
      creditorNameAndAddress: initState.creditorNameAndAddress,
      currencyOfTransfer: initState.currencyOfTransfer,
      debtorAccount: {
        iban: initState.debtorAccountIban,
        currency: initState.debtorAccountCurrency,
        other: {},
      },
      debtorId: initState.debtorId,
      debtorIdentification: {
        organisationId: {
          others: [{ identification: initState.debtorIdentificationOrganisationId }],
        },
        privateId: {
          others: [{ identification: initState.debtorIdentificationPrivateId }],
        },
      },
      debtorName: initState.debtorName,
      endToEndIdentification: initState.endToEndIdentification,
      exchangeRateInformation: {
        contractIdentification: initState.exchangeRateInformationContractIdentification,
        exchangeRate: initState.exchangeRateInformationExchangeRate,
        rateType: initState.exchangeRateInformationRateType,
        unitCurrency: initState.exchangeRateInformationUnitCurrency,
      },
      instructedAmount: {
        amount: initState.instructedAmountAmount,
        currency: initState.intructedAmountCurrency,
      },
      instructionIdentification: initState.instructionIdentification,
      instructionPriority: initState.instructionPriority,
      purposeCode: initState.purposeCode,
      remittanceInformationStructured: {
        reference: initState.remittanceInformationStructuredReference,
        referenceIssuer: initState.remittanceInformationStructuredReferenceIssuer,
        referenceType: initState.remittanceInformationStructuredReferenceType,
      },

      // aq chasasmelia remittanceInformationStructuredArray

      remittanceInformationUnstructured: initState.remittanceInformationUnstructured,
      remittanceInformationUnstructuredArray: initState.remittanceInformationUnstructuredArray,
      requestedExecutionDate: initState.requestedExecutionDate,
      requestedExecutionTime: initState.requestedExecutionTime,
      serviceLevel: initState.serviceLevel,
      ultimateCreditor: initState.ultimateCreditor,

      ultimateCreditorIdentification: {
        organisationId: {
          others: [{ identification: initState.ultimateCreditorIdentificationOrganisationId }],
        },
        privateId: {
          others: [{ identification: initState.ultimateCreditorIdentificationPritaveId }],
        },
      },
      ultimateDebtor: initState.ultimateDebtor,
      ultimateDebtorIdentification: {
        organisationId: {
          others: [{ identification: initState.ultimateDebtorIdentificationOrganisationId }],
        },
        privateId: {
          others: [{ identification: initState.ultimateDebtorIdentificationPrivateId }],
        },
      },
    };
    return data;
  };

  const handleSendRequest = async () => {
    let response = undefined;
    if (paymentTypeIndex === 1) {
      setLoad(true);
      response = handleMakePostRequest(
        makeData(),
        (data) => {
          setLoad(false);
          setTestLink(data.paymentId);
          setShowModal(true);
        },
        () => setLoad(false)
      );
    } else if (paymentTypeIndex === 2) {
      setLoad(true);
      response = await handleMakeForeignPostRequest(
        makeData(),
        (data) => {
          setLoad(false);
          setTestLink(data.paymentId);
          setShowModal(true);
        },
        () => setLoad(false)
      );
    } else if (paymentTypeIndex === 3) {
      setLoad(true);
      response = await handleMakeBulkPostRequest(
        makeDataForBulk(),
        (data) => {
          setLoad(false);
          setTestLink(data.paymentId);
          setShowModal(true);
        },
        () => setLoad(false)
      );
    }
  };

  const clickBudgetPayment = () => {
    setBulkPaymentArray([]);
    setPaymentTypeIndex(1);
    setInitState({
      // MainQuestions Section
      debtorAccountIban: '',
      debtorAccountCurrency: '',
      instructedAmountAmount: '100.00',
      intructedAmountCurrency: 'GEL',
      creditorAccountIban: '',
      creditorAccountCurrency: 'GEL',
      creditorAccountOtherIdentification: '101001000',
      creditorName: '',
      remittanceInformationUnstructured: '',
      remittanceInformationUnstructuredArray: [],

      // SecondaryQuestions Section
      endToEndIdentification: '',
      instructionIdentification: '',
      debtorName: '',
      debtorIdentificationPrivateId: '',
      debtorIdentificationOrganisationId: '',
      ultimateDebtor: '',
      ultimateDebtorIdentificationPrivateId: '',
      ultimateDebtorIdentificationOrganisationId: '',
      creditorAgent: 'TRESGE22',
      creditorIdentificationPrivateId: '',
      creditorIdentificationOrganisationId: '',
      creditorAddressStreetName: '',
      creditorAddressBuildingNumber: '',
      creditorAddressTownName: '',
      creditorAddressPostCode: '',
      creditorAddressCountry: '',
      chargeBearer: '',
      instructionPriority: '',

      // fields which should not be filled
      debtorId: '',
      exchangeRateInformationUnitCurrency: '',
      exchangeRateInformationExchangeRate: '',
      exchangeRateInformationContractIdentification: '',
      exchangeRateInformationRateType: '',
      currencyOfTransfer: '',
      creditorAgentName: '',
      creditorId: '',
      creditorNameAndAddress: '',
      ultimateCreditor: '',
      ultimateCreditorIdentificationPritaveId: '',
      ultimateCreditorIdentificationOrganisationId: '',
      purposeCode: '',
      serviceLevel: '',
      remittanceInformationStructuredReference: '',
      remittanceInformationStructuredReferenceType: '',
      remittanceInformationStructuredReferenceIssuer: '',
      remittanceInformationStructuredArray: '',
      additionalInformation: '',
      requestedExecutionDate: '',
      requestedExecutionTime: '',
    });
  };
  const clickForeignPayment = () => {
    setBulkPaymentArray([]);
    setPaymentTypeIndex(2);
    setInitState({
      // MainQuestions Section
      debtorAccountIban: '',
      debtorAccountCurrency: '',
      instructedAmountAmount: '1200000',
      intructedAmountCurrency: 'USD',
      creditorAccountIban: 'TR470006200106500009095381',
      creditorAccountCurrency: 'USD',
      creditorAccountOtherIdentification: '',
      creditorName: 'TEST',
      remittanceInformationUnstructured: 'Private Transfer',
      remittanceInformationUnstructuredArray: [],

      // SecondaryQuestions Section
      endToEndIdentification: '',
      instructionIdentification: '',
      debtorName: '',
      debtorIdentificationPrivateId: '',
      debtorIdentificationOrganisationId: '',
      ultimateDebtor: '',
      ultimateDebtorIdentificationPrivateId: '',
      ultimateDebtorIdentificationOrganisationId: '',
      creditorAgent: 'TGBATRISXXX',
      creditorIdentificationPrivateId: '',
      creditorIdentificationOrganisationId: '',
      creditorAddressStreetName: 'Via Aldo Moro',
      creditorAddressBuildingNumber: '12',
      creditorAddressTownName: 'Napoli',
      creditorAddressPostCode: '',
      creditorAddressCountry: 'Italy',
      chargeBearer: '',
      instructionPriority: '',

      // fields which should not be filled
      debtorId: '',
      exchangeRateInformationUnitCurrency: '',
      exchangeRateInformationExchangeRate: '',
      exchangeRateInformationContractIdentification: '',
      exchangeRateInformationRateType: '',
      currencyOfTransfer: '',
      creditorAgentName: 'TURKIYE GARANTI BANKASI A.S',
      creditorId: '',
      creditorNameAndAddress: '',
      ultimateCreditor: '',
      ultimateCreditorIdentificationPritaveId: '',
      ultimateCreditorIdentificationOrganisationId: '',
      purposeCode: '',
      serviceLevel: '',
      remittanceInformationStructuredReference: '',
      remittanceInformationStructuredReferenceType: '',
      remittanceInformationStructuredReferenceIssuer: '',
      remittanceInformationStructuredArray: '',
      additionalInformation: 'handle transaction with OBB system',
      requestedExecutionDate: '',
      requestedExecutionTime: '',
    });
  };

  const clickBulkPayment = () => {
    setPaymentTypeIndex(3);
    setInitState({
      // MainQuestions Section
      debtorAccountIban: 'GE61PC0133600100071166',
      debtorAccountCurrency: 'GEL',
      instructedAmountAmount: '7000.00',
      intructedAmountCurrency: 'GEL',
      creditorAccountIban: 'GE61TB7885036010300009',
      creditorAccountCurrency: 'GEL',
      creditorAccountOtherIdentification: '',
      creditorName: 'Nia Salukvadze',
      remittanceInformationUnstructured: 'ნაშთის გადატანა',
      remittanceInformationUnstructuredArray: [],

      // SecondaryQuestions Section
      endToEndIdentification: '500',
      instructionIdentification: '',
      debtorName: '',
      debtorIdentificationPrivateId: '',
      debtorIdentificationOrganisationId: '',
      ultimateDebtor: '',
      ultimateDebtorIdentificationPrivateId: '',
      ultimateDebtorIdentificationOrganisationId: '',
      creditorAgent: 'TBCBGE22',
      creditorIdentificationPrivateId: '',
      creditorIdentificationOrganisationId: '',
      creditorAddressStreetName: 'Kazbegi',
      creditorAddressBuildingNumber: '12',
      creditorAddressTownName: 'Tbilisi',
      creditorAddressPostCode: '',
      creditorAddressCountry: 'Georgia',
      chargeBearer: 'DEBT',
      instructionPriority: 'NORM',

      // fields which should not be filled
      debtorId: '',
      exchangeRateInformationUnitCurrency: '',
      exchangeRateInformationExchangeRate: '',
      exchangeRateInformationContractIdentification: '',
      exchangeRateInformationRateType: '',
      currencyOfTransfer: '',
      creditorAgentName: '',
      creditorId: '',
      creditorNameAndAddress: '',
      ultimateCreditor: '',
      ultimateCreditorIdentificationPritaveId: '',
      ultimateCreditorIdentificationOrganisationId: '',
      purposeCode: '',
      serviceLevel: '',
      remittanceInformationStructuredReference: '',
      remittanceInformationStructuredReferenceType: '',
      remittanceInformationStructuredReferenceIssuer: '',
      remittanceInformationStructuredArray: '',
      additionalInformation: '',
      requestedExecutionDate: '',
      requestedExecutionTime: '',
    });
  };

  const clearState = () => {
    setInitState({
      // MainQuestions Section
      debtorAccountIban: '',
      debtorAccountCurrency: '',
      instructedAmountAmount: '',
      intructedAmountCurrency: '',
      creditorAccountIban: '',
      creditorAccountCurrency: '',
      creditorAccountOtherIdentification: '',
      creditorName: '',
      remittanceInformationUnstructured: '',
      remittanceInformationUnstructuredArray: [],

      // SecondaryQuestions Section
      endToEndIdentification: '',
      instructionIdentification: '',
      debtorName: '',
      debtorIdentificationPrivateId: '',
      debtorIdentificationOrganisationId: '',
      ultimateDebtor: '',
      ultimateDebtorIdentificationPrivateId: '',
      ultimateDebtorIdentificationOrganisationId: '',
      creditorAgent: '',
      creditorIdentificationPrivateId: '',
      creditorIdentificationOrganisationId: '',
      creditorAddressStreetName: '',
      creditorAddressBuildingNumber: '',
      creditorAddressTownName: '',
      creditorAddressPostCode: '',
      creditorAddressCountry: '',
      chargeBearer: '',
      instructionPriority: '',

      // fields which should not be filled
      debtorId: '',
      exchangeRateInformationUnitCurrency: '',
      exchangeRateInformationExchangeRate: '',
      exchangeRateInformationContractIdentification: '',
      exchangeRateInformationRateType: '',
      currencyOfTransfer: '',
      creditorAgentName: '',
      creditorId: '',
      creditorNameAndAddress: '',
      ultimateCreditor: '',
      ultimateCreditorIdentificationPritaveId: '',
      ultimateCreditorIdentificationOrganisationId: '',
      purposeCode: '',
      serviceLevel: '',
      remittanceInformationStructuredReference: '',
      remittanceInformationStructuredReferenceType: '',
      remittanceInformationStructuredReferenceIssuer: '',
      remittanceInformationStructuredArray: '',
      additionalInformation: '',
      requestedExecutionDate: '',
      requestedExecutionTime: '',
    });
  };

  const addBulkPaymentInArray = () => {
    setBulkPaymentArray((prev) => [...prev, makeBulkData()]);
  };

  return (
    <div className='w-full mt-2 flex justify-around mb-8'>
      <button
        onClick={clickBudgetPayment}
        className='bg-button2 hover:bg-button2Hover text-white font-bold py-1 px-4 rounded'
      >
        Budget
      </button>
      <button
        onClick={clickForeignPayment}
        className='bg-button2 hover:bg-button2Hover text-white font-bold py-1 px-4 rounded'
      >
        Foreign
      </button>
      <div className='relative'>
        <button
          onClick={paymentTypeIndex === 3 ? addBulkPaymentInArray : clickBulkPayment}
          className='bg-button2 hover:bg-button2Hover text-white font-bold py-1 px-4 rounded'
        >
          {paymentTypeIndex === 3 ? 'Add Bulk Item' : 'Bulk'}
        </button>
        {paymentTypeIndex === 3 && (
          <span className='absolute bottom-4 left-32 bg-red-500 text-white w-5 h-5 flex items-center justify-center rounded-full'>
            {bulkpaymentarray.length}
          </span>
        )}
      </div>
      <button onClick={clearState} className='bg-button1 hover:bg-green-700 text-white font-bold py-1 px-4 rounded'>
        Clear
      </button>
      <button
        onClick={handleSendRequest}
        className='bg-button1 hover:bg-green-700 text-white font-bold py-1 px-4 rounded'
      >
        Submit
      </button>
      {showModal && (
        <div className='fixed top-0 left-0 w-full h-full flex items-center justify-center'>
          <Modal showModal={showModal} setShowModal={setShowModal} testLink={testLink} />
        </div>
      )}
    </div>
  );
};

export default BottomNavigation;
