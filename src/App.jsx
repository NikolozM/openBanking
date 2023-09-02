import { useState } from "react";
import MainQuestions from "./components/MainQuestions";
import SecondaryQuestions from "./components/SecondaryQuestions";
import AdditionalQuestions from "./components/AdditionalQuestions";
import Navbar from "./components/Navbar";

export default function App() {
  const [sectionId, setSectionId] = useState(1);

  const renderComponent = (option) => {
    switch (option) {
      case 1:
        return <MainQuestions />;
      case 2:
        return <SecondaryQuestions />;
      case 3:
        return <AdditionalQuestions />;
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
      <section className='bg-white w-full border border-blue-500 border-solid border-4 rounded-lg p-4'>
        {renderComponent(sectionId)}
      </section>
    </main>
  );
}
