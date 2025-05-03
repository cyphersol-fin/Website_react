import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Calculator, Building2, FileText, FileSpreadsheet, UserCheck, Handshake, BarChart3, PersonStanding, Database, FileDigit, Receipt, CreditCard, PieChart, FileCheck, ClipboardCheck, BadgePercent, User, Briefcase, Landmark, Server } from "lucide-react";

const features = [
  {
    id: "tally-data-manager",
    name: "Tally Data Manager",
    description: "Advanced tools for seamless Tally data management and integration.",
    points: ["Data Import/Export", "Auto Reconciliation", "Batch Processing", "Custom Mapping"],
    icon: Database,
    color: "from-orange-400 to-red-500"
  },
  {
    id: "tally-connector",
    name: "Tally Connector Pro",
    description: "Connect and synchronize Tally with other business applications seamlessly.",
    points: ["Real-time Sync", "Multi-platform Integration", "Automated Workflows", "Data Validation"],
    icon: Server,
    color: "from-red-400 to-orange-500"
  },
  {
    id: "tally-reports",
    name: "Tally Reports Suite",
    description: "Comprehensive reporting and analytics tools for Tally data.",
    points: ["Custom Reports", "Data Visualization", "Scheduled Exports", "Interactive Dashboards"],
    icon: PieChart,
    color: "from-amber-400 to-yellow-500"
  },
  {
    id: "tally-automation",
    name: "Tally Automation",
    description: "Automate repetitive tasks and workflows in Tally environment.",
    points: ["Task Scheduling", "Process Automation", "Error Handling", "Audit Logging"],
    icon: ClipboardCheck,
    color: "from-yellow-400 to-amber-500"
  },
  {
    id: "tally-cloud",
    name: "Tally Cloud Backup",
    description: "Secure cloud backup and recovery solution for Tally data.",
    points: ["Automated Backups", "Secure Encryption", "Quick Recovery", "Version History"],
    icon: Server,
    color: "from-orange-400 to-red-500"
  },
  {
    id: "bank-statement",
    name: "Bank Statement Analyzer",
    description: "Intelligent bank statement analysis and processing system.",
    points: ["Transaction Analysis", "Pattern Recognition", "Cash Flow Tracking", "Account Monitoring"],
    icon: Landmark,
    color: "from-emerald-400 to-teal-500"
  },
  {
    id: "itr-filing",
    name: "ITR Filing System",
    description: "Streamlined income tax return filing and management solution.",
    points: ["Auto Calculation", "Compliance Check", "Document Verification", "Status Tracking"],
    icon: FileCheck,
    color: "from-blue-400 to-indigo-500"
  },
  {
    id: "invoice-manager",
    name: "Invoice Manager Pro",
    description: "Digital invoice processing and management platform.",
    points: ["Quick Generation", "Template Library", "Payment Tracking", "GST Compliance"],
    icon: Receipt,
    color: "from-purple-400 to-pink-500"
  },
  {
    id: "ca-suite",
    name: "CA Practice Suite",
    description: "Comprehensive suite of tools for chartered accountants.",
    points: ["Client Management", "Financial Reporting", "Tax Planning", "Audit Tools"],
    icon: Briefcase,
    color: "from-yellow-400 to-orange-500"
  },
  {
    id: "dsa-platform",
    name: "DSA Management Platform",
    description: "Efficient loan processing and management system for DSAs.",
    points: ["Lead Management", "Loan Processing", "Commission Tracking", "Document Handling"],
    icon: Handshake,
    color: "from-cyan-400 to-blue-500"
  },
  {
    id: "gst-returns",
    name: "GST Returns Automation",
    description: "Automated GST return filing and reconciliation system.",
    points: ["Return Filing", "Input Credit", "Reconciliation", "Compliance Monitor"],
    icon: BadgePercent,
    color: "from-green-400 to-emerald-500"
  },
  {
    id: "developer-profile",
    name: "Developer Profile",
    description: "Expert Software Development Services",
    points: [
      "Full-Stack Development (Frontend & Backend)",
      "RESTful API Design & Integration",
      "Database Management & Query Optimization",
      "DevOps & CI/CD Pipeline Automation",
      "Containerization with Docker",
      "Cloud Deployment & Monitoring (AWS, GCP)",
      "Version Control & Code Reviews (Git)",
      "Unit Testing & Debugging",
      "Agile Workflow & Team Collaboration"
    ],
    icon: User,
    color: "from-blue-400 to-cyan-500"
  }
];

