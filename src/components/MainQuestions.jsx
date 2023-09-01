const MainQuestions = () => {
  return (
    <div className='flex'>
      <div className='flex flex-col flex-initial w-6/12'>
        {/* მიმღების დასახელება */}
        <label className='label' htmlFor='inputField'>
          მიმღების დასახელება
        </label>
        <input
          className='input'
          id='1'
          type='text'
          placeholder='შეიყვანეთ ტექსტი...'
        />

        {/* მიმღების მისამართი */}

        <label className='label' htmlFor='inputField'>
          მიმღების მისამართი
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
          გამზავნის ანგარიში
        </label>
        <input
          className='input ml-8'
          id='3'
          type='text'
          placeholder='შეიყვანეთ ტექსტი...'
        />

        <label className='label ml-8' htmlFor='inputField'>
          გამზავნის სახელი
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

export default MainQuestions;
