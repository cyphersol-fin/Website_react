import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calculator, Building2, FileText, FileSpreadsheet, UserCheck, Handshake, BarChart3 } from "lucide-react";

const features = [
  {
    id: "tally-utility",
    name: "Tally Utility",
    description: "Advanced tools for seamless Tally data management and integration.",
    points: ["Data Import/Export", "Auto Reconciliation", "Batch Processing", "Custom Mapping"],
    icon: Calculator,
    color: "from-orange-400 to-red-500"
  },
  {
    id: "bank-statement",
    name: "Bank Statement",
    description: "Intelligent bank statement analysis and processing system.",
    points: ["Transaction Analysis", "Pattern Recognition", "Cash Flow Tracking", "Account Monitoring"],
    icon: Building2,
    color: "from-emerald-400 to-teal-500"
  },
  {
    id: "itr",
    name: "ITR",
    description: "Streamlined income tax return filing and management solution.",
    points: ["Auto Calculation", "Compliance Check", "Document Verification", "Status Tracking"],
    icon: FileText,
    color: "from-blue-400 to-indigo-500"
  },
  {
    id: "invoice",
    name: "Invoice",
    description: "Digital invoice processing and management platform.",
    points: ["Quick Generation", "Template Library", "Payment Tracking", "GST Compliance"],
    icon: FileSpreadsheet,
    color: "from-purple-400 to-pink-500"
  },
  {
    id: "ca-software",
    name: "CA Software",
    description: "Comprehensive suite of tools for chartered accountants.",
    points: ["Client Management", "Financial Reporting", "Tax Planning", "Audit Tools"],
    icon: UserCheck,
    color: "from-yellow-400 to-orange-500"
  },
  {
    id: "dsa-software",
    name: "DSA Software",
    description: "Efficient loan processing and management system for DSAs.",
    points: ["Lead Management", "Loan Processing", "Commission Tracking", "Document Handling"],
    icon: Handshake,
    color: "from-cyan-400 to-blue-500"
  },
  {
    id: "gstr",
    name: "GSTR",
    description: "Automated GST return filing and reconciliation system.",
    points: ["Return Filing", "Input Credit", "Reconciliation", "Compliance Monitor"],
    icon: BarChart3,
    color: "from-green-400 to-emerald-500"
  },
];