const ProductsSection = () => {
  const [activeFeature, setActiveFeature] = useState(null);
  const [hoveredFeature, setHoveredFeature] = useState(null);
  const [hoveredInfoBox, setHoveredInfoBox] = useState(null);
  const navigate = useNavigate();
  const [orbitRotation, setOrbitRotation] = useState(0); // State to track orbit rotation
  const [isPaused, setIsPaused] = useState(false);
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 1200,
    height: typeof window !== 'undefined' ? window.innerHeight : 800
  });

  // Smooth rotation speed ramp-up
  const [rotationSpeed, setRotationSpeed] = useState(0);
  const MAX_ROTATION_SPEED = 0.002;
  const RAMP_DURATION = 1000; // milliseconds

  // Ramp-up effect on mount
  useEffect(() => {
    let start = null;
    function ramp(timestamp) {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      const speed = Math.min(MAX_ROTATION_SPEED, (MAX_ROTATION_SPEED * elapsed) / RAMP_DURATION);
      setRotationSpeed(speed);
      if (elapsed < RAMP_DURATION) {
        requestAnimationFrame(ramp);
      }
    }
    requestAnimationFrame(ramp);
  }, []);

  // Animate orbit rotation with dynamic rotationSpeed
  useEffect(() => {
    let animationFrameId;
    const animate = () => {
      if (!isPaused) {
        setOrbitRotation(prev => (prev + rotationSpeed) % (2 * Math.PI));
      }
      animationFrameId = requestAnimationFrame(animate);
    };
    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused, rotationSpeed]);

  // Track window resize for responsive adjustments
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Responsive configuration that preserves original UI
  const getResponsiveValues = () => {
    const width = windowSize.width;
    
    // Calculate scale factor based on screen width
    // This maintains the original UI proportions while scaling everything down
    const calculateScale = () => {
      if (width < 480) return 0.5;      // Extra small devices
      if (width < 640) return 0.6;      // Small mobile
      if (width < 768) return 0.7;      // Mobile
      if (width < 1024) return 0.85;    // Tablets
      return 1;                         // Desktop (original size)
    };
    
    const scale = calculateScale();
    
    // Apply scale to all original values
    return {
      featureSize: Math.round(100 * scale),
      innerOrbitRadius: Math.round(180 * scale),
      outerOrbitRadius: Math.round(320 * scale),
      centerSize: Math.round(220 * scale),
      scale: scale
    };
  };
  
  // Get responsive values
  const { featureSize, innerOrbitRadius, outerOrbitRadius, centerSize } = getResponsiveValues();

  // Distribute features between two orbits - keeping original distribution
  const innerOrbitFeatures = features.slice(0, 3); // First 3 features on inner orbit
  const outerOrbitFeatures = features.slice(3); // Remaining features on outer orbit

  // Calculate position for a feature on the inner orbit
  const getInnerOrbitPosition = (index, totalFeatures) => {
    // Calculate fixed angle for this feature on the inner orbit
    const angle = (index * (2 * Math.PI / totalFeatures)) + orbitRotation;

    // Calculate x and y coordinates on the orbit
    const x = innerOrbitRadius * Math.cos(angle);
    const y = innerOrbitRadius * Math.sin(angle);

    return {
      left: `calc(50% + ${x}px - ${featureSize / 2}px)`,
      top: `calc(50% + ${y}px - ${featureSize / 2}px)`
    };
  };

  // Calculate position for a feature on the outer orbit
  const getOuterOrbitPosition = (index, totalFeatures) => {
    // Calculate fixed angle for this feature on the outer orbit
    const angle = (index * (2 * Math.PI / totalFeatures)) + orbitRotation;

    // Calculate x and y coordinates on the orbit
    const x = outerOrbitRadius * Math.cos(angle);
    const y = outerOrbitRadius * Math.sin(angle);

    return {
      left: `calc(50% + ${x}px - ${featureSize / 2}px)`,
      top: `calc(50% + ${y}px - ${featureSize / 2}px)`
    };
  };

  // Event handlers for feature interactions
  const handleFeatureMouseEnter = (featureId) => {
    setHoveredFeature(featureId);
    setIsPaused(true); // Only pause when hovering over a feature
  };

  const handleFeatureMouseLeave = () => {
    setHoveredFeature(null);
    // Only unpause if no feature is active
    if (!activeFeature) {
      setIsPaused(false);
    }
  };

  const handleFeatureClick = (feature) => {
    setActiveFeature(feature);
    setIsPaused(true);
  };

  const handleModalClose = () => {
    setActiveFeature(null);
    // Only unpause if no feature is being hovered
    if (!hoveredFeature) {
      setIsPaused(false);
    }
  };



  return (
    <div className="relative w-full overflow-hidden flex flex-col">
      {/* bg-gradient-to-br from-[#050A14] to-[#121A2A] */}
      {/* Deep Space Background for entire component */}
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

      {/* Spacer above title */}
      <div className="relative h-8 z-10"></div>

      {/* Title Section */}
      <div className="relative w-full py-6">
        <div className="relative z-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white/90 to-blue-400 mb-2 sm:mb-4 text-center">
            Our Solutions
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto px-4 text-sm sm:text-base md:text-lg text-center">
            Explore our comprehensive suite of financial tools designed to streamline your business operations
          </p>
        </div>
      </div>

      {/* Spacer between sections */}
      {/* <div className="relative h-2 z-10"></div> */}

      {/* Orbit display area - with responsive scaling */}
      <div className="relative w-full min-h-[400px] sm:min-h-[600px] md:min-h-[700px] lg:min-h-[800px] flex-grow flex items-center justify-center z-10 overflow-hidden">
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
          animate={{ opacity: 2 }}
          transition={{ duration: 1 }}
        />

        {/* Central Sun (always perfectly centered) - smaller and more prominent */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex items-center justify-center pointer-events-none">
          <motion.div
            className="rounded-full bg-white flex items-center justify-center text-white font-bold text-center shadow-xl"
            style={{
              width: `${centerSize}px`,
              height: `${centerSize}px`,
              boxShadow: '0 0 90px 15px rgba(34,211,238,0.45)',
            }}
            initial={{ scale: 0 }}
            animate={{
              scale: activeFeature || hoveredFeature ? 0.92 : 1,
              filter: activeFeature || hoveredFeature ? 'blur(5px)' : 'blur(0px)',
              opacity: activeFeature || hoveredFeature ? 0.8 : 1,
            }}
            transition={{
              duration: 2,
            }}
          >
            <div className="flex flex-col items-center justify-center w-full h-full">
              <img src="/assets/images/Logo_new.png" alt="CypherSOL" className="w-full h-auto object-contain p-2" />
            </div>
          </motion.div>
        </div>

        {/* Inner Orbit Features - Now with controlled animation */}
        {innerOrbitFeatures.map((feature, i) => {
          // Calculate angle for this feature based on its position in the orbit
          const angle = (i * (2 * Math.PI / innerOrbitFeatures.length)) + orbitRotation;
          // Calculate position directly from the angle
          const x = innerOrbitRadius * Math.cos(angle);
          const y = innerOrbitRadius * Math.sin(angle);

          return (
            <motion.div
              key={feature.id}
              onMouseEnter={() => handleFeatureMouseEnter(feature.id)}
              onMouseLeave={handleFeatureMouseLeave}
              onClick={() => handleFeatureClick(feature)}
              className="absolute rounded-full backdrop-blur-md shadow-2xl flex flex-col items-center justify-center text-center cursor-pointer border-2 border-cyan-400/40 z-30"
              style={{
                width: `${featureSize}px`,
                height: `${featureSize}px`,
                left: `calc(50% + ${x}px - ${featureSize / 2}px)`,
                top: `calc(50% + ${y}px - ${featureSize / 2}px)`,
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
                {(hoveredFeature === feature.id || hoveredInfoBox === feature.id) && (
                  <motion.div
                    initial={{ opacity: 0, y: -24 }}
                    animate={{ opacity: 1, y: -48 }}
                    exit={{ opacity: 0, y: -24 }}
                    transition={{ duration: 0.28 }}
                    className="absolute left-1/2 -translate-x-1/2 -top-6 px-4 py-3 bg-gray-900/95 text-white rounded-xl shadow-2xl border border-cyan-400/40 font-semibold max-w-[250px] w-max"
                    style={{
                      zIndex: 100,
                      transform: `translate(-50%, -100%)`,
                      maxWidth: "250px"
                    }}
                    onMouseEnter={() => setHoveredInfoBox(feature.id)}
                    onMouseLeave={() => setHoveredInfoBox(null)}
                  >
                    <div className="flex flex-col gap-2">
                      <h3 className="text-sm font-bold text-cyan-400">{feature.name}</h3>
                      <p className="text-xs text-gray-300 font-normal leading-tight">{feature.description || "Innovative solution designed to optimize your financial operations."}</p>
                      <div className="flex justify-end mt-1">
                        <button
                          className="text-xs bg-cyan-600 hover:bg-cyan-500 text-white px-3 py-1 rounded-md transition-colors"
                          onClick={(e) => {
                            e.stopPropagation();
                            // Navigate to feature page or open modal with more details

                            // Set this to navigate to feature page
                            navigate('/bank-statement-analyzer');

                            // Set this to open modal
                            // setActiveFeature(feature);
                          }}
                        >
                          More Info
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              <feature.icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 text-white/90 mb-0.5 sm:mb-1" style={{ transform: 'translateZ(0)' }} />
              <span className="text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs text-white/90 font-semibold leading-tight mt-0.5 sm:mt-1 whitespace-nowrap">{feature.name}</span>

              {/* Line connecting to center */}
              <div
                className="absolute left-1/2 top-1/2 -z-10 bg-gradient-to-r from-cyan-500/40 to-transparent"
                style={{
                  width: `${innerOrbitRadius}px`,
                  height: '1px',
                  transformOrigin: 'left center',
                  transform: `rotate(${angle + Math.PI}rad)`,
                }}
              />
            </motion.div>
          );
        })}

        {/* Outer Orbit Features - Now with controlled animation */}
        {outerOrbitFeatures.map((feature, i) => {
          // Calculate angle for this feature based on its position in the orbit
          const angle = (i * (2 * Math.PI / outerOrbitFeatures.length)) + orbitRotation;
          // Calculate position directly from the angle
          const x = outerOrbitRadius * Math.cos(angle);
          const y = outerOrbitRadius * Math.sin(angle);

          return (
            <motion.div
              key={feature.id}
              onMouseEnter={() => handleFeatureMouseEnter(feature.id)}
              onMouseLeave={handleFeatureMouseLeave}
              onClick={() => handleFeatureClick(feature)}
              className="absolute rounded-full backdrop-blur-md shadow-2xl flex flex-col items-center justify-center text-center cursor-pointer border-2 border-cyan-400/40 z-30"
              style={{
                width: `${featureSize}px`,
                height: `${featureSize}px`,
                left: `calc(50% + ${x}px - ${featureSize / 2}px)`,
                top: `calc(50% + ${y}px - ${featureSize / 2}px)`,
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
                {(hoveredFeature === feature.id || hoveredInfoBox === feature.id) && (
                  <motion.div
                    initial={{ opacity: 0, y: -24 }}
                    animate={{ opacity: 1, y: -48 }}
                    exit={{ opacity: 0, y: -24 }}
                    transition={{ duration: 0.28 }}
                    className="absolute left-1/2 -translate-x-1/2 -top-6 px-4 py-3 bg-gray-900/95 text-white rounded-xl shadow-2xl border border-cyan-400/40 font-semibold max-w-[250px] w-max"
                    style={{
                      zIndex: 100,
                      transform: `translate(-50%, -100%)`,
                      maxWidth: "250px"
                    }}
                    onMouseEnter={() => setHoveredInfoBox(feature.id)}
                    onMouseLeave={() => setHoveredInfoBox(null)}
                  >
                    <div className="flex flex-col gap-2">
                      <h3 className="text-sm font-bold text-cyan-400">{feature.name}</h3>
                      <p className="text-xs text-gray-300 font-normal leading-tight">{feature.description || "Innovative solution designed to optimize your financial operations."}</p>
                      <div className="flex justify-end mt-1">
                        <button
                          className="text-xs bg-cyan-600 hover:bg-cyan-500 text-white px-3 py-1 rounded-md transition-colors"
                          onClick={(e) => {
                            e.stopPropagation();
                            // Navigate to feature page or open modal with more details

                            // Set this to navigate to feature page
                            navigate('/bank-statement-analyzer');

                            // Set this to open modal
                            // setActiveFeature(feature);
                          }}
                        >
                          More Info
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              <feature.icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 text-white/90 mb-0.5 sm:mb-1" style={{ transform: 'translateZ(0)' }} />
              <span className="text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs text-white/90 font-semibold leading-tight mt-0.5 sm:mt-1 whitespace-nowrap">{feature.name}</span>

              {/* Line connecting to center */}
              <div
                className="absolute left-1/2 top-1/2 -z-10 bg-gradient-to-r from-cyan-500/40 to-transparent"
                style={{
                  width: `${outerOrbitRadius}px`,
                  height: '1px',
                  transformOrigin: 'left center',
                  transform: `rotate(${angle + Math.PI}rad)`,
                }}
              />
            </motion.div>
          );
        })}
      </div>

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
              className="w-[95%] sm:w-[90%] max-w-[500px] p-4 sm:p-6 md:p-8 bg-gradient-to-br from-gray-900/90 to-gray-800/90 rounded-2xl shadow-2xl border border-cyan-500/30 mx-auto overflow-y-auto max-h-[90vh] md:max-h-[80vh]"
              onClick={e => e.stopPropagation()}
              layoutId={activeFeature.id}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-3 rounded-full bg-gradient-to-br ${activeFeature.color}`}>
                  <activeFeature.icon className="w-7 h-7 md:w-8 md:h-8 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
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
              <p className="text-base md:text-lg text-gray-300 mb-6">
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
