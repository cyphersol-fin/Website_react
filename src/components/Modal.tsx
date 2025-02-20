import { useEffect } from "react";
import { X, Linkedin, Twitter } from "lucide-react";
import { TeamMember } from "./TeamMemberCard";
import "./css/styles.css";

interface Props {
  member: TeamMember | null;
  onClose: () => void;
}

export const TeamModal = ({ member, onClose }: Props) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  useEffect(() => {
    if (member) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [member]);

  if (!member) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900/50 backdrop-blur-xl animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="bg-black w-full max-w-[800px] h-[90vh] my-auto animate-slideIn overflow-y-auto relative"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="h-full flex flex-col">
          <div className="flex justify-end p-6">
            <button
              onClick={onClose}
              className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-100 hover:bg-gray-50 transition-all duration-300 hover:rotate-90 text-black"
            >
              <X className="w-5 h-5 stroke-[1.5]" />
            </button>
          </div>

          <div className="w-[90%] mx-auto animate-slide-down">
            {/* Blog Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 mt-6 lg:mt-20">
              {/* Large Card - Sora */}
              <div className="lg:row-span-2 overflow-hidden transition-transform duration-300 hover:-translate-y-1 animate-fade-in">
                <div className="flex items-center justify-between text-white/80"></div>
                <div className="aspect-square w-full mb-8">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="max-w-full max-h-full object-contain rounded-2xl"
                  />
                </div>
                <div className="flex items-center space-x-5 text-white/90 mt-auto">
                  {member.social.linkedin && (
                    <a
                      href={member.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                    >
                      <Linkedin className="w-5 h-5 stroke-[1.5]" />
                    </a>
                  )}
                  {member.social.twitter && (
                    <a
                      href={member.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                    >
                      <Twitter className="w-5 h-5 stroke-[1.5]" />
                    </a>
                  )}
                </div>
              </div>

              <div className="overflow-hidden transition-transform duration-300 hover:-translate-y-1 animate-fade-in">
                <div className="mt-auto">
                  <h2 className="text-[1.75rem] font-extralight tracking-wide mb-2 text-white">
                    {member.name}
                  </h2>
                  <p className="text-lg text-cyan-400 font-extralight tracking-wide mb-8">
                    {member.title}
                  </p>
                </div>
                <div className="mt-auto mx-auto overflow-y-auto max-h-[40vh] custom-scrollbar">
                  <div className="flex-1 overflow-y-auto pr-4">
                    <div
                      className="text-gray-300 leading-relaxed font-extralight tracking-wide mb-8"
                      dangerouslySetInnerHTML={{ __html: member.bio }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
