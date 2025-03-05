import React, { useState } from "react";
import { GlowEffect } from "./GlowEffect";
import { Send } from "lucide-react";

export const ResellerForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    mobileNumber: "",
    email: "",
    firmName: "",
    address: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };
  return (
    <div className="relative bg-black  overflow-hidden">
      <GlowEffect />
      <div className="relative">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content Section */}
            <div className="space-y-8 animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold text-white">
                Got Questions?
                <span className="block mt-2 bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
                  Reach Out to Us Today!
                </span>
              </h1>

              <p className="text-gray-300 text-lg leading-relaxed">
                Partner with CypherSOL as a reseller and unlock exclusive
                opportunities to deliver cutting-edge fintech solutions. Empower
                businesses while growing your revenue.
              </p>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-white">
                  A Message from Our CEO
                </h2>
                <p className="text-gray-400 italic">
                  "Join CypherSOL’s Reseller Program to expand your business
                  with cutting-edge fintech solutions. Empower your network with
                  tools that simplify financial analysis and drive growth."
                </p>

                <div className="flex items-center space-x-4 mt-6">
                  <img
                    src="assets/images/team-1.png"
                    alt="CEO"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-white font-medium">Imran Sable</h3>
                    <p className="text-gray-400 text-sm">CEO, CypherSOL</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Form Section */}
            <div className="relative">
              <div className="absolute inset-0 bg-white/5 backdrop-blur-xl rounded-2xl" />
              <form
                onSubmit={handleSubmit}
                className="relative space-y-6 p-8 rounded-2xl"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-gray-300 text-sm">
                      Full Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-gray-600 focus:border-cyan-400 text-white placeholder-gray-400 outline-none transition-all duration-300 hover:bg-white/[0.15] focus:bg-white/[0.15]"
                      placeholder="Your full name"
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData({ ...formData, fullName: e.target.value })
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-gray-300 text-sm">
                      Mobile no. <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-gray-600 focus:border-cyan-400 text-white placeholder-gray-400 outline-none transition-all duration-300 hover:bg-white/[0.15] focus:bg-white/[0.15]"
                      placeholder="Your mobile no."
                      value={formData.mobileNumber}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          mobileNumber: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-gray-300 text-sm">
                    Email <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-gray-600 focus:border-cyan-400 text-white placeholder-gray-400 outline-none transition-all duration-300 hover:bg-white/[0.15] focus:bg-white/[0.15]"
                    placeholder="youremail@example.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-gray-300 text-sm">
                    Firm Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-gray-600 focus:border-cyan-400 text-white placeholder-gray-400 outline-none transition-all duration-300 hover:bg-white/[0.15] focus:bg-white/[0.15]"
                    placeholder="Write your Firm Name here"
                    value={formData.firmName}
                    onChange={(e) =>
                      setFormData({ ...formData, firmName: e.target.value })
                    }
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-gray-300 text-sm">
                    Write Address <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-gray-600 focus:border-cyan-400 text-white placeholder-gray-400 outline-none transition-all duration-300 hover:bg-white/[0.15] focus:bg-white/[0.15] min-h-[120px] resize-none"
                    placeholder="Write your address here"
                    value={formData.address}
                    onChange={(e) =>
                      setFormData({ ...formData, address: e.target.value })
                    }
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-6 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold flex items-center justify-center space-x-2 hover:opacity-90 transition-opacity duration-300 "
                >
                  <span>Send Message</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
