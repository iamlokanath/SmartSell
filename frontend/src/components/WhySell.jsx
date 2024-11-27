import { HoverEffect } from "../components/acertinityui/card-hover-effect";
import sellData from "../data/whySell.json"; 

function WhySell() {
    const sells = sellData;
  return (
    <>
      <div className="bg-[#28735A] h-full w-full">
        <div className="mx-auto sm:py-20 py-10 sm:px-20 px-10">
          <div className="">
            <h1 className="sm:text-5xl text-2xl font-bold text-[#D2D2D2] tracking-wider">
              Why Sell E-waste?
            </h1>
          </div>
          <div className="w-full h-full">
            <HoverEffect items={sells} />
          </div>
        </div>
      </div>
    </>
  );
}

export default WhySell;
