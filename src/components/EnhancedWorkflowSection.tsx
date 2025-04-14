import React from "react";
import { motion } from "framer-motion";
import {
  FileText,
  AlertTriangle,
  BarChart3,
  Repeat,
  Upload,
  Download,
  ChevronRight,
  Check,
  ArrowRight
} from "lucide-react";

// Workflow steps data with enhanced descriptions
const workflowSteps = [
  {
    id: 1,
    title: "Upload PDF/Excel/CSV",
    description: "Simply upload bank statements in any format. CypherSOL handles complex PDFs, Excel sheets, and CSV files with ease.",
    Icon: FileText,
    color: "from-blue-500 to-blue-600",
  },
  {
    id: 2,
    title: "Automatic anomaly detection",
    description: "The system scans for inconsistencies, duplicates, and formatting issues, flagging potential problems before processing.",
    Icon: AlertTriangle,
    color: "from-purple-500 to-purple-600",
  },
  {
    id: 3,
    title: "AI-powered categorization",
    description: "Transactions are intelligently categorized using 7500+ data points, dramatically reducing manual sorting and suspense entries.",
    Icon: BarChart3,
    color: "from-green-500 to-green-600",
  },
  {
    id: 4,
    title: "Suspense reduction",
    description: "Smart handling of unclear entries with suggested categories and name merging to minimize uncategorized transactions.",
    Icon: Repeat,
    color: "from-yellow-500 to-yellow-600",
  },
  {
    id: 5,
    title: "One-click Tally export",
    description: "Seamlessly transfer organized data directly into Tally with perfect formatting, ready for accounting operations.",
    Icon: Upload,
    color: "from-red-500 to-red-600",
  },
  {
    id: 6,
    title: "Download instant ITR-ready report",
    description: "Generate comprehensive, audit-ready reports immediately for tax filing and client presentations.",
    Icon: Download,
    color: "from-cyan-500 to-cyan-600",
  },
];

export const EnhancedWorkflowSection = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-12 tracking-tight text-center">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
          Visual Graphic Analysis
        </span>
      </h2>
      
      <div className="relative flex flex-col items-center mb-16">
        <div className="border border-cyan-500/20 bg-black/40 backdrop-blur-sm rounded-xl p-8 w-full max-w-5xl mx-auto">
          <h3 className="text-xl text-white/80 font-medium mb-10 text-center">
            A visual walk-through of CypherSOL's workflow:
          </h3>
          
          {/* Enhanced workflow visualization */}
          <div className="relative">
            {/* Vertical connecting line for desktop */}
            <div className="absolute left-8 top-10 bottom-10 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-cyan-500 hidden md:block"></div>
            
            {/* Horizontal connecting lines for mobile */}
            <div className="md:hidden flex flex-col items-center">
              <div className="h-16 w-1 bg-gradient-to-b from-blue-500 to-purple-500"></div>
            </div>
            
            {/* Workflow steps */}
            <div className="space-y-16">
              {workflowSteps.map((step, index) => (
                <div key={step.id} className="relative">
                  <div className="flex flex-col md:flex-row md:items-start">
                    {/* Icon with gradient background */}
                    <div className={`relative flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${step.color} shadow-lg z-10 mx-auto md:mx-0`}>
                      <step.Icon className="w-8 h-8 text-white" />
                      {/* Pulsing effect */}
                      <div className={`absolute w-full h-full rounded-full bg-gradient-to-r ${step.color} opacity-30 animate-ping`} style={{ animationDuration: '3s' }}></div>
                    </div>
                    
                    {/* Step information */}
                    <div className="md:ml-6 mt-4 md:mt-0 text-center md:text-left">
                      <div className="flex items-center justify-center md:justify-start">
                        <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-blue-900/50 text-blue-300 text-xs mr-2">
                          {step.id}
                        </span>
                        <h4 className="text-lg md:text-xl font-medium text-white">
                          {step.title}
                        </h4>
                      </div>
                      
                      <p className="text-gray-300 mt-2 max-w-2xl">
                        {step.description}
                      </p>
                      
                      {/* Benefits/outcome of this step */}
                      <div className="mt-4 flex flex-wrap gap-2">
                        {step.id === 1 && (
                          <>
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-900/30 text-blue-300">
                              <Check className="w-3 h-3 mr-1" /> All formats supported
                            </span>
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-900/30 text-blue-300">
                              <Check className="w-3 h-3 mr-1" /> Unlimited uploads
                            </span>
                          </>
                        )}
                        {step.id === 2 && (
                          <>
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-900/30 text-purple-300">
                              <Check className="w-3 h-3 mr-1" /> Error prevention
                            </span>
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-900/30 text-purple-300">
                              <Check className="w-3 h-3 mr-1" /> Data integrity
                            </span>
                          </>
                        )}
                        {step.id === 3 && (
                          <>
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-900/30 text-green-300">
                              <Check className="w-3 h-3 mr-1" /> Smart matching
                            </span>
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-900/30 text-green-300">
                              <Check className="w-3 h-3 mr-1" /> Time savings
                            </span>
                          </>
                        )}
                        {step.id === 4 && (
                          <>
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-900/30 text-yellow-300">
                              <Check className="w-3 h-3 mr-1" /> Clarity improvement
                            </span>
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-900/30 text-yellow-300">
                              <Check className="w-3 h-3 mr-1" /> Accuracy boost
                            </span>
                          </>
                        )}
                        {step.id === 5 && (
                          <>
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-900/30 text-red-300">
                              <Check className="w-3 h-3 mr-1" /> Seamless integration
                            </span>
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-900/30 text-red-300">
                              <Check className="w-3 h-3 mr-1" /> Error-free transfer
                            </span>
                          </>
                        )}
                        {step.id === 6 && (
                          <>
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-cyan-900/30 text-cyan-300">
                              <Check className="w-3 h-3 mr-1" /> Audit-ready
                            </span>
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-cyan-900/30 text-cyan-300">
                              <Check className="w-3 h-3 mr-1" /> Instant compliance
                            </span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  {/* Connecting arrow between steps (not for the last item) */}
                  {index < workflowSteps.length - 1 && (
                    <div className="flex justify-center my-8 md:ml-8">
                      <div className="hidden md:block h-8 w-1 bg-gradient-to-b from-gray-600 to-gray-700"></div>
                      <div className="md:hidden flex items-center justify-center">
                        <ArrowRight className="w-6 h-6 text-gray-500" />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Integration note for the actual visual */}
      <div className="bg-gradient-to-r from-blue-900/20 to-cyan-900/20 border border-blue-900/30 rounded-lg p-6 max-w-4xl mx-auto">
        <h4 className="text-lg font-medium text-blue-300 mb-2">Infographic Integration Note:</h4>
        <p className="text-gray-300">
          The final version will include an interactive SVG/visualization that graphically represents each step of the workflow, 
          showing how data flows through the CypherSOL system from raw bank statements to organized, Tally-ready information.
        </p>
        <p className="text-gray-300 mt-2">
          This will include visual elements representing:
        </p>
        <ul className="mt-2 space-y-1 text-gray-300">
          <li className="flex items-start">
            <span className="text-blue-400 mr-2">•</span>
            Data transformation stages
          </li>
          <li className="flex items-start">
            <span className="text-blue-400 mr-2">•</span>
            Before/after comparisons of bank statements
          </li>
          <li className="flex items-start">
            <span className="text-blue-400 mr-2">•</span>
            Animation showing categorization in action
          </li>
          <li className="flex items-start">
            <span className="text-blue-400 mr-2">•</span>
            Visual representation of time savings
          </li>
        </ul>
      </div>
    </div>
  );
};