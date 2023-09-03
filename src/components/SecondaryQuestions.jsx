const SecondaryQuestions = ({initState,inputChange}) => {
  return (
    <div className='flex'>
      <div className='flex flex-col flex-initial w-6/12'>
        {/* მიმღების დასახელება */}
        <label className='label' htmlFor='inputField'>
          ადამიანი
        </label>
        <input
          className='input'
          id='1'
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

        {/* მიმღების მისამართი */}

        <label className='label' htmlFor='inputField'>
          ჩუბალა
        </label>
        <input
          className='input'
          id='2'
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

      <div className='flex-initial w-6/12'>
        <label className='label ml-8' htmlFor='inputField'>
          ქუმანა
        </label>
        <input
          className='input ml-8'
          id='3'
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

        <label className='label ml-8' htmlFor='inputField'>
          ჰაბუნა
        </label>
        <input
          className='input ml-8'
          id='4'
          type='text'
          placeholder='შეიყვანეთ ტექსტი...'
          value={initState.creditorAccountIban}
          onChange={(e) =>
            inputChange(
              "creditorAccountIban",
              e.target.value
            )
          }
        />
      </div>
    </div>
  );
};

export default SecondaryQuestions;
