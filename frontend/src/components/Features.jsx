import { useState, useEffect } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { BiChevronUp } from "react-icons/bi";
import featuresimg from "/Image/Rectangle2.png";
import faqsData from "../data/featuresData.json";

function Features() {
    const [activeIndex, setActiveIndex] = useState(null);
  const [faqs, setFaqs] = useState([]); 

  useEffect(() => {
    setFaqs(faqsData);
  }, []);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <>
    <div className="bg-[#EEF2E3] h-full w-full">
        <div className="mx-auto sm:py-20 py-10 sm:px-20 px-10">
          {/* heading */}
          <div className="">
            <h1 className="sm:text-5xl text-2xl font-bold text-[#3D3D4E] tracking-wider">
              Features
            </h1>
          </div>
          <div className="flex flex-col-reverse md:flex-row items-center pt-10">
            <div className="md:w-1/2 w-full text-left md:pr-8 flex flex-col gap-5">
              {faqs.map((faq, index) => (
                <div key={index} className="">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="md:w-full w-full flex justify-between items-center p-3"
                  >
                    <span className="text-sm sm:text-2xl font-semibold text-[#3D3D4E]">
                      {faq.question}
                    </span>
                    <span
                      className={`text-xl sm:text-2xl transform transition-transform duration-700 ${
                        activeIndex === index ? "rotate-180" : "rotate-0"
                      }`}
                    >
                      {activeIndex === index ? (
                        <BiChevronUp />
                      ) : (
                        <FaAngleDown />
                      )}
                    </span>
                  </button>

                  <div
                    className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
                      activeIndex === index ? "max-h-[1000px]" : "max-h-0"
                    }`}
                  >
                    <p className="p-4 text-sm sm:w-full sm:text-xl border-b-2 sm:font-xs border-green-600 leading-3 text-[#5C5C5C]">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="md:w-1/2 w-full flex justify-center mb-4 md:mb-0">
              <img src={featuresimg} alt="features" className="w-full h-auto" />
            </div>
          </div>

          <div className="pt-10 flex justify-center sm:justify-start">
            <a href="/sell">
            <button className="bg-[#28735A] text-white px-20 py-5 mb-4 sm:mb-0 rounded-md sm:text-2xl font-semibold">
              Start Selling
            </button>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Features