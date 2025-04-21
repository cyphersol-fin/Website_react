import React, { useState } from "react";
import { motion } from "framer-motion";
import { teamMembers } from "./data/teamData";
import { cn } from "./lib/utils";
import { GlowEffect } from "./UI/GlowEffect";
import { TeamModal } from "./Modal";
import { Badge } from "./UI/Badge";
import { ArrowRight, Linkedin, Twitter } from "lucide-react";
const base = import.meta.env.BASE_URL; // Will be '/static/' in production (as per Vite config)
export interface TeamMember {
  id: number;
  name: string;
  title: string;
  image: string;
  bio: string;
  social: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
}
export const Team = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };
  return (
    <div className="relative bg-black text-white px-4 py-12 md:py-20 overflow-hidden">
      <GlowEffect />
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto"
      >
        <div className="mb-6 md:mb-8 animate-fade-in">
          <Badge>Our Team</Badge>
        </div>
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 tracking-tight text-start"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span
            className={cn(
              "bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-white/90 to-blue-400"
            )}
          >
            The Executive Team
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-xl md:text-1xl text-[#c3d0e5] max-w-2xl mb-16"
        >
          {
            "We're constantly trying to express ourselves and actualize our dreams. If you have the opportunity to play this game of life you need to appreciate every moment."
          }
        </motion.p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 gap-6 lg:gap-8 cursor-pointer"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              variants={itemVariants}
              // whileHover={{ scale: 1.02 }}
              className="bg-gray-900/80 border border-gray-800 rounded-2xl p-4 transition-transform duration-300 hover:scale-[1.02]"
              onClick={() => setSelectedMember(member)}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex flex-col lg:flex-row items-start gap-6">
                <div className="w-full md:w-auto flex-shrink-0 space-y-4">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="relative"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative w-40 h-40 rounded-2xl overflow-hidden flex-shrink-0">
                      <img
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        className="object-cover"
                      />
                    </div>
                  </motion.div>
                  <div className="flex justify-start lg:justify-center gap-4">
                    {member.social.linkedin && (
                      <motion.a
                        href={member.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.2, y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className="text-gray-400 hover:text-cyan-400 transition-colors"
                      >
                        <Linkedin className="w-4 h-4" />
                      </motion.a>
                    )}
                    {member.social.twitter && (
                      <motion.a
                        href={member.social.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.2, y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className="text-gray-400 hover:text-cyan-400 transition-colors"
                      >
                        <Twitter className="w-4 h-4" />
                      </motion.a>
                    )}
                  </div>
                </div>
                <div className="space-y-3">
                  <motion.h2
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 * (index + 1) }}
                    className="text-2xl font-bold"
                  >
                    {member.name}
                  </motion.h2>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 * (index + 1) }}
                    className="text-cyan-400 font-medium mb-4"
                  >
                    {member.title}
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 * (index + 1) }}
                    className="text-gray-300 text-[17px] leading-relaxed"
                    dangerouslySetInnerHTML={{
                      __html:
                        member.bio.length > 125
                          ? member.bio.slice(0, 125) + "..."
                          : member.bio,
                    }}
                  ></motion.div>

                  <motion.a
                    href={`/profile/${encodeURIComponent(member.name)}`}
                    className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors group mt-6"
                    // whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={(e) => {
                      e.preventDefault();
                      setSelectedMember(member);
                    }}
                  >
                    <span className="text-sm">Learn more</span>
                    <motion.span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </motion.span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <TeamModal
          member={selectedMember}
          onClose={() => setSelectedMember(null)}
        />
      </motion.div>
    </div>
  );
};