const ProductsSection = () => {
  const [activeFeature, setActiveFeature] = useState(null);
  const [hoveredFeature, setHoveredFeature] = useState(null);
  const [orbitRotation, setOrbitRotation] = useState(0); // State to track orbit rotation
  const [isPaused, setIsPaused] = useState(false);
  
  // Configuration for two orbits - more compact with larger center
  const featureSize = 100; // Size of feature elements in pixels
  const innerOrbitRadius = 180; // Reduced inner orbit radius
  const outerOrbitRadius = 320; // Reduced outer orbit radius
  const centerSize = 220; // Increased center CypherSOL size
  
  // Distribute features between two orbits
  const innerOrbitFeatures = features.slice(0, 3); // First 3 features on inner orbit
  const outerOrbitFeatures = features.slice(3); // Remaining features on outer orbit

  // Animate orbit rotation - the orbits rotate while features stay fixed on their points
  useEffect(() => {
    let animationFrameId;
    const animate = () => {
      if (!isPaused) {
        // Rotate the orbits (not the features)
        setOrbitRotation(prev => (prev + 0.002) % (2 * Math.PI));
      }
      animationFrameId = requestAnimationFrame(animate);
    };
    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused]);

  // Get position for a feature on the inner orbit
  const getInnerOrbitPosition = (index, totalFeatures) => {
    // Fixed angle for this feature on the inner orbit
    const fixedAngle = (index * (2 * Math.PI / totalFeatures)) + orbitRotation;
    
    return {
      left: `calc(50% + ${innerOrbitRadius * Math.cos(fixedAngle)}px - ${featureSize/2}px)`,
      top: `calc(50% + ${innerOrbitRadius * Math.sin(fixedAngle)}px - ${featureSize/2}px)`
    };
  };
  
  // Get position for a feature on the outer orbit
  const getOuterOrbitPosition = (index, totalFeatures) => {
    // Fixed angle for this feature on the outer orbit
    const fixedAngle = (index * (2 * Math.PI / totalFeatures)) + orbitRotation;
    
    return {
      left: `calc(50% + ${outerOrbitRadius * Math.cos(fixedAngle)}px - ${featureSize/2}px)`,
      top: `calc(50% + ${outerOrbitRadius * Math.sin(fixedAngle)}px - ${featureSize/2}px)`
    };
  };

  const handleFeatureMouseEnter = (featureId) => {
    setHoveredFeature(featureId);
    setIsPaused(true);
  };
  const handleFeatureMouseLeave = () => {
    setHoveredFeature(null);
    setIsPaused(false);
  };
  const handleFeatureClick = (feature) => {
    setIsPaused(true);
    setActiveFeature(feature);
  };
  const handleModalClose = () => {
    setActiveFeature(null);
    if (!hoveredFeature) setIsPaused(false);
  };


  return (
    <div className="relative w-full min-h-[800px] bg-gradient-to-br from-[#050A14] to-[#121A2A] overflow-hidden py-12 flex items-center justify-center">
      {/* Deep Space Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-full bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.1)_0%,transparent_70%)]" />
        <div className="absolute inset-0">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ x: "100%", opacity: 0 }}
              animate={{
                x: "-100%",
                opacity: [0, 0.3, 0.3, 0],
              }}
              transition={{
                duration: 4,
                delay: i * 0.3,
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear",
              }}
              className="absolute right-0"
              style={{
                top: `${10 + i * 15}%`,
                height: "1px",
                width: "100%",
                background: `linear-gradient(90deg, transparent, ${i % 2 === 0 ? "#22d3ee" : "#8b5cf6"}40, transparent)`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Title Section - positioned above the orbits */}
      <div className="absolute top-12 left-0 right-0 text-center z-40">
        <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white/90 to-blue-400 mb-4">
          Our Solutions
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto px-4">
          Explore our comprehensive suite of financial tools designed to streamline your business operations
        </p>
      </div>

      {/* Two Orbital Paths - inner and outer */}
      {/* Inner Orbit */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-cyan-400/30"
        style={{
          width: `${innerOrbitRadius * 2}px`,
          height: `${innerOrbitRadius * 2}px`,
          borderRadius: '50%',
          zIndex: 5,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 1 }}
      />
      
      {/* Outer Orbit */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-cyan-400/20"
        style={{
          width: `${outerOrbitRadius * 2}px`,
          height: `${outerOrbitRadius * 2}px`,
          borderRadius: '50%',
          zIndex: 5,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1 }}
      />

      {/* Central Sun (always perfectly centered) - larger and more prominent */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-yellow-400 via-orange-500 to-red-600 flex items-center justify-center text-white font-bold text-center shadow-xl z-20"
        style={{
          width: `${centerSize}px`,
          height: `${centerSize}px`,
          boxShadow: '0 0 100px 15px rgba(251,191,36,0.6)',
        }}
        initial={{ scale: 0 }}
        animate={{
          scale: activeFeature || hoveredFeature ? 0.92 : 1,
          filter: activeFeature || hoveredFeature ? 'blur(8px)' : 'blur(0px)',
          opacity: activeFeature || hoveredFeature ? 0.7 : 1,
          rotate: 360
        }}
        transition={{
          duration: 2,
          rotate: {
            duration: 40,
            repeat: Infinity,
            ease: 'linear'
          }
        }}
      >
        <div className="flex flex-col items-center gap-4 p-6 backdrop-blur-sm rounded-full">
          <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-yellow-100">CypherSOL</span>
        </div>
      </motion.div>

      {/* Inner Orbit Features */}
      {innerOrbitFeatures.map((feature, i) => {
        const pos = getInnerOrbitPosition(i, innerOrbitFeatures.length);
        return (
          <motion.div
            key={feature.id}
            onMouseEnter={() => handleFeatureMouseEnter(feature.id)}
            onMouseLeave={handleFeatureMouseLeave}
            onClick={() => handleFeatureClick(feature)}
            className="absolute w-[100px] h-[100px] rounded-full backdrop-blur-md shadow-2xl flex flex-col items-center justify-center text-center cursor-pointer border-2 border-cyan-400/40 transition-all duration-300 gap-1 p-2 z-30"
            style={{
              ...pos,
              background: `linear-gradient(135deg, ${feature.color})`,
              boxShadow: hoveredFeature === feature.id ? '0 0 30px rgba(255, 255, 255, 0.7)' : '0 0 20px rgba(34,211,238,0.2)',
            }}
            animate={{
              scale: hoveredFeature === feature.id ? 1.25 : 1,
              filter: hoveredFeature && hoveredFeature !== feature.id ? 'blur(6px)' : 'blur(0px)',
              opacity: hoveredFeature && hoveredFeature !== feature.id ? 0.4 : 1,
              zIndex: hoveredFeature === feature.id ? 50 : 30,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 22 }}
          >
            {/* Floating info/title box on hover */}
            <AnimatePresence>
              {hoveredFeature === feature.id && (
                <motion.div
                  initial={{ opacity: 0, y: -24 }}
                  animate={{ opacity: 1, y: -48 }}
                  exit={{ opacity: 0, y: -24 }}
                  transition={{ duration: 0.28 }}
                  className="absolute left-1/2 -translate-x-1/2 -top-6 px-3 py-2 bg-gray-900/90 text-white text-sm rounded-xl shadow-2xl border border-cyan-400/30 font-semibold pointer-events-none"
                  style={{zIndex: 100}}
                >
                  {feature.name}
                </motion.div>
              )}
            </AnimatePresence>
            <feature.icon className="w-8 h-8 text-white/90 mb-1" />
            <span className="text-xs text-white/90 font-semibold leading-tight mt-1">{feature.name}</span>
          </motion.div>
        );
      })}
      
      {/* Outer Orbit Features */}
      {outerOrbitFeatures.map((feature, i) => {
        const pos = getOuterOrbitPosition(i, outerOrbitFeatures.length);
        return (
          <motion.div
            key={feature.id}
            onMouseEnter={() => handleFeatureMouseEnter(feature.id)}
            onMouseLeave={handleFeatureMouseLeave}
            onClick={() => handleFeatureClick(feature)}
            className="absolute w-[100px] h-[100px] rounded-full backdrop-blur-md shadow-2xl flex flex-col items-center justify-center text-center cursor-pointer border-2 border-cyan-400/40 transition-all duration-300 gap-1 p-2 z-30"
            style={{
              ...pos,
              background: `linear-gradient(135deg, ${feature.color})`,
              boxShadow: hoveredFeature === feature.id ? '0 0 30px rgba(255, 255, 255, 0.7)' : '0 0 20px rgba(34,211,238,0.2)',
            }}
            animate={{
              scale: hoveredFeature === feature.id ? 1.25 : 1,
              filter: hoveredFeature && hoveredFeature !== feature.id ? 'blur(6px)' : 'blur(0px)',
              opacity: hoveredFeature && hoveredFeature !== feature.id ? 0.4 : 1,
              zIndex: hoveredFeature === feature.id ? 50 : 30,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 22 }}
          >
            {/* Floating info/title box on hover */}
            <AnimatePresence>
              {hoveredFeature === feature.id && (
                <motion.div
                  initial={{ opacity: 0, y: -24 }}
                  animate={{ opacity: 1, y: -48 }}
                  exit={{ opacity: 0, y: -24 }}
                  transition={{ duration: 0.28 }}
                  className="absolute left-1/2 -translate-x-1/2 -top-6 px-3 py-2 bg-gray-900/90 text-white text-sm rounded-xl shadow-2xl border border-cyan-400/30 font-semibold pointer-events-none"
                  style={{zIndex: 100}}
                >
                  {feature.name}
                </motion.div>
              )}
            </AnimatePresence>
            <feature.icon className="w-8 h-8 text-white/90 mb-1" />
            <span className="text-xs text-white/90 font-semibold leading-tight mt-1">{feature.name}</span>
          </motion.div>
        );
      })}

      {/* Feature Modal */}
      <AnimatePresence>
        {activeFeature && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, scale: 1, backdropFilter: "blur(8px)" }}
            exit={{ opacity: 0, scale: 0.8, backdropFilter: "blur(0px)" }}
            className="fixed inset-0 flex items-center justify-center z-50 bg-black/50 backdrop-blur-md"
            onClick={handleModalClose}
          >
            <motion.div
              className="w-[90%] max-w-[500px] p-8 bg-gradient-to-br from-gray-900/90 to-gray-800/90 rounded-2xl shadow-2xl border border-cyan-500/30"
              onClick={e => e.stopPropagation()}
              layoutId={activeFeature.id}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-3 rounded-full bg-gradient-to-br ${activeFeature.color}`}>
                  <activeFeature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                  {activeFeature.name}
                </h3>
                <motion.button
                  className="ml-auto text-gray-400 hover:text-red-400 transition-colors"
                  onClick={handleModalClose}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  ✕
                </motion.button>
              </div>
              <p className="text-lg text-gray-300 mb-6">
                {activeFeature.description}
              </p>
              <ul className="space-y-4">
                {activeFeature.points.map((point, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center text-gray-400"
                  >
                    <div className="w-2 h-2 rounded-full bg-cyan-500 mr-3" />
                    {point}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProductsSection;
