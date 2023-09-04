const MainQuestions = ({ initState, inputChange }) => {
  return (
    <div className='flex'>
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
            placeholder='შეიყვანეთ ტექსტი...'
            value={initState.debtorAccountIban}
            onChange={(e) => inputChange('debtorAccountIban', e.target.value)}
          />
          <label className='label' htmlFor='2'>
            Currency
          </label>
          <input
            className='input'
            id='2'
            type='text'
            placeholder='შეიყვანეთ ტექსტი...'
            value={initState.debtorAccountCurrency}
            onChange={(e) => inputChange('debtorAccountCurrency', e.target.value)}
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
            placeholder='შეიყვანეთ ტექსტი...'
            value={initState.instructedAmountAmount}
            onChange={(e) => inputChange('instructedAmountAmount', e.target.value)}
          />
          <label className='label' htmlFor='4'>
            Currency
          </label>
          <input
            className='input'
            id='4'
            type='text'
            placeholder='შეიყვანეთ ტექსტი...'
            value={initState.intructedAmountCurrency}
            onChange={(e) => inputChange('intructedAmountCurrency', e.target.value)}
          />
        </div>
      </div>

      <div className='flex-initial w-6/12'>
        <div className='divBorder'>
          Creditor Account
          <label className='label ml-8' htmlFor='5'>
            Iban
          </label>
          <input
            className='input ml-8'
            id='5'
            type='text'
            placeholder='შეიყვანეთ ტექსტი...'
            value={initState.creditorAccountIban}
            onChange={(e) => inputChange('creditorAccountIban', e.target.value)}
          />
          <label className='label ml-8' htmlFor='6'>
            Currency
          </label>
          <input
            className='input ml-8'
            id='6'
            type='text'
            placeholder='შეიყვანეთ ტექსტი...'
            value={initState.creditorAccountCurrency}
            onChange={(e) => inputChange('creditorAccountCurrency', e.target.value)}
          />
          <label className='label ml-8' htmlFor='7'>
            Other Identification
          </label>
          <input
            className='input ml-8'
            id='7'
            type='text'
            placeholder='შეიყვანეთ ტექსტი...'
            value={initState.creditorAccountOtherIdentification}
            onChange={(e) => inputChange('creditorAccountOtherIdentification', e.target.value)}
          />
        </div>

        <div className='divBorder'>
          <label className='label ml-8' htmlFor='8'>
            Creditor Name
          </label>
          <input
            className='input ml-8'
            id='8'
            type='text'
            placeholder='შეიყვანეთ ტექსტი...'
            value={initState.creditorName}
            onChange={(e) => inputChange('creditorName', e.target.value)}
          />
        </div>
        <div className='divBorder'>
          <label className='label ml-8' htmlFor='9'>
            Remittance Information Unstructured
          </label>
          <input
            className='input ml-8'
            id='9'
            type='text'
            placeholder='შეიყვანეთ ტექსტი...'
            value={initState.remittanceInformationUnstructured}
            onChange={(e) => inputChange('remittanceInformationUnstructured', e.target.value)}
          />
        </div>
        <div className='divBorder'>
          <label className='label ml-8' htmlFor='10'>
            Remittance Information Unstructured Array
          </label>
          <input
            className='input ml-8'
            id='10'
            type='text'
            placeholder='შეიყვანეთ ტექსტი...'
            value={initState.remittanceInformationUnstructuredArray}
            onChange={(e) => inputChange('remittanceInformationUnstructuredArray', e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default MainQuestions;
