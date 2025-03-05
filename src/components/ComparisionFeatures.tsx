// import React, { useState } from "react";

// function ComparisonFeatures() {
//   const [pricingType, setPricingType] = useState("online");

//   const onlinePlans = [
//     {
//       name: "Basic",
//       price: "$9.99",
//       period: "per month",
//       description: "Perfect for small businesses with basic banking needs",
//       features: [
//         "Analyze up to 1,000 transactions per month",
//         "Basic financial reporting",
//         "Single user access",
//         "Email support",
//         "Mobile app access",
//         "Basic Tally integration",
//       ],
//       popular: false,
//     },
//     {
//       name: "Business",
//       price: "$24.99",
//       period: "per month",
//       description: "Ideal for growing businesses with multiple accounts",
//       features: [
//         "Analyze up to 10,000 transactions per month",
//         "Advanced financial reporting",
//         "Up to 5 user access",
//         "Priority email support",
//         "Mobile app access",
//         "Full Tally integration",
//         "Data export options",
//       ],
//       popular: true,
//     },
//     {
//       name: "Enterprise",
//       price: "$49.99",
//       period: "per month",
//       description:
//         "For established businesses with complex banking requirements",
//       features: [
//         "Unlimited transaction analysis",
//         "Custom financial reporting",
//         "Unlimited user access",
//         "Priority phone & email support",
//         "Mobile app access with admin controls",
//         "Advanced Tally integration with automation",
//         "API access",
//         "Dedicated account manager",
//       ],
//       popular: false,
//     },
//   ];

//   const offlinePlans = [
//     {
//       name: "Standard",
//       price: "$299",
//       period: "one-time",
//       description: "Basic offline solution for small businesses",
//       features: [
//         "Perpetual license",
//         "Single user",
//         "Basic statement analysis",
//         "Basic Tally upload utility",
//         "1 year of updates",
//         "Email support for 1 year",
//       ],
//       popular: false,
//     },
//     {
//       name: "Professional",
//       price: "$599",
//       period: "one-time",
//       description: "Complete solution for medium-sized businesses",
//       features: [
//         "Perpetual license",
//         "Up to 5 users",
//         "Advanced statement analysis",
//         "Full Tally upload utility",
//         "Data reconciliation tools",
//         "2 years of updates",
//         "Email & phone support for 2 years",
//       ],
//       popular: true,
//     },
//     {
//       name: "Ultimate",
//       price: "$999",
//       period: "one-time",
//       description: "Enterprise-grade solution for larger businesses",
//       features: [
//         "Perpetual license",
//         "Unlimited users",
//         "Complete feature set",
//         "Advanced Tally integration",
//         "Custom report builder",
//         "3 years of updates",
//         "Priority support for 3 years",
//         "On-site installation assistance",
//       ],
//       popular: false,
//     },
//   ];

//   return (
//     <div className="min-h-screen  text-gray-100">
//       {/* Main Content */}
//       <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         {/* Comparison Table */}
//         <div className="mt-32">
//           <h2 className="text-2xl font-bold text-center text-white mb-12">
//             Detailed Feature Comparison
//           </h2>
//           <div className="overflow-x-auto">
//             <table className="min-w-full bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-700">
//               <thead className="bg-gray-700">
//                 <tr>
//                   <th className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
//                     Feature
//                   </th>
//                   {(pricingType === "online" ? onlinePlans : offlinePlans).map(
//                     (plan, idx) => (
//                       <th
//                         key={idx}
//                         className="px-6 py-4 text-center text-xs font-medium text-gray-300 uppercase tracking-wider"
//                       >
//                         {plan.name}
//                       </th>
//                     )
//                   )}
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-gray-700">
//                 {[
//                   "Number of Users",
//                   "Transaction Limit",
//                   "Reporting",
//                   "Tally Integration",
//                   "Support",
//                   "Updates",
//                   "Mobile Access",
//                   "Data Backup",
//                 ].map((feature, idx) => (
//                   <tr
//                     key={idx}
//                     className={idx % 2 === 0 ? "bg-gray-750" : "bg-gray-800"}
//                   >
//                     <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">
//                       {feature}
//                     </td>
//                     {(pricingType === "online"
//                       ? onlinePlans
//                       : offlinePlans
//                     ).map((plan, planIdx) => (
//                       <td
//                         key={planIdx}
//                         className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-300"
//                       >
//                         {getFeatureValue(feature, plan, pricingType)}
//                       </td>
//                     ))}
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }

