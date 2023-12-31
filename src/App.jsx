import { useState } from 'react';
import MainQuestions from './components/MainQuestions';
import SecondaryQuestions from './components/SecondaryQuestions';
import ShouldNotFilledFields from './components/ShouldNotFilledFields';
import Navbar from './components/Navbar';
import BottomNavigation from './components/shared/BottomNavigation';
import LoaderWithApi from './components/shared/Loader';

export default function App() {
  const [paymentTypeIndex, setPaymentTypeIndex] = useState(null);

  const [load, setLoad] = useState(false);

  const [initState, setInitState] = useState({
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

  const inputChange = (field, newValue) => {
    setInitState((prevState) => ({
      ...prevState,
      [field]: newValue,
    }));
  };

  const [sectionId, setSectionId] = useState(1);

  const renderComponent = (option) => {
    switch (option) {
      case 1:
        return <MainQuestions initState={initState} setInitState={setInitState} inputChange={inputChange} />;
      case 2:
        return <SecondaryQuestions initState={initState} setInitState={setInitState} inputChange={inputChange} />;
      case 3:
        return <ShouldNotFilledFields initState={initState} setInitState={setInitState} inputChange={inputChange} />;
      default:
        return <MainQuestions />;
    }
  };

  return (
    <main className='min-h-screen bg-gradient-to-b from-gradiant-start to-gradiant-end p-12 flex items-center'>
      <LoaderWithApi loader={load}>
        <Navbar sectionId={sectionId} setSectionId={setSectionId} />
        <section className='w-full p-4'>{renderComponent(sectionId)}</section>
        <BottomNavigation
          setLoad={setLoad}
          initState={initState}
          setInitState={setInitState}
          paymentTypeIndex={paymentTypeIndex}
          setPaymentTypeIndex={setPaymentTypeIndex}
        />
      </LoaderWithApi>
    </main>
  );
}
