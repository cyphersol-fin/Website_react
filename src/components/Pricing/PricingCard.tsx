import React from "react";
import { motion } from "framer-motion";

import { CheckIcon } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";

interface PricingCardProps {
  title: string;
  validity: string;
  buttonText: string;
  children: React.ReactNode;
  onButtonClick: () => void;
}

export const PricingCard: React.FC<PricingCardProps> = ({
  title,
  validity,
  buttonText,
  children,
  onButtonClick,
}) => {
  return (
    <Card className="relative flex flex-col justify-between h-full bg-gray-900/40 border-gray-800 hover:border-blue-500/50 transform transition-all duration-500 ">
      <CardHeader>
        <CardTitle className="text-xl text-center text-gray-200 mb-4 mt-4">
          {title}
        </CardTitle>
        <div className="p-4 text-center">
          <p className="font-medium text-gray-400">{validity}</p>
        </div>
        <hr className="border-gray-800" />
      </CardHeader>
      <CardContent>{children}</CardContent>
      <CardFooter className="flex flex-col gap-4 mt-auto">
        <motion.button
          whileHover={{ scale: 1.03, y: -2 }}
          whileTap={{ scale: 0.97 }}
          className="w-full h-12 text-base font-medium transition-all duration-300 rounded-md bg-gradient-to-r from-blue-500 to-cyan-400 hover:shadow-lg hover:shadow-blue-500/20"
          onClick={onButtonClick}
        >
          {buttonText}
        </motion.button>
      </CardFooter>
    </Card>
  );
};

export const EnterpriseFeature: React.FC<{ text: string }> = ({ text }) => {
  return (
    <div className="flex items-center py-3 border-b border-gray-800">
      <CheckIcon className="w-5 h-5 text-cyan-400 mr-2" />
      <span className="text-gray-300">{text}</span>
    </div>
  );
};