// // Helper function to get feature values for the comparison table
// function getFeatureValue(feature, plan, pricingType) {
//   if (pricingType === "online") {
//     switch (feature) {
//       case "Number of Users":
//         return plan.name === "Basic"
//           ? "1 user"
//           : plan.name === "Business"
//           ? "Up to 5 users"
//           : "Unlimited";
//       case "Transaction Limit":
//         return plan.name === "Basic"
//           ? "1,000/month"
//           : plan.name === "Business"
//           ? "10,000/month"
//           : "Unlimited";
//       case "Reporting":
//         return plan.name === "Basic"
//           ? "Basic"
//           : plan.name === "Business"
//           ? "Advanced"
//           : "Custom";
//       case "Tally Integration":
//         return plan.name === "Basic"
//           ? "Basic"
//           : plan.name === "Business"
//           ? "Full"
//           : "Advanced";
//       case "Support":
//         return plan.name === "Basic"
//           ? "Email only"
//           : plan.name === "Business"
//           ? "Priority email"
//           : "Phone & email";
//       case "Updates":
//         return "Continuous";
//       case "Mobile Access":
//         return plan.name === "Basic"
//           ? "Basic"
//           : plan.name === "Business"
//           ? "Full"
//           : "Advanced";
//       case "Data Backup":
//         return plan.name === "Basic"
//           ? "Daily"
//           : plan.name === "Business"
//           ? "12-hour"
//           : "Real-time";
//       default:
//         return "—";
//     }
//   } else {
//     switch (feature) {
//       case "Number of Users":
//         return plan.name === "Standard"
//           ? "1 user"
//           : plan.name === "Professional"
//           ? "Up to 5 users"
//           : "Unlimited";
//       case "Transaction Limit":
//         return "Unlimited";
//       case "Reporting":
//         return plan.name === "Standard"
//           ? "Basic"
//           : plan.name === "Professional"
//           ? "Advanced"
//           : "Custom";
//       case "Tally Integration":
//         return plan.name === "Standard"
//           ? "Basic"
//           : plan.name === "Professional"
//           ? "Full"
//           : "Advanced";
//       case "Support":
//       case "Updates":
//         return plan.name === "Standard"
//           ? "1 year"
//           : plan.name === "Professional"
//           ? "2 years"
//           : "3 years";
//       case "Mobile Access":
//         return plan.name === "Standard" ? "—" : "✓";
//       case "Data Backup":
//         return plan.name === "Standard"
//           ? "Manual"
//           : plan.name === "Professional"
//           ? "Scheduled"
//           : "Automated";
//       default:
//         return "—";
//     }
//   }
// }

// export default ComparisonFeatures;

import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./components/ui/table";

const ComparisionFeatures = () => {
  return (
    <div className="mt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-2xl font-bold text-center mb-8">
        Online vs Offline Pricing Comparison
      </h2>
      <div className="overflow-x-auto">
        <Table className="w-full border-collapse">
          <TableHeader>
            <TableRow className="bg-gray-900/50 ">
              <TableHead className="w-1/3 py-4 text-cyan-400">
                Feature
              </TableHead>
              <TableHead className="w-1/3 text-center py-4 text-cyan-400">
                Online
              </TableHead>
              <TableHead className="w-1/3 text-center py-4 text-cyan-400">
                Offline
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium border-b border-gray-800">
                Base Price (1 Year)
              </TableCell>
              <TableCell className="text-center border-b border-gray-800">
                ₹20,000
              </TableCell>
              <TableCell className="text-center border-b border-gray-800">
                ₹22,000
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium border-b border-gray-800">
                Installation Support
              </TableCell>
              <TableCell className="text-center border-b border-gray-800">
                Remote Support
              </TableCell>
              <TableCell className="text-center border-b border-gray-800">
                In-person Setup
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium border-b border-gray-800">
                Setup Time
              </TableCell>
              <TableCell className="text-center border-b border-gray-800">
                Immediate
              </TableCell>
              <TableCell className="text-center border-b border-gray-800">
                Scheduled Visit
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium border-b border-gray-800">
                Technical Support
              </TableCell>
              <TableCell className="text-center border-b border-gray-800">
                Email & Chat
              </TableCell>
              <TableCell className="text-center border-b border-gray-800">
                Email, Chat & Phone
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium border-b border-gray-800">
                Updates
              </TableCell>
              <TableCell className="text-center border-b border-gray-800">
                Automatic
              </TableCell>
              <TableCell className="text-center border-b border-gray-800">
                Automatic & Manual Assistance
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium border-b border-gray-800">
                Training
              </TableCell>
              <TableCell className="text-center border-b border-gray-800">
                Online Documentation
              </TableCell>
              <TableCell className="text-center border-b border-gray-800">
                In-person Training Session
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium border-b border-gray-800">
                System Health Check
              </TableCell>
              <TableCell className="text-center border-b border-gray-800">
                Self-service Tools
              </TableCell>
              <TableCell className="text-center border-b border-gray-800">
                Annual On-site Check (10-year plan)
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium border-b border-gray-800">
                Payment Options
              </TableCell>
              <TableCell className="text-center border-b border-gray-800">
                Credit Card, Net Banking
              </TableCell>
              <TableCell className="text-center border-b border-gray-800">
                Credit Card, Net Banking, Cash, Check
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium border-b border-gray-800">
                Customization
              </TableCell>
              <TableCell className="text-center border-b border-gray-800">
                Standard Options
              </TableCell>
              <TableCell className="text-center border-b border-gray-800">
                Custom Requirements Available
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Best For</TableCell>
              <TableCell className="text-center">
                Tech-savvy users, immediate setup
              </TableCell>
              <TableCell className="text-center">
                Businesses needing hands-on support
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default ComparisionFeatures;
