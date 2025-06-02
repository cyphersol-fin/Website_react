import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { UserModal } from "./UserModal";
// CA Plans
const caPlans = [
  {
    name: "Basic",
    originalPrice: "7,000",
    price: 4000,
    features: [
      "300 statements",
      "Additional PC: ₹1,500 per unit",
      {
        text: "Tally Import Utility",
        tooltip: "Payment, Receipt, Contra, Purchase, Sales (5 vouchers)",
      },
      "Easy installation and setup",
      "Email support",
    ],
    popular: false,
  },
  {
    name: "Standard",
    originalPrice: "12,000",
    price: 6000,
    features: [
      "500 statements",
      "Additional PC: ₹1,500 per unit",
      {
        text: "Tally Import Utility",
        tooltip: "Payment, Receipt, Contra, Purchase, Sales (5 vouchers)",
      },
      "Easy installation and setup",
      "Email support",
    ],
    popular: false,
  },
  {
    name: "Premium",
    originalPrice: "20,000",
    price: 12000,
    features: [
      "Unlimited statements",
      "Additional PC: ₹1,500 per unit",
      {
        text: "Tally Import Utility",
        tooltip: "Payment, Receipt, Contra, Purchase, Sales (5 vouchers)",
      },
      "Easy installation and setup",
      "Email support",
    ],
    popular: true,
  },
];
export const OfflineBsaPlan = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(10);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSave = () => {
    setModalOpen(false);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full mx-auto"
      >
        {caPlans.map((plan, index) => (
          <Card
            key={plan.name}
            className={`relative flex flex-col bg-gray-900/40 border-gray-800 transform transition-all duration-500 
                              ${
                                isVisible
                                  ? "translate-y-0 opacity-100"
                                  : "translate-y-10 opacity-0"
                              }
                              ${
                                plan.popular
                                  ? "ring-2 ring-blue-500/50 shadow-lg shadow-blue-500/20"
                                  : "hover:border-blue-500/50"
                              }
                            `}
            style={{
              transitionDelay: `${index * 150}ms`,
            }}
          >
            <CardHeader>
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-blue-500 to-cyan-400 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg shadow-lg transform translate-x-0 -translate-y-0">
                  POPULAR
                </div>
              )}
              <CardTitle className="text-xl text-center text-gray-200 mb-4">
                {plan.name}
              </CardTitle>
              <div className="text-center mt-4 space-y-2">
                <div className="relative inline-block">
                  <h3 className="text-sm text-gray-400">
                    Original Price:{" "}
                    <span className="text-[#FFC107] text-2xl font-semibold relative inline-block">
                      ₹{plan.originalPrice}
                      <div
                        className="absolute w-full h-0.5 bg-white"
                        style={{
                          top: "70%",
                          left: "0",
                          transform: "rotate(-12deg)",
                          transformOrigin: "left center",
                        }}
                      ></div>
                    </span>
                  </h3>
                </div>
                <motion.h2
                  whileHover={{ scale: 1.05 }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 10,
                  }}
                  className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"
                >
                  ₹{plan.price.toLocaleString()}
                </motion.h2>
                <p className="text-sm text-gray-400">Per license</p>
                <h3 className="text-sm text-blue-100">
                  {" "}
                  +18% GST ({" "}
                  <span>
                    ₹{(plan.price * 0.18).toFixed(0).toLocaleString()}
                  </span>
                  )
                </h3>
              </div>
              <hr className="border-gray-800" />
            </CardHeader>

            <CardContent className="flex-1">
              <ul className="space-y-4">
                {plan.features.map((feature, i) => (
                  <motion.li
                    key={i}
                    className="flex items-start gap-2"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 + 0.2 }}
                  >
                    <Check className="h-5 w-5 text-blue-400 shrink-0 mt-0.5" />
                    {typeof feature === "string" ? (
                      <span className="text-gray-300">{feature}</span>
                    ) : (
                      <span className="text-gray-300 relative group">
                        {feature.text}
                        <span
                          className="ml-2 cursor-pointer text-blue-400 group-hover:underline"
                          tabIndex={0}
                        >
                          ⓘ
                          <span className="absolute left-6 top-0 z-10 hidden group-hover:block bg-gray-800 text-white text-xs rounded px-2 py-1 shadow-lg w-48">
                            {feature.tooltip}
                          </span>
                        </span>
                      </span>
                    )}
                  </motion.li>
                ))}
              </ul>
            </CardContent>

            <CardFooter className="flex flex-col gap-4">
              <motion.button
                onClick={() => setModalOpen(true)}
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className={`w-full h-12 text-base font-medium transition-all duration-300 rounded-md
                                  ${
                                    plan.popular
                                      ? "bg-gradient-to-r from-blue-500 to-cyan-400 hover:shadow-lg hover:shadow-blue-500/20"
                                      : "bg-transparent border border-blue-500/50 hover:bg-blue-500/10 hover:border-blue-400"
                                  }`}
              >
                Buy Now
              </motion.button>
            </CardFooter>
          </Card>
        ))}
      </motion.div>

      <UserModal
        open={modalOpen}
        value={selectedValue}
        onChange={setSelectedValue}
        onSave={handleSave}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
};
