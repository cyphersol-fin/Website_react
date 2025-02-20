import { Facebook, Linkedin, Twitter } from "lucide-react";

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

interface Props {
  member: TeamMember;
  onSelect: (member: TeamMember) => void;
}

export const TeamMemberCard = ({ member, onSelect }: Props) => {
  return (
    <div
      className="relative group overflow-hidden rounded-2xl"
      onClick={() => onSelect(member)}
    >
      {/* Base Image */}
      <div className="w-full">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-400/20 via-cyan-400/40 to-cyan-900/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {/* Social Icons */}
        <div className="absolute top-4 left-4 flex gap-3 opacity-0 transform -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          <a
            href="#"
            className="text-white hover:text-cyan-400 transition-colors"
          >
            <Facebook size={20} />
          </a>
          <a
            href="#"
            className="text-white hover:text-cyan-400 transition-colors"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="#"
            className="text-white hover:text-cyan-400 transition-colors"
          >
            <Twitter size={20} />
          </a>
        </div>

        {/* Name and Role */}
        <div className="absolute bottom-6 left-6 opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-100">
          <h3 className="text-white text-xl font-semibold">{member.name}</h3>
          <p className="text-cyan-400 text-sm">{member.title}</p>
        </div>
      </div>
    </div>
  );
};
