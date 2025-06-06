import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./components/ui/table";
import { Gift } from "lucide-react";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "./components/ui/select";
import { Input } from "./components/ui/input";
import { cn } from "./lib/utils";

const Checkout = () => {
  const [messages, setMessages] = useState([]);
  const [couponCode, setCouponCode] = useState("");
  const [planType, setPlanType] = useState("Pay-As-You-Go");
  const [statements, setStatements] = useState(100);
  const [costPerStatement, setCostPerStatement] = useState(25);
  const [discounts, setDiscounts] = useState([
    {
      id: 1,
      discount_text: "10% for 3 months",
      discount_percentage: 10,
      total_months: 3,
    },
    {
      id: 2,
      discount_text: "15% for 6 months",
      discount_percentage: 15,
      total_months: 6,
    },
  ]);

  const [discountType, setDiscountType] = useState(null);
  const [finalCost, setFinalCost] = useState(2500);

  useEffect(() => {
    // You can fetch data from your backend here
  }, []);

  return (
    <div className="px-4 md:px-6 lg:px-12 py-12 bg-black min-h-screen">
      <div className="container mx-auto text-center py-5">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-center">
          <span
            className={cn(
              "bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-white to-blue-400"
            )}
          >
            Order Summary
          </span>
        </h1>
      </div>

      <div className="bg-gray-900/70 backdrop-blur-xl rounded-2xl p-6 mb-12 shadow-lg border border-cyan-500/10">
        <div className="overflow-x-auto">
          <Table className="w-full border-collapse bg-transparent text-white">
            <TableHeader>
              <TableRow>
                <TableHead className="p-2 text-center font-semibold text-cyan-400 bg-transparent ">
                  Plan
                </TableHead>
                <TableHead className="p-2 text-center font-semibold text-cyan-400 bg-transparent whitespace-nowrap">
                  Payment Type
                </TableHead>
                <TableHead className="p-2 text-center font-semibold text-cyan-400 bg-transparent">
                  Quantity
                </TableHead>
                <TableHead className="p-2 text-center font-semibold text-cyan-400 bg-transparent whitespace-nowrap">
                  Price/Statement
                </TableHead>
                <TableHead className="p-2 text-center font-semibold text-cyan-400 bg-transparent">
                  Total
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <tr className="bg-gray-800/60 hover:bg-gray-800/80 transition-colors duration-200 rounded-xl">
                <TableCell className="p-4 rounded-l-xl">
                  <div className="flex flex-col items-center whitespace-nowrap">
                    <span className="font-bold text-cyan-400">{planType}</span>
                    <span className="text-xs text-gray-400">Plan type</span>
                  </div>
                </TableCell>
                <TableCell className="p-4 text-white text-center">
                  <div className="w-full max-w-md mx-auto">
                    {discounts && discounts.length > 0 ? (
                      //   <Select onValueChange={setSelectedDiscountId}>
                      //     <SelectTrigger className="w-full rounded-full border border-slate-700 bg-[#111729] text-white shadow-sm focus:ring-blue-500">
                      //       <SelectValue placeholder="Select a Discount Plan" />
                      //     </SelectTrigger>
                      //     <SelectContent className="bg-[#1a2332] text-white border-slate-700">
                      //       {discounts.map((discount) => (
                      //         <SelectItem
                      //           key={discount.id}
                      //           value={discount.id}
                      //           className="hover:bg-[#2a3a4d] cursor-pointer"
                      //         >
                      //           {discount.discount_text}
                      //         </SelectItem>
                      //       ))}
                      //     </SelectContent>
                      //   </Select>
                      <div className="border border-dashed border-slate-600 mx-auto mt-2" />
                    ) : (
                      <div className="border border-dashed border-slate-600 mx-auto mt-2" />
                    )}
                  </div>
                </TableCell>
                <TableCell className="p-4 text-center">13</TableCell>
                <TableCell className="p-4 text-center">70</TableCell>
                <TableCell className="p-4 text-center rounded-r-xl">
                  910.00
                </TableCell>
              </tr>
            </TableBody>
          </Table>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-12 bg-gray-900/70 backdrop-blur-xl rounded-2xl p-6 shadow-lg border border-cyan-500/10">
        {/* Promo Code Section */}
        <div>
          <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 border border-cyan-500/20 px-4 py-3 rounded-full font-semibold shadow">
            Promo Code
          </div>
          <div className="p-4">
            <p className="text-sm text-gray-300 mb-2">
              If you have a promo code, please enter it in the box below
            </p>

            <div className="relative w-full ">
              <Input
                type="text"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
                className="w-full py-7 pl-5 pr-[130px] rounded-full outline-none border-2 border-cyan-500/30 bg-gray-800/70 text-cyan-200 placeholder-cyan-400 focus:border-cyan-400 transition"
                placeholder="Apply promo code"
              />
              <button className="absolute top-1/2 right-1.5 -translate-y-1/2 bg-gradient-to-r from-cyan-500/80 to-blue-500/80 text-white px-5 py-2 rounded-full shadow-md hover:from-cyan-400 hover:to-blue-400 flex items-center text-sm font-semibold transition-all border border-cyan-500/40">
                <Gift className="w-4 h-4 mr-2" />
                Apply Code
              </button>
            </div>
          </div>

          <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 border border-cyan-500/20 px-4 py-3 rounded-full mt-6 font-semibold shadow">
            Validity / Expiry Date
          </div>
          <div className="p-4">
            <p className="text-sm text-gray-300 mb-2">
              Your validity / expiry date will be displayed below:
            </p>
            <strong>01 Jan 2026 &nbsp;&nbsp; 12:00 PM</strong>
          </div>
        </div>

        {/* Order Summary Section */}
        <div>
          <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 border border-cyan-500/20  px-4 py-3 rounded-full font-semibold shadow">
            Order Summary
          </div>
          <div className="p-4">
            <p className="text-sm text-gray-300 mb-10">
              Additional costs are calculated based on your selections.
            </p>
            <ul className="text-sm text-gray-300 space-y-6">
              <li className="flex justify-between border-b border-cyan-500/10 pb-2">
                <span>Order Subtotal</span>
                <span>₹{finalCost}</span>
              </li>
              <li className="flex justify-between border-b border-cyan-500/10 pb-2">
                <span>Discount</span>
                <span>₹0</span>
              </li>
              <li className="flex justify-between border-b border-cyan-500/10 pb-2">
                <span>Promo code</span>
                <span>₹0</span>
              </li>
              <li className="flex justify-between border-b border-cyan-500/10 pb-2">
                <span>GST (18%)</span>
                <span>₹{(finalCost * 0.18).toFixed(2)}</span>
              </li>
              <li className="flex justify-between font-bold">
                <span>Total</span>
                <span>₹{(finalCost * 1.18).toFixed(2)}</span>
              </li>
            </ul>
            <button className="w-full mt-6 bg-gradient-to-r from-cyan-500/80 to-blue-500/80 hover:from-cyan-400 hover:to-blue-400 text-white py-3 rounded-full font-semibold shadow-lg border border-cyan-500/40 transition-all">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
      {/* </form> */}
    </div>
  );
};

export default Checkout;
