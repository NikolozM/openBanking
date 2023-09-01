const Navbar = ({setSectionId }) => {
  return (
    <section>
      <p onClick={() => setSectionId(1)}>MainQuestions</p>
      <p onClick={() => setSectionId(2)}>SecondaryQuestions</p>
      <p>Chubala</p>
    </section>
  );
};

export default Navbar;
