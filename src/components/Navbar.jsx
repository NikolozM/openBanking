const Navbar = ({ sectionId, setSectionId }) => {
  return (
    <section className='flex justify-around w-full mb-4 mt-12 text-text-color font-bold font-palanquin'>
      <div
        className={`cursor-pointer hover:scale-110 duration-100 ${sectionId === 1 && 'border-b-2 border-border-color'}`}
      >
        <p onClick={() => setSectionId(1)}>MainQuestions</p>
      </div>
      <div
        className={`cursor-pointer hover:scale-110 duration-100 ${
          sectionId === 2 && 'border-b-2 border-border-color  '
        }`}
      >
        <p onClick={() => setSectionId(2)}>SecondaryQuestions</p>
      </div>
      <div
        className={`cursor-pointer hover:scale-110 duration-100 ${sectionId === 3 && 'border-b-2 border-border-color'}`}
      >
        <p onClick={() => setSectionId(3)}>ShouldNotFilledFields</p>
      </div>
    </section>
  );
};

export default Navbar;
