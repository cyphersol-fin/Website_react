import React, { useEffect, useRef } from "react";
import Globe from "react-globe.gl";

export const GlobeComponent = () => {
  const globeRef = useRef();
  const cities = [
    { name: "Mumbai", lat: 19.076, lng: 72.8777, value: 35 },
    { name: "Delhi", lat: 28.6139, lng: 77.209, value: 42 },
    { name: "Bangalore", lat: 12.9716, lng: 77.5946, value: 38 },
    { name: "Hyderabad", lat: 17.385, lng: 78.4867, value: 29 },
    { name: "Chennai", lat: 13.0827, lng: 80.2707, value: 31 },
    { name: "Kolkata", lat: 22.5726, lng: 88.3639, value: 27 },
    { name: "Pune", lat: 18.5204, lng: 73.8567, value: 25 },
    { name: "Ahmedabad", lat: 23.0225, lng: 72.5714, value: 23 },
  ];

  useEffect(() => {
    if (globeRef.current) {
      globeRef.current.pointOfView(
        { lat: 20.5937, lng: 78.9629, altitude: 2 },
        1000
      );
    }
  }, []);

  return (
    <div className="flex items-center justify-center bg-black">
      <Globe
        ref={globeRef}
        globeImageUrl="https://unpkg.com/three-globe/example/img/earth-night.jpg"
        atmosphereImageUrl="https://unpkg.com/three-globe/example/img/night-atmosphere.png"
        style={{
          width: "100%",
          height: "auto",
          //   maxWidth: "500px",
        }}
        pointsData={cities}
        pointLat="lat"
        pointLng="lng"
        pointColor={() => "#4dabf7"}
        pointAltitude={0.06}
        pointRadius={0.25}
        pointsMerge={false}
        pointResolution={1}
        labelsData={cities}
        labelLat="lat"
        labelLng="lng"
        labelText="name"
        labelSize={1.2}
        labelDotRadius={0.3}
        labelColor={() => "#ffffff"}
        labelResolution={5}
        labelAltitude={0.1}
        labelLabel={(d) => `
            <div style="
              background: rgba(0, 0, 0, 0.85);
              color: white;
              padding: 0.4rem 0.6rem;
              border-radius: 4px;
              border: 1px solid #4dabf7;
              font-size: 1rem;
            ">
              ${d.name}: ${d.value} Resellers
            </div>
          `}
        atmosphereColor="#4dabf7"
        atmosphereAltitude={0.1}
        enablePointerInteraction={true} // Allows pointer interaction
        controlsOptions={{
          enableZoom: false, // Disable zooming on scroll
          autoRotate: true, // Enable auto rotation
          autoRotateSpeed: 1.5, // Speed of auto rotation
          enablePan: false, // Disable panning
        }}
      />
    </div>
  );
};
