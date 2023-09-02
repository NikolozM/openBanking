const SecondaryQuestions = () => {
    return (
      <div className='flex'>
        <div className='flex flex-col flex-initial w-6/12'>
          {/* მიმღების დასახელება */}
          <label className='label' htmlFor='inputField'>
            ოოოოოოოოოო
          </label>
          <input
            className='input'
            id='1'
            type='text'
            placeholder='შეიყვანეთ ტექსტი...'
          />
  
          {/* მიმღების მისამართი */}
  
          <label className='label' htmlFor='inputField'>
            ოოოოოოოოოოოო
          </label>
          <input
            className='input'
            id='2'
            type='text'
            placeholder='შეიყვანეთ ტექსტი...'
          />
        </div>
  
        <div className='flex-initial w-6/12'>
          <label className='label ml-8' htmlFor='inputField'>
            ოოოოოოოოოო
          </label>
          <input
            className='input ml-8'
            id='3'
            type='text'
            placeholder='შეიყვანეთ ტექსტი...'
          />
  
          <label className='label ml-8' htmlFor='inputField'>
            ოოოოოოოოოოოოოოო
          </label>
          <input
            className='input ml-8'
            id='4'
            type='text'
            placeholder='შეიყვანეთ ტექსტი...'
          />
        </div>
      </div>
    );
  };
  
  export default SecondaryQuestions;
  