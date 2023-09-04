import { useState } from 'react';
import MainQuestions from './components/MainQuestions';
import SecondaryQuestions from './components/SecondaryQuestions';
import AdditionalQuestions from './components/AdditionalQuestions';
import Navbar from './components/Navbar';

export default function App() {
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
    remittanceInformationUnstructuredArray: '',
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
        return <AdditionalQuestions initState={initState} setInitState={setInitState} inputChange={inputChange} />;
      default:
        return <MainQuestions />;
    }
  };

  return (
    <main className='w-9/12 m-auto flex flex-col items-center'>
      <Navbar sectionId={sectionId} setSectionId={setSectionId} />
      <section className='bg-white w-full border border-blue-500 border-solid border-4 rounded-lg p-4'>
        {renderComponent(sectionId)}
      </section>
    </main>
  );
}
