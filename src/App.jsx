import { useState } from "react";
import MainQuestions from "./components/MainQuestions";
import SecondaryQuestions from "./components/SecondaryQuestions";
import Navbar from "./components/Navbar";

export default function App() {
  const [sectionId, setSectionId] = useState(1);

  console.log(sectionId);

  const renderComponent = (option) => {
    switch (option) {
      case 1:
        return <MainQuestions />;
      case 2:
        return <SecondaryQuestions />;
      default:
        return <MainQuestions />;
    }
  };

  return (
    <main className='w-9/12 m-auto flex flex-col items-center'>
      <Navbar
        sectionId={sectionId}
        setSectionId={setSectionId}
      />
      <section className='bg-white w-full'>
        {renderComponent(sectionId)}
      </section>
    </main>
  );
}
