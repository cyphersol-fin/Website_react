import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Added AnimatePresence for smooth exit 

// animations
import {
  Banknote,
  BookOpen,
  ChevronDown,
  FileSpreadsheet,
  Info,
  Layers,
  Menu,
  Phone,
  Users,
  X,
} from "lucide-react";
const base = import.meta.env.BASE_URL; // Will be '/static/' in production (as per Vite config)
export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productMenuOpen, setProductMenuOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [mobileProductMenuOpen, setMobileProductMenuOpen] = useState(false);
  const [mobileResourcesMenuOpen, setMobileResourcesMenuOpen] = useState(false);

  // Refs for tracking hover state
  const productTimeoutRef = useRef(null);
  const resourcesTimeoutRef = useRef(null);
  const productRef = useRef(null);
  const resourcesRef = useRef(null);

  // Enhanced handlers for dropdown behavior with slight delay for better UX
  const handleMouseEnter = (dropdownType) => {
    if (dropdownType === "product") {
      if (productTimeoutRef.current) clearTimeout(productTimeoutRef.current);
      setProductMenuOpen(true);
    } else if (dropdownType === "resources") {
      if (resourcesTimeoutRef.current)
        clearTimeout(resourcesTimeoutRef.current);
      setIsResourcesOpen(true);
    }
  };

  const handleMouseLeave = (dropdownType) => {
    if (dropdownType === "product") {
      productTimeoutRef.current = setTimeout(() => {
        if (!productRef.current?.matches(":hover")) {
          setProductMenuOpen(false);
        }
      }, 300);
    } else if (dropdownType === "resources") {
      resourcesTimeoutRef.current = setTimeout(() => {
        if (!resourcesRef.current?.matches(":hover")) {
          setIsResourcesOpen(false);
        }
      }, 300);
    }
  };

  // Animation variants for dropdown menus
  const dropdownVariants = {
    hidden: { opacity: 0, y: -10, transition: { duration: 0.2 } },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, y: -10, transition: { duration: 0.2 } },
  };

  // Animation variants for mobile menu
  const mobileMenuVariants = {
    hidden: { x: "100%", transition: { duration: 0.3, ease: "easeInOut" } },
    visible: { x: 0, transition: { duration: 0.3, ease: "easeInOut" } },
    exit: { x: "100%", transition: { duration: 0.3, ease: "easeInOut" } },
  };

  // Button hover animation
  const buttonHoverVariants = {
    hover: { scale: 1.03, transition: { duration: 0.2 } },
    tap: { scale: 0.97, transition: { duration: 0.1 } },
  };

  return (
    <header className="bg-white">
      <nav
        className="mx-auto flex max-w-8xl items-center justify-between p-4 lg:px-8"
        aria-label="Global"
      >
        <div className="flex md:flex-1">
          <a href="/" className="-m-1.5 p-1.5 me-4">
            <img
              src={`${base}assets/images/Cyphers.png`}
              alt="CypherSOL"
              className="w-40"
            />
            {/* <span className="text-2xl font-bold text-white">
              Cypher<span className="text-cyan-400">SOL</span>
            </span> */}
          </a>
        </div>
        <div className="flex md:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-900 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden md:flex md:gap-x-12">
          <div
            className="relative"
            ref={productRef}
            onMouseEnter={() => handleMouseEnter("product")}
            onMouseLeave={() => handleMouseLeave("product")}
          >
            <motion.button
              type="button"
              className="flex items-center gap-x-1 font-bold text-gray-900 transition-colors duration-300"
              aria-expanded={productMenuOpen}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Product
              <motion.span
                animate={{ rotate: productMenuOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown className="ml-1 h-4 w-4" />
              </motion.span>
            </motion.button>

            <AnimatePresence>
              {productMenuOpen && (
                <motion.div
                  variants={dropdownVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="absolute top-full -left-8 z-20 mt-3 w-screen max-w-lg overflow-hidden rounded-3xl bg-gray-900/50 backdrop-blur-xl ring-1 shadow-lg ring-gray-800/50"
                >
                  <div className="p-4">
                    <div className="group relative flex items-center gap-x-6 rounded-lg p-4 hover:bg-gray-800 transition-colors duration-200">
                      <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-800 group-hover:bg-gray-700 transition-colors duration-200">
                        <Banknote className="size-5 text-gray-300 group-hover:text-cyan-400 transition-colors duration-200" />
                      </div>
                      <div className="flex-auto">
                        <a
                          href="/bank-statement-analyzer"
                          className="block font-semibold text-gray-300 hover:text-cyan-400 transition-colors duration-200"
                        >
                         Chartered Accountant
                          <span className="absolute inset-0"></span>
                        </a>
                        <p className="mt-1 text-gray-400">
                          Get a better understanding of your traffic
                        </p>
                      </div>
                    </div>
                    <div className="group relative flex items-center gap-x-6 rounded-lg p-4 hover:bg-gray-800 transition-colors duration-200">
                      <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-800 group-hover:bg-gray-700 transition-colors duration-200">
                        <Layers className="size-5 text-gray-300 group-hover:text-cyan-400 transition-colors duration-200" />
                      </div>
                      <div className="flex-auto">
                        <a
                          href="/dsa"
                          className="block font-semibold text-gray-300 hover:text-cyan-400 transition-colors duration-200"
                        >
                          DSA(Direct Selling Agent)
                          <span className="absolute inset-0"></span>
                        </a>
                        <p className="mt-1 text-gray-400">
                          Your customers' data will be safe and secure
                        </p>
                      </div>
                    </div>
                    <div className="group relative flex items-center gap-x-6 rounded-lg p-4 hover:bg-gray-800 transition-colors duration-200">
                      <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-800 group-hover:bg-gray-700 transition-colors duration-200">
                        <Layers className="size-5 text-gray-300 group-hover:text-cyan-400 transition-colors duration-200" />
                      </div>
                      <div className="flex-auto">
                        <a
                          href="/msme"
                          className="block font-semibold text-gray-300 hover:text-cyan-400 transition-colors duration-200"
                        >
                         MSME Accounting
                          <span className="absolute inset-0"></span>
                        </a>
                        <p className="mt-1 text-gray-400">
                          Your customers' data will be safe and secure
                        </p>
                      </div>
                    </div>
                    <div className="group relative flex items-center gap-x-6 rounded-lg p-4 hover:bg-gray-800 transition-colors duration-200">
                      <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-800 group-hover:bg-gray-700 transition-colors duration-200">
                        <Layers className="size-5 text-gray-300 group-hover:text-cyan-400 transition-colors duration-200" />
                      </div>
                      <div className="flex-auto">
                        <a
                          href="/forensic"
                          className="block font-semibold text-gray-300 hover:text-cyan-400 transition-colors duration-200"
                        >
                         FORENSIC
                          <span className="absolute inset-0"></span>
                        </a>
                        <p className="mt-1 text-gray-400">
                          Your customers' data will be safe and secure
                        </p>
                      </div>
                    </div>
                    
                    <div className="group relative flex items-center gap-x-6 rounded-lg p-4 hover:bg-gray-800 transition-colors duration-200">
                      <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-800 group-hover:bg-gray-700 transition-colors duration-200">
                        <FileSpreadsheet className="size-5 text-gray-300 group-hover:text-cyan-400 transition-colors duration-200" />
                      </div>
                      <div className="flex-auto">
                        <a
                          href="/excel-to-tally"
                          className="block font-semibold text-gray-300 hover:text-cyan-400 transition-colors duration-200"
                        >
                          Excel to Tally Data Import Utility
                          <span className="absolute inset-0"></span>
                        </a>
                        <p className="mt-1 text-gray-400">
                          Speak directly to your customers
                        </p>
                      </div>
                    </div>
                    <div className="group relative flex items-center gap-x-6 rounded-lg p-4 hover:bg-gray-800 transition-colors duration-200">
                      <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-800 group-hover:bg-gray-700 transition-colors duration-200">
                        <Layers className="size-5 text-gray-300 group-hover:text-cyan-400 transition-colors duration-200" />
                      </div>
                      <div className="flex-auto">
                        <a
                          href="/bank-statement-analyzer-excel-to-tally"
                          className="block font-semibold text-gray-300 hover:text-cyan-400 transition-colors duration-200"
                        >
                          BSA & Excel to Tally Data Import Utility Combo
                          <span className="absolute inset-0"></span>
                        </a>
                        <p className="mt-1 text-gray-400">
                          Your customers' data will be safe and secure
                        </p>
                      </div>
                    </div>
                    
                    
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Resources */}
          <div
            className="relative"
            ref={resourcesRef}
            onMouseEnter={() => handleMouseEnter("resources")}
            onMouseLeave={() => handleMouseLeave("resources")}
          >
            <motion.button
              type="button"
              className="flex items-center gap-x-1 font-bold text-gray-900 transition-colors duration-300"
              aria-expanded={isResourcesOpen}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Company
              <motion.span
                animate={{ rotate: isResourcesOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown className="ml-1 h-4 w-4" />
              </motion.span>
            </motion.button>

            <AnimatePresence>
              {isResourcesOpen && (
                <motion.div
                  variants={dropdownVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="absolute top-full -left-8 z-20 mt-3 w-screen max-w-lg overflow-hidden rounded-3xl bg-gray-900/50 backdrop-blur-xl ring-1 shadow-lg ring-gray-800/50"
                >
                  <div className="p-4">
                    <div className="group relative flex items-center gap-x-6 rounded-lg p-4 hover:bg-gray-800 transition-colors duration-200">
                      <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-800 group-hover:bg-gray-700 transition-colors duration-200">
                        <Info className="size-5 text-gray-300 group-hover:text-cyan-400 transition-colors duration-200" />
                      </div>
                      <div className="flex-auto">
                        <a
                          href="/about"
                          className="block font-semibold text-gray-300 hover:text-cyan-400 transition-colors duration-200"
                        >
                          About Us
                          <span className="absolute inset-0"></span>
                        </a>
                        <p className="mt-1 text-gray-400">
                          Get a better understanding of your traffic
                        </p>
                      </div>
                    </div>
                    <div className="group relative flex items-center gap-x-6 rounded-lg p-4 hover:bg-gray-800 transition-colors duration-200">
                      <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-800 group-hover:bg-gray-700 transition-colors duration-200">
                        <Users className="size-5 text-gray-300 group-hover:text-cyan-400 transition-colors duration-200" />
                      </div>
                      <div className="flex-auto">
                        <a
                          href="/team"
                          className="block font-semibold text-gray-300 hover:text-cyan-400 transition-colors duration-200"
                        >
                          Team
                          <span className="absolute inset-0"></span>
                        </a>
                        <p className="mt-1 text-gray-400">
                          Speak directly to your customers
                        </p>
                      </div>
                    </div>
                    <div className="group relative flex items-center gap-x-6 rounded-lg p-4 hover:bg-gray-800 transition-colors duration-200">
                      <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-800 group-hover:bg-gray-700 transition-colors duration-200">
                        <BookOpen className="size-5 text-gray-300 group-hover:text-cyan-400 transition-colors duration-200" />
                      </div>
                      <div className="flex-auto">
                        <a
                          href="/blog"
                          className="block font-semibold text-gray-300 hover:text-cyan-400 transition-colors duration-200"
                        >
                          Blog
                          <span className="absolute inset-0"></span>
                        </a>
                        <p className="mt-1 text-gray-400">
                          Your customers' data will be safe and secure
                        </p>
                      </div>
                    </div>
                    <div className="group relative flex items-center gap-x-6 rounded-lg p-4 hover:bg-gray-800 transition-colors duration-200">
                      <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-800 group-hover:bg-gray-700 transition-colors duration-200">
                        <Phone className="size-5 text-gray-300 group-hover:text-cyan-400 transition-colors duration-200" />
                      </div>
                      <div className="flex-auto">
                        <a
                          href="/contact"
                          className="block font-semibold text-gray-300 hover:text-cyan-400 transition-colors duration-200"
                        >
                          Contact Us
                          <span className="absolute inset-0"></span>
                        </a>
                        <p className="mt-1 text-gray-400">
                          Your customers' data will be safe and secure
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <motion.a
            href="/reseller"
            className="font-bold text-gray-900 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Reseller
          </motion.a>

          <motion.a
            href="/price"
            className="font-bold text-gray-900 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Price
          </motion.a>
        </div>
        <div className="hidden md:flex md:flex-1 md:justify-end md:items-center md:space-x-4">
          <motion.a
            href="/login"
            variants={buttonHoverVariants}
            whileHover="hover"
            whileTap="tap"
            className="px-4 py-2 rounded-lg bg-gray-900 text-white border border-gray-800 hover:bg-gray-800 transition-colors duration-200"
          >
            Sign In
          </motion.a>
          <motion.a
            href="/trial"
            variants={buttonHoverVariants}
            whileHover="hover"
            whileTap="tap"
            className="hidden lg:block px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity duration-200"
          >
            Register
          </motion.a>
        </div>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="md:hidden fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-800/10"
            role="dialog"
            aria-modal="true"
          >
            <div
              className="fixed inset-0 z-10 bg-white backdrop-blur-sm"
              onClick={() => setMobileMenuOpen(false)}
            />
            <div className="relative z-20">
              <div className="flex items-center justify-between">
                <a href="/" className="-m-1.5 p-1.5">
                  <img
                    src={`${base}assets/images/Cyphers.png}`}
                    alt="CupherSOL"
                    className="w-40 mb-5"
                  />
                </a>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-900  transition-colors duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <X className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    <div className="-mx-3">
                      <button
                        type="button"
                        className="flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-gray-900 transition-colors duration-200"
                        aria-controls="disclosure-1"
                        aria-expanded={mobileProductMenuOpen}
                        onClick={() =>
                          setMobileProductMenuOpen(!mobileProductMenuOpen)
                        }
                      >
                        Product
                        <motion.span
                          animate={{ rotate: mobileProductMenuOpen ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ChevronDown className="h-4 w-4" aria-hidden="true" />
                        </motion.span>
                      </button>

                      <AnimatePresence>
                        {mobileProductMenuOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="mt-2 space-y-2 overflow-hidden"
                            id="disclosure-1"
                          >
                            <a
                              href="/bank-statement-analyzer"
                              className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 transition-colors duration-200"
                            >
                              Bank Statement Analyzer
                            </a>
                            <a
                              href="/excel-to-tally"
                              className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 transition-colors duration-200"
                            >
                              Excel to Tally Data Import Utility
                            </a>
                            <a
                              href="/bank-statement-analyzer-excel-to-tally"
                              className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 transition-colors duration-200"
                            >
                              BSA & Excel to Tally Data Import Utility Combo
                            </a>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                    <div className="-mx-3">
                      <button
                        type="button"
                        className="flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-gray-900 transition-colors duration-200"
                        aria-controls="disclosure-2"
                        aria-expanded={mobileResourcesMenuOpen}
                        onClick={() =>
                          setMobileResourcesMenuOpen(!mobileResourcesMenuOpen)
                        }
                      >
                        Company
                        <motion.span
                          animate={{
                            rotate: mobileResourcesMenuOpen ? 180 : 0,
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          <ChevronDown className="h-4 w-4" aria-hidden="true" />
                        </motion.span>
                      </button>

                      <AnimatePresence>
                        {mobileResourcesMenuOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="mt-2 space-y-2 overflow-hidden"
                            id="disclosure-2"
                          >
                            <a
                              href="/about"
                              className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 transition-colors duration-200"
                            >
                              About Us
                            </a>
                            <a
                              href="/team"
                              className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 transition-colors duration-200"
                            >
                              Team
                            </a>
                            <a
                              href="/blog"
                              className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 transition-colors duration-200"
                            >
                              Blog
                            </a>
                            <a
                              href="/contact"
                              className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 transition-colors duration-200"
                            >
                              Contact Us
                            </a>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                    <a
                      href="/reseller"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 transition-colors duration-200"
                    >
                      Reseller
                    </a>
                    <a
                      href="/price"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 transition-colors duration-200"
                    >
                      Price
                    </a>
                  </div>
                  <div className="py-6 flex flex-col space-y-4">
                    <a href="/login">
                      <button className="w-full px-4 py-2 rounded-lg bg-gray-900 text-white border border-gray-800 hover:bg-gray-800 transition-colors duration-200">
                        Sign In
                      </button>
                    </a>
                    <a href="/trial">
                      <button className="w-full px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity duration-200">
                        Register
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
