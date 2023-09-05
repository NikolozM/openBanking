import { handleMakePostRequest, handleMakeForeignPostRequest } from '../../helpers/apiHelpers';

const index = ({ setInitState, paymentTypeIndex, setPaymentTypeIndex }) => {
  const handleSendRequest = async () => {
    const data = {
      alo: '123',
    };

    const response = paymentTypeIndex === 2 ? await handleMakeForeignPostRequest(data) : handleMakePostRequest(data);

    if (response) {
      console.log(response);
    }
  };

  const clickBudgetPayment = () => {
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
      debtorAccountIban: 'GE12IPC198888777345',
      debtorAccountCurrency: 'GEL',
      instructedAmountAmount: '1200000',
      intructedAmountCurrency: 'USD',
      creditorAccountIban: 'GE170PCB123112333322',
      creditorAccountCurrency: 'EUR',
      creditorAccountOtherIdentification: '12IBCBLL',
      creditorName: 'Nuciko',
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

  return (
    <div className='w-full mt-2 flex justify-around mb-8'>
      <button
        onClick={clickBudgetPayment}
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded'
      >
        Budget
      </button>
      <button
        onClick={clickForeignPayment}
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded'
      >
        Foreign
      </button>
      <button
        onClick={clickBulkPayment}
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded'
      >
        Bulk
      </button>
      <button onClick={clearState} className='bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-4 rounded'>
        Clear
      </button>
      <button
        onClick={handleSendRequest}
        className='bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-4 rounded'
      >
        Submit
      </button>
    </div>
  );
};

export default index;
