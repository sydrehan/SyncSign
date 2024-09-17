import React from 'react';
import UploadSection from './UploadSection';
import OutputSection from './OutputSection';
import LanguageSelector from './LanguageSelector';
import './Landing.css';


const Landing = () => {
  return (
    <div className="min-h-screen bg-gray-100">


      <main className=" h-[35vh] flex justify-center items-start gap-8 py-16 px-8">
        <UploadSection />
        <div className="w-1/3 h-[75vh] flex flex-col  justify-items-stretch  ">
          <OutputSection />

          <LanguageSelector />
        </div>
      </main>
    </div>
  );
};

export default Landing;
