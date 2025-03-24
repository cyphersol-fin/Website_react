import React, { useState } from "react";
import SolarSystem from "./Solar/SolarSystem";
import PlanetSection from "./Solar/PlanetSection/PlanetSection";
import { data } from "./Solar/DetaiData";
import Provider from "./Solar/Provider";
import ProductsSection from "./ProductsSection/ProductsSections";

const ProductsSolar = () => {
  const [showPlanetSection, setShowPlanetSection] = useState(false);

  return (
    <div>
      {/* <Provider> */}
        {/* <SolarSystem />

        <button
          onClick={() => setShowPlanetSection(true)}
          className="px-4 py-2 bg-blue-500 text-white rounded my-4"
        >
          Show Planet Section
        </button>

        {showPlanetSection && (
          <div className="fixed inset-0 flex justify-center items-center z-[100] backdrop-blur-md  m-auto overflow-auto ">
            <div
              className="absolute inset-0 bg-black bg-opacity-50 "
              onClick={() => setShowPlanetSection(false)}
            ></div>

            <div className="relative p-6 rounded shadow-lg  ">
              <button
                onClick={() => setShowPlanetSection(false)}
                className="absolute top-2 right-2 text-black"
              >
                X
              </button>
              <PlanetSection planetData={data} />
            </div>
          </div>
        )} */}
      {/* </Provider> */}
      <ProductsSection/>
    </div>
  );
};

export default ProductsSolar;
