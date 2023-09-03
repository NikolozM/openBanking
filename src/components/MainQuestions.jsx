const MainQuestions = ({ initState, inputChange }) => {
  return (
    <div className='flex'>
      <div className='flex flex-col flex-initial w-6/12'>
        {/* მიმღების დასახელება */}
        <label className='label' htmlFor='inputField'>
          გამგზავნის ანგარიში
        </label>
        <input
          className='input'
          id='1'
          type='text'
          placeholder='შეიყვანეთ ტექსტი...'
          value={initState.debtorAccountIban}
          onChange={(e) =>
            inputChange("debtorAccountIban", e.target.value)
          }
        />

        {/* მიმღების მისამართი */}

        <label className='label' htmlFor='inputField'>
          თანხა
        </label>
        <input
          className='input'
          id='2'
          type='text'
          placeholder='შეიყვანეთ ტექსტი...'
          value={initState.debtorAccountCurrency}
          onChange={(e) =>
            inputChange(
              "debtorAccountCurrency",
              e.target.value
            )
          }
        />
      </div>

      <div className='flex-initial w-6/12'>
        <label className='label ml-8' htmlFor='inputField'>
          გამზავნის ანგარიში
        </label>
        <input
          className='input ml-8'
          id='3'
          type='text'
          placeholder='შეიყვანეთ ტექსტი...'
          value={initState.intructedAmountCurrency}
          onChange={(e) =>
            inputChange(
              "intructedAmountCurrency",
              e.target.value
            )
          }
        />

        <label className='label ml-8' htmlFor='inputField'>
          გამზავნის სახელი
        </label>
        <input
          className='input ml-8'
          id='4'
          type='text'
          placeholder='შეიყვანეთ ტექსტი...'
          value={initState.instructedAmount}
          onChange={(e) =>
            inputChange(
              "instructedAmount",
              e.target.value
            )
          }
        />
      </div>
    </div>
  );
};

export default MainQuestions;
