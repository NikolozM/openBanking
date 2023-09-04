const SecondaryQuestions = ({ initState, inputChange }) => {
  return (
    <div className='flex'>
      <div className='flex flex-col flex-initial w-6/12'>
        <div className='divBorder'>
          <label className='label' htmlFor='11'>
            End To End Identification
          </label>
          <input
            className='input'
            id='11'
            type='text'
            placeholder='შეიყვანეთ ტექსტი...'
            value={initState.endToEndIdentification}
            onChange={(e) => inputChange('endToEndIdentification', e.target.value)}
          />
        </div>
        <div className='divBorder'>
          <label className='label' htmlFor='12'>
            Instruction Identification
          </label>
          <input
            className='input'
            id='12'
            type='text'
            placeholder='შეიყვანეთ ტექსტი...'
            value={initState.instructionIdentification}
            onChange={(e) => inputChange('instructionIdentification', e.target.value)}
          />
        </div>
        <div className='divBorder'>
          <label className='label' htmlFor='13'>
            Debtor Name
          </label>
          <input
            className='input'
            id='13'
            type='text'
            placeholder='შეიყვანეთ ტექსტი...'
            value={initState.debtorName}
            onChange={(e) => inputChange('debtorName', e.target.value)}
          />
        </div>

        <div className='divBorder'>
          Debtor Identification
          <label className='label' htmlFor='14'>
            Private Id
          </label>
          <input
            className='input'
            id='14'
            type='text'
            placeholder='შეიყვანეთ ტექსტი...'
            value={initState.debtorIdentificationPrivateId}
            onChange={(e) => inputChange('debtorIdentificationPrivateId', e.target.value)}
          />
          <label className='label' htmlFor='15'>
            Organisation Id
          </label>
          <input
            className='input'
            id='15'
            type='text'
            placeholder='შეიყვანეთ ტექსტი...'
            value={initState.debtorIdentificationOrganisationId}
            onChange={(e) => inputChange('debtorIdentificationOrganisationId', e.target.value)}
          />
        </div>
        <div className='divBorder'>
          <label className='label' htmlFor='16'>
            Ultimate Debtor
          </label>
          <input
            className='input'
            id='16'
            type='text'
            placeholder='შეიყვანეთ ტექსტი...'
            value={initState.ultimateDebtor}
            onChange={(e) => inputChange('ultimateDebtor', e.target.value)}
          />
        </div>

        <div className='divBorder'>
          Ultimate Debtor Id Identification
          <label className='label' htmlFor='17'>
            Private id
          </label>
          <input
            className='input'
            id='17'
            type='text'
            placeholder='შეიყვანეთ ტექსტი...'
            value={initState.ultimateDebtorIdentificationPrivateId}
            onChange={(e) => inputChange('ultimateDebtorIdentificationPrivateId', e.target.value)}
          />
          <label className='label' htmlFor='18'>
            Organisation Id
          </label>
          <input
            className='input'
            id='18'
            type='text'
            placeholder='შეიყვანეთ ტექსტი...'
            value={initState.ultimateDebtorIdentificationOrganisationId}
            onChange={(e) => inputChange('ultimateDebtorIdentificationOrganisationId', e.target.value)}
          />
        </div>
      </div>

      <div className='flex-initial w-6/12'>
        <div className='divBorder'>
          <label className='label' htmlFor='19'>
            Creditor Agent
          </label>
          <input
            className='input'
            id='19'
            type='text'
            placeholder='შეიყვანეთ ტექსტი...'
            value={initState.creditorAgent}
            onChange={(e) => inputChange('creditorAgent', e.target.value)}
          />
        </div>
        <div className='divBorder'>
          Creditor Identification
          <label className='label' htmlFor='20'>
            Private Id
          </label>
          <input
            className='input'
            id='20'
            type='text'
            placeholder='შეიყვანეთ ტექსტი...'
            value={initState.creditorIdentificationPrivateId}
            onChange={(e) => inputChange('creditorIdentificationPrivateId', e.target.value)}
          />
          <label className='label' htmlFor='21'>
            Organisation Id
          </label>
          <input
            className='input'
            id='21'
            type='text'
            placeholder='შეიყვანეთ ტექსტი...'
            value={initState.creditorIdentificationOrganisationId}
            onChange={(e) => inputChange('creditorIdentificationOrganisationId', e.target.value)}
          />
        </div>

        <div className='divBorder'>
          Creditor Address
          <label className='label' htmlFor='22'>
            Street Name
          </label>
          <input
            className='input'
            id='22'
            type='text'
            placeholder='შეიყვანეთ ტექსტი...'
            value={initState.creditorAddressStreetName}
            onChange={(e) => inputChange('creditorAddressStreetName', e.target.value)}
          />
          <label className='label' htmlFor='23'>
            Building Number
          </label>
          <input
            className='input'
            id='23'
            type='text'
            placeholder='შეიყვანეთ ტექსტი...'
            value={initState.creditorAddressBuildingNumber}
            onChange={(e) => inputChange('creditorAddressBuildingNumber', e.target.value)}
          />
          <label className='label' htmlFor='24'>
            Town Name
          </label>
          <input
            className='input'
            id='24'
            type='text'
            placeholder='შეიყვანეთ ტექსტი...'
            value={initState.creditorAddressTownName}
            onChange={(e) => inputChange('creditorAddressTownName', e.target.value)}
          />
          <label className='label' htmlFor='25'>
            Post Code
          </label>
          <input
            className='input'
            id='25'
            type='text'
            placeholder='შეიყვანეთ ტექსტი...'
            value={initState.creditorAddressPostCode}
            onChange={(e) => inputChange('creditorAddressPostCode', e.target.value)}
          />
          <label className='label' htmlFor='26'>
            Country
          </label>
          <input
            className='input'
            id='26'
            type='text'
            placeholder='შეიყვანეთ ტექსტი...'
            value={initState.creditorAddressCountry}
            onChange={(e) => inputChange('creditorAddressCountry', e.target.value)}
          />
        </div>

        <div className='divBorder'>
          <label className='label' htmlFor='27'>
            Creditor Agent
          </label>
          <input
            className='input'
            id='27'
            type='text'
            placeholder='შეიყვანეთ ტექსტი...'
            value={initState.chargeBearer}
            onChange={(e) => inputChange('chargeBearer', e.target.value)}
          />
        </div>
        <div className='divBorder'>
          <label className='label' htmlFor='28'>
            Creditor Agent
          </label>
          <input
            className='input'
            id='28'
            type='text'
            placeholder='შეიყვანეთ ტექსტი...'
            value={initState.instructionPriority}
            onChange={(e) => inputChange('instructionPriority', e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default SecondaryQuestions;
