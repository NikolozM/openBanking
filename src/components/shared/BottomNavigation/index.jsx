/* eslint-disable no-unused-vars */
const index = ({
  initState,
  setInitState,
  paymentTypeIndex,
  setPaymentTypeIndex,
}) => {
  const clickBudgetPayment = () => {
    setPaymentTypeIndex(1);
    setInitState({
      // MainQuestions Section
      debtorAccountIban: "GE12IPC198888777345",
      debtorAccountCurrency: "GEL",
      instructedAmountAmount: "1200000",
      intructedAmountCurrency: "USD",
      creditorAccountIban: "GE170PCB123112333322",
      creditorAccountCurrency: "EUR",
      creditorAccountOtherIdentification: "12IBCBLL",
      creditorName: "Nuciko",
      remittanceInformationUnstructured: "",
      remittanceInformationUnstructuredArray: [],

      // SecondaryQuestions Section
      endToEndIdentification: "1234",
      instructionIdentification: "4444",
      debtorName: "555555",
      debtorIdentificationPrivateId: "1231GBBKIWQDW",
      debtorIdentificationOrganisationId: "1231GBBKIWQ 55",
      ultimateDebtor: "1231GBBKIWQ 1231",
      ultimateDebtorIdentificationPrivateId:
        "1231GBBKIWQ 444",
      ultimateDebtorIdentificationOrganisationId:
        "1231GBBKIWQ 1231",
      creditorAgent: "1231GBBKIWQ qdq",
      creditorIdentificationPrivateId: "",
      creditorIdentificationOrganisationId: "",
      creditorAddressStreetName: "",
      creditorAddressBuildingNumber: "",
      creditorAddressTownName: "",
      creditorAddressPostCode: "",
      creditorAddressCountry: "",
      chargeBearer: "",
      instructionPriority: "",

      // fields which should not be filled
      debtorId: "",
      exchangeRateInformationUnitCurrency: "",
      exchangeRateInformationExchangeRate: "",
      exchangeRateInformationContractIdentification: "",
      exchangeRateInformationRateType: "",
      currencyOfTransfer: "",
      creditorId: "",
      creditorNameAndAddress: "",
      ultimateCreditor: "",
      ultimateCreditorIdentificationPritaveId: "",
      ultimateCreditorIdentificationOrganisationId: "",
      purposeCode: "",
      serviceLevel: "",
      remittanceInformationStructuredReference: "",
      remittanceInformationStructuredReferenceType: "",
      remittanceInformationStructuredReferenceIssuer: "",
      remittanceInformationStructuredArray: "",
      additionalInformation: "",
      requestedExecutionDate: "",
      requestedExecutionTime: "",
    });
  };
  const clickForeignPayment = () => {
    setPaymentTypeIndex(2);
    setInitState({
      // MainQuestions Section
      debtorAccountIban: "GE12IPC198888777345",
      debtorAccountCurrency: "GEL",
      instructedAmountAmount: "1200000",
      intructedAmountCurrency: "USD",
      creditorAccountIban: "GE170PCB123112333322",
      creditorAccountCurrency: "EUR",
      creditorAccountOtherIdentification: "12IBCBLL",
      creditorName: "Nuciko",
      remittanceInformationUnstructured: "",
      remittanceInformationUnstructuredArray: [],

      // SecondaryQuestions Section
      endToEndIdentification: "",
      instructionIdentification: "",
      debtorName: "",
      debtorIdentificationPrivateId: "",
      debtorIdentificationOrganisationId: "",
      ultimateDebtor: "",
      ultimateDebtorIdentificationPrivateId: "",
      ultimateDebtorIdentificationOrganisationId: "",
      creditorAgent: "",
      creditorIdentificationPrivateId: "",
      creditorIdentificationOrganisationId: "",
      creditorAddressStreetName: "",
      creditorAddressBuildingNumber: "",
      creditorAddressTownName: "",
      creditorAddressPostCode: "",
      creditorAddressCountry: "",
      chargeBearer: "",
      instructionPriority: "",

      // fields which should not be filled
      debtorId: "",
      exchangeRateInformationUnitCurrency: "",
      exchangeRateInformationExchangeRate: "",
      exchangeRateInformationContractIdentification: "",
      exchangeRateInformationRateType: "",
      currencyOfTransfer: "",
      creditorId: "",
      creditorNameAndAddress: "",
      ultimateCreditor: "",
      ultimateCreditorIdentificationPritaveId: "",
      ultimateCreditorIdentificationOrganisationId: "",
      purposeCode: "",
      serviceLevel: "",
      remittanceInformationStructuredReference: "",
      remittanceInformationStructuredReferenceType: "",
      remittanceInformationStructuredReferenceIssuer: "",
      remittanceInformationStructuredArray: "",
      additionalInformation: "",
      requestedExecutionDate: "",
      requestedExecutionTime: "",
    });
  };

  const clickBulkPayment = () => {
    setPaymentTypeIndex(3);
    setInitState({
      // MainQuestions Section
      debtorAccountIban: "GE12IPC198888777345",
      debtorAccountCurrency: "GEL",
      instructedAmountAmount: "1200000",
      intructedAmountCurrency: "USD",
      creditorAccountIban: "GE170PCB123112333322",
      creditorAccountCurrency: "EUR",
      creditorAccountOtherIdentification: "12IBCBLL",
      creditorName: "Nuciko",
      remittanceInformationUnstructured: "",
      remittanceInformationUnstructuredArray: [],

      // SecondaryQuestions Section
      endToEndIdentification: "",
      instructionIdentification: "",
      debtorName: "",
      debtorIdentificationPrivateId: "",
      debtorIdentificationOrganisationId: "",
      ultimateDebtor: "",
      ultimateDebtorIdentificationPrivateId: "",
      ultimateDebtorIdentificationOrganisationId: "",
      creditorAgent: "",
      creditorIdentificationPrivateId: "",
      creditorIdentificationOrganisationId: "",
      creditorAddressStreetName: "",
      creditorAddressBuildingNumber: "",
      creditorAddressTownName: "",
      creditorAddressPostCode: "",
      creditorAddressCountry: "",
      chargeBearer: "",
      instructionPriority: "",

      // fields which should not be filled
      debtorId: "",
      exchangeRateInformationUnitCurrency: "",
      exchangeRateInformationExchangeRate: "",
      exchangeRateInformationContractIdentification: "",
      exchangeRateInformationRateType: "",
      currencyOfTransfer: "",
      creditorId: "",
      creditorNameAndAddress: "",
      ultimateCreditor: "",
      ultimateCreditorIdentificationPritaveId: "",
      ultimateCreditorIdentificationOrganisationId: "",
      purposeCode: "",
      serviceLevel: "",
      remittanceInformationStructuredReference: "",
      remittanceInformationStructuredReferenceType: "",
      remittanceInformationStructuredReferenceIssuer: "",
      remittanceInformationStructuredArray: "",
      additionalInformation: "",
      requestedExecutionDate: "",
      requestedExecutionTime: "",
    });
  };

  const clearState = () => {
    setInitState({
      // MainQuestions Section
      debtorAccountIban: "",
      debtorAccountCurrency: "",
      instructedAmountAmount: "",
      intructedAmountCurrency: "",
      creditorAccountIban: "",
      creditorAccountCurrency: "",
      creditorAccountOtherIdentification: "",
      creditorName: "",
      remittanceInformationUnstructured: "",
      remittanceInformationUnstructuredArray: [],

      // SecondaryQuestions Section
      endToEndIdentification: "",
      instructionIdentification: "",
      debtorName: "",
      debtorIdentificationPrivateId: "",
      debtorIdentificationOrganisationId: "",
      ultimateDebtor: "",
      ultimateDebtorIdentificationPrivateId: "",
      ultimateDebtorIdentificationOrganisationId: "",
      creditorAgent: "",
      creditorIdentificationPrivateId: "",
      creditorIdentificationOrganisationId: "",
      creditorAddressStreetName: "",
      creditorAddressBuildingNumber: "",
      creditorAddressTownName: "",
      creditorAddressPostCode: "",
      creditorAddressCountry: "",
      chargeBearer: "",
      instructionPriority: "",

      // fields which should not be filled
      debtorId: "",
      exchangeRateInformationUnitCurrency: "",
      exchangeRateInformationExchangeRate: "",
      exchangeRateInformationContractIdentification: "",
      exchangeRateInformationRateType: "",
      currencyOfTransfer: "",
      creditorId: "",
      creditorNameAndAddress: "",
      ultimateCreditor: "",
      ultimateCreditorIdentificationPritaveId: "",
      ultimateCreditorIdentificationOrganisationId: "",
      purposeCode: "",
      serviceLevel: "",
      remittanceInformationStructuredReference: "",
      remittanceInformationStructuredReferenceType: "",
      remittanceInformationStructuredReferenceIssuer: "",
      remittanceInformationStructuredArray: "",
      additionalInformation: "",
      requestedExecutionDate: "",
      requestedExecutionTime: "",
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
      <button
        onClick={clearState}
        className='bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-4 rounded'
      >
        Clear
      </button>
      <button
        onClick={""}
        className='bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-4 rounded'
      >
        Submit
      </button>
    </div>
  );
};

export default index;
