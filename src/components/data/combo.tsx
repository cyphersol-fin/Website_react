import {
  Clock,
  Database,
  Eye,
  FileQuestion,
  FolderKanban,
  FolderTree,
  MousePointerClick,
  PiggyBank,
  RefreshCw,
  ScrollText,
  Target,
  Zap,
} from "lucide-react";
import { AnimatedIcon } from "../utils/feature-card";

export const cards = [
  {
    id: 1,
    title: "End-to-End Automation",
    description:
      "The combination provides complete automation, from analyzing complex bank statements to uploading categorized transactions directly into Tally. This eliminates manual intervention at every stage, ensuring faster and more accurate accounting processes.",
    icon: <AnimatedIcon icon={<Zap className="w-6 h-6" />} />,
  },
  {
    id: 2,
    title: "Visual Feedback",
    description:
      "Transactions are color-coded for immediate status recognition—successful uploads are highlighted in green, while errors are marked in red, allowing users to easily identify and address any issues among hundreds of transactions.",
    icon: <AnimatedIcon icon={<Eye className="w-6 h-6" />} />,
  },
  {
    id: 3,
    title: "Improved Accuracy",
    description:
      "The Bank Statement Analyzer meticulously reviews bank data, identifies discrepancies, and highlights suspicious transactions. The Excel to Tally Data Import Utility then accurately uploads the cleaned and categorized data into Tally, reducing the risk of errors and mismatches.",
    icon: <AnimatedIcon icon={<Target className="w-6 h-6" />} />,
  },
  {
    id: 4,
    title: "Saves Time and Effort",
    description:
      "Together, the tools save hours of manual data entry and reconciliation. The Bank Statement Analyzer processes and filters large amounts of data, while the Excel to Tally Data Import Utility uploads it in bulk into Tally, allowing accountants to focus on high-value tasks.",
    icon: <AnimatedIcon icon={<Clock className="w-6 h-6" />} />,
  },
  {
    id: 5,
    title: "Faster Reconciliation",
    description:
      "By using both tools, you can reconcile your books faster. The Bank Statement Analyzer identifies missing or unposted transactions, while the Excel to Tally Data Import Utility ensures quick and seamless uploads into Tally, enabling quicker closing of accounts.",
    icon: <AnimatedIcon icon={<RefreshCw className="w-6 h-6" />} />,
  },
  {
    id: 6,
    title: "Enhanced Transaction Categorization",
    description:
      "The Bank Statement Analyzer categorizes transactions such as Sales, Purchases, Payments and Receipts. These categories are then transferred automatically into Tally via the Tally Upload Utility, maintaining consistency and accuracy across all financial records.",
    icon: <AnimatedIcon icon={<FolderKanban className="w-6 h-6" />} />,
  },
  {
    id: 7,
    title: "Reduced Suspense Transactions",
    description:
      "The Bank Statement Analyzer helps to minimize suspense transactions by identifying and categorizing them upfront. The data is then uploaded into Tally in the correct format, ensuring that all transactions are allocated properly.",
    icon: <AnimatedIcon icon={<FileQuestion className="w-6 h-6" />} />,
  },
  {
    id: 8,
    title: "Compliance and Audit Readiness",
    description:
      "With both tools working in tandem, businesses can ensure that their financial records are accurate, organized, and compliant with statutory requirements. This reduces the time spent on audits and improves overall financial transparency.",
    icon: <AnimatedIcon icon={<ScrollText className="w-6 h-6" />} />,
  },
  {
    id: 9,
    title: "Supports Bulk Data Handling",
    description:
      "The combo is ideal for businesses and accountants handling large volumes of transactions. The Bank Statement Analyzer processes multiple statements, and the Excel to Tally Data Import Utility uploads all the data in one go, enhancing productivity.",
    icon: <AnimatedIcon icon={<Database className="w-6 h-6" />} />,
  },
  {
    id: 10,
    title: "Cost-Effective Solution",
    description:
      "By using the combo, businesses get the benefits of two powerful tools at an affordable price. Instead of investing in separate solutions for statement analysis and data upload, the combination provides a cost-efficient, unified platform.",
    icon: <AnimatedIcon icon={<PiggyBank className="w-6 h-6" />} />,
  },
  {
    id: 11,
    title: "Simplified Ledger Grouping",
    description:
      "The Bank Statement Analyzer groups transactions into appropriate ledger heads, making it easier for the Excel to Tally Data Import Utility to upload them into the correct accounts, ensuring cleaner books of accounts.",
    icon: <AnimatedIcon icon={<FolderTree className="w-6 h-6" />} />,
  },
  {
    id: 12,
    title: "Easy to Use",
    description:
      "Both tools are designed with a user-friendly interface, making it simple for accountants, CAs, and business owners to adopt and implement without requiring specialized training or technical expertise.",
    // icon: <MousePointerClick className="w-6 h-6" />,
    icon: <AnimatedIcon icon={<MousePointerClick className="w-6 h-6" />} />,
  },
];
