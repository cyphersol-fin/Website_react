import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";
import { StatementsModal } from "./StatementsModal";
import { Input } from "../components/ui/input";

interface PayAsYouGoItem {
  statements: string;
  costPerStatement: number;
}

interface MonthlySubscriptionItem {
  statements: number;
  pricing: number;
  total: number;
}

interface PayAsYouGoPricingTableProps {
  items: PayAsYouGoItem[];
}

interface MonthlySubscriptionPricingTableProps {
  items: MonthlySubscriptionItem[];
}

export const PayAsYouGoPricingTable: React.FC<PayAsYouGoPricingTableProps> = ({
  items,
}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(10);

  const handleSave = () => {
    // Handle save logic if needed
    setModalOpen(false);
  };

  return (
    <>
      <div className="overflow-x-auto">
        <Table className="w-full border-collapse bg-gray-900 text-white">
          <TableHeader>
            <TableRow>
              <TableHead className="p-2 text-left font-medium text-cyan-400 bg-gray-900">
                No. of Statements
              </TableHead>
              <th className="p-2 text-left font-medium text-cyan-400 bg-gray-900">
                Cost per Statement
              </th>
            </TableRow>
          </TableHeader>
          <TableBody>
            {items.map((item, index) => (
              <motion.tr
                key={index}
                className={index % 2 === 0 ? "bg-gray-800/50" : "bg-gray-900"}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 * index }}
              >
                <TableCell className="p-2 border border-gray-700/50">
                  <div className="flex items-center space-x-2">
                    <Input
                      type="checkbox"
                      id={`pay-as-you-go-${index}`}
                      className="accent-cyan-400 w-4 h-4 rounded focus:ring-2 focus:ring-cyan-400"
                      value={selectedValue}
                      onClick={() => setModalOpen(true)}
                    />
                    <label
                      htmlFor={`pay-as-you-go-${index}`}
                      className="text-white"
                    >
                      {item.statements}
                    </label>
                  </div>
                </TableCell>
                <TableCell className="p-2 border border-gray-700/50 text-white">
                  {item.costPerStatement}
                </TableCell>
              </motion.tr>
            ))}
          </TableBody>
        </Table>
      </div>

      <StatementsModal
        open={modalOpen}
        value={selectedValue}
        onChange={setSelectedValue}
        onSave={handleSave}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
};

export const MonthlySubscriptionPricingTable: React.FC<
  MonthlySubscriptionPricingTableProps
> = ({ items }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(10);

  const handleSave = () => {
    // Handle save logic if needed
    setModalOpen(false);
  };
  return (
    <>
      <div className="overflow-x-auto">
        <Table className="w-full border-collapse bg-gray-900 text-white">
          <TableHeader>
            <TableRow>
              <TableHead className="p-2 text-left font-medium text-cyan-400 bg-gray-900">
                No. of Statements
              </TableHead>
              <TableHead className="p-2 text-left font-medium text-cyan-400 bg-gray-900">
                Pricing
              </TableHead>
              <TableHead className="p-2 text-left font-medium text-cyan-400 bg-gray-900">
                Total
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {items.map((item, index) => (
              <motion.tr
                key={index}
                className={index % 2 === 0 ? "bg-gray-800/50" : "bg-gray-900"}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 * index }}
              >
                <TableCell className="p-2 border border-gray-700/50">
                  <div className="flex items-center space-x-2">
                    <Input
                      type="checkbox"
                      id={`monthly-subscription-${index}`}
                      className="accent-cyan-400 w-4 h-4 rounded focus:ring-2 focus:ring-cyan-400"
                      value={selectedValue}
                      onClick={() => setModalOpen(true)}
                    />
                    <label
                      htmlFor={`monthly-subscription-${index}`}
                      className="text-white"
                    >
                      {item.statements}
                    </label>
                  </div>
                </TableCell>
                <TableCell className="p-2 border border-gray-700/50 text-white">
                  {item.pricing}
                </TableCell>
                <TableCell className="p-2 border border-gray-700/50 text-white">
                  {item.total}
                </TableCell>
              </motion.tr>
            ))}
          </TableBody>
        </Table>
      </div>

      <StatementsModal
        open={modalOpen}
        value={selectedValue}
        onChange={setSelectedValue}
        onSave={handleSave}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
};
