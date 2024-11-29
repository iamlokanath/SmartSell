// import React from 'react'
import { useLocation } from "react-router-dom";

function PricePrediction() {
    const location = useLocation();
    const { predictedPrice } = location.state || {};
  return (
    <>
    <div className="bg-[#E6EAE7] w-full">
        <div className="flex flex-col-reverse md:flex-row justify-center items-center gap-5 container mx-auto sm:py-20 py-10 sm:px-20 px-10">
          <div className="flex flex-col md:flex-row items-center bg-[#EEF2E3] p-10 rounded-lg w-full">
            <div className="container mx-auto p-4">
              <h1 className="sm:text-5xl text-xl font-bold mb-4 text-[#3D3D4E] tracking-wider">Prediction Result By E-waste-wizard</h1>
              {predictedPrice ? (
                <p className="text-[#3D3D4E] mb-4 sm:text-2xl text-sm font-semibold tracking-widest sm:mt-12">
                  The predicted price for your mobile is:{" "}
                  <strong>₹{predictedPrice}</strong>
                </p>
              ) : (
                <p className="mb-4 sm:text-2xl text-sm font-semibold tracking-widest sm:mt-12 text-red-500">
                  Error: No prediction available. Please try again.
                </p>
              )}
              <a href="/payment">
              <button
                type="submit"
                className="mt-4 py-2 px-10 bg-[#28735A] text-white rounded-lg hover:bg-[#205c48] transition-all duration-300"
              >
                Sell Now
              </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PricePrediction