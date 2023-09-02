const Navbar = ({ sectionId, setSectionId }) => {
  return (
    <section className='flex justify-around w-full mb-4 mt-12 text-base font-bold font-palanquin'>
      <div
        className={
          sectionId === 1 && "border-b-2 border-blue-500"
        }
      >
        <p onClick={() => setSectionId(1)}>MainQuestions</p>
      </div>
      <div
        className={
          sectionId === 2 && "border-b-2 border-blue-500"
        }
      >
        <p onClick={() => setSectionId(2)}>
          SecondaryQuestions
        </p>
      </div>
      <div
        className={
          sectionId === 3 && "border-b-2 border-blue-500"
        }
      >
        <p onClick={() => setSectionId(3)}>Chubala</p>
      </div>
    </section>
  );
};

export default Navbar;
