import React, { useEffect, useRef } from "react";
import "./style.css";
const base = import.meta.env.BASE_URL; // Will be '/static/' in production (as per Vite config)

const ring = `${base}assets/images/ring.svg`;
const lightWedge = `${base}assets/images/light-wedge.svg`;
const logo = `${base}assets/images/Cyphers.png`;

const ProductsSections = () => {
  // 1. Refs to measure & track elements
  const wedgeRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    // 2. Approximate the center of rotation using the container
    const container = containerRef.current;
    const contRect = container.getBoundingClientRect();
    const centerX = contRect.left + contRect.width / 2;
    const centerY = contRect.top + contRect.height / 2;

    console.log({ centerX, centerY });

    // 3. Get references to each product label (by ID)
    const CA = document.getElementById("ca-software");
    const Tally = document.getElementById("tally-import");
    const Forensic = document.getElementById("forensic-software");

    // A helper to get the angle of an element from the center
    const getAngleFromCenter = (el) => {
      const r = el.getBoundingClientRect();
      const x = r.left + r.width / 2 - centerX;
      const y = r.top + r.height / 2 - centerY;
      // Standard math: angle = atan2(y, x) in degrees, 0° = +X axis
      let angle = Math.atan2(y, x) * (180 / Math.PI);
      if (angle < 0) angle += 360;
      return angle;
    };

    // 4. Pre-calculate each product’s angle (once)
    const angles = {
      CA: getAngleFromCenter(CA),
      Tally: getAngleFromCenter(Tally),
      Forensic: getAngleFromCenter(Forensic),
    };

    // 5. Read wedge angle each frame & highlight whichever is “under” it
    let rafId;
    const animate = () => {
      if (wedgeRef.current) {
        // Get the wedge’s current rotation matrix
        const style = window.getComputedStyle(wedgeRef.current);
        const transform = style.getPropertyValue("transform");
        if (transform && transform !== "none") {
          const values = transform.split("(")[1].split(")")[0].split(",");
          const a = parseFloat(values[0]);
          const b = parseFloat(values[1]);
          // Convert matrix to rotation angle
          let wedgeAngle = Math.round(Math.atan2(b, a) * (180 / Math.PI));
          if (wedgeAngle < 0) wedgeAngle += 360;

          // +/- 30° threshold
          const inRange = (productAngle, threshold) => {
            let diff = Math.abs(productAngle - wedgeAngle);
            if (diff > 180) diff = 360 - diff;
            return diff < threshold;
            // return diff < 30;
          };

          // Clear highlights
          CA.classList.remove("highlight");
          Tally.classList.remove("highlight");
          Forensic.classList.remove("highlight");

          // Apply highlight if within range
          if (inRange(angles.Forensic, 30)) CA.classList.add("highlight");
          if (inRange(angles.CA, 60)) Tally.classList.add("highlight");
          if (inRange(angles.Tally, 30)) Forensic.classList.add("highlight");
        }
      }
      rafId = requestAnimationFrame(animate);
    };
    animate();

    // Cleanup
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <div ref={containerRef} className="">
      <div className="products-container flex flex-col items-center justify-center">
        <img
          src={`${base}https://www.zohowebstatic.com/sites/zweb/images/crm/crm-360deg-small-circle.svg`}
          className="center-bg"
        />
        <img src={logo} alt="" className="products-logo" />
        {/* 6. Attach ref to wedge so we can read its transform */}
        <img
          ref={wedgeRef}
          src={lightWedge}
          alt=""
          className="products-light-wedge"
        />
        <img src={ring} alt="" className="products-ring" />
      </div>

      {/* 7. Give each label an id we can query */}
      <p
        id="ca-software"
        className="bg-white text-center text-lg font-bold text-gray-800 p-4 rounded-3xl top-[40%] left-[70%] absolute z-[10]"
      >
        CA Software
      </p>
      <p
        id="tally-import"
        className="bg-white text-center text-sm font-bold text-gray-800 p-4 rounded-3xl top-[30%] left-[30%] absolute z-[10]"
      >
        Tally Import
      </p>
      <p
        id="forensic-software"
        className="bg-white text-center text-lg font-bold text-gray-800 p-4 rounded-3xl top-[62%] left-[35%] absolute z-[10]"
      >
        Forensic Software
      </p>
    </div>
  );
};

export default ProductsSections;