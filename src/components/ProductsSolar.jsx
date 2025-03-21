import React from "react";
import SolarSystem from "./Solar/SolarSystem";
import PlanetSection from "./Solar/PlanetSection/PlanetSection";
import { data } from "./Solar/DetaiData";
import Provider from "./Solar/Provider";
import ProductsSection from "./ZohoProductsSection/ProductsSections";
const ProductsSolar = () => {
  return (
    <div>
      <Provider>
        <SolarSystem />
        <PlanetSection planetData={data} />
      </Provider>
      {/* <ProductsSection/> */}
    </div>
  );
};

export default ProductsSolar;
