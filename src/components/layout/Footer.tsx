import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

export const Footer = () => {
  return (
    <div className="relative bg-gray-900/50 backdrop-blur-xl h-auto text-white overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Canvas>
          <ambientLight intensity={0.3} />
          <directionalLight position={[0, 10, 5]} />
          <mesh rotation={[Math.PI / 4, Math.PI / 4, 0]}>
            <torusKnotGeometry args={[10, 0.5, 100, 16]} />
            <meshStandardMaterial color="#1187e9" wireframe />
          </mesh>
          <OrbitControls autoRotate enableZoom={false} />
        </Canvas>
        {/* Dimmed Overlay */}
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center py-8 border-b border-gray-700">
          <div className="mb-6 md:mb-0">
            <div className="text-2xl font-bold text-white">
              Cypher<span className="text-cyan-400">SOL</span>
            </div>
            <p className="text-sm mt-2">
              Transforming financial analysis with AI-powered solutions.
            </p>
          </div>
          <div>
            <h2 className="text-4xl font-bold mb-4 animate-fadeIn">
              We would love to hear from you.
            </h2>
            <p className="text-gray-300 mb-6">
              Feel free to reach out if you want to collaborate with us or
              simply have a chat.
            </p>
            <button
              className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-xl hover:opacity-90 transition-all duration-300"
              onClick={() => (window.location.href = "/pricing/?plan=bsa")}
            >
              Become a Client →
            </button>
          </div>
        </div>

        {/* Main Footer Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-16 px-4 md:px-6 lg:px-8">
          <div>
            <h3 className="text-cyan-400 text-lg font-semibold  mb-4">
              CypherSOL Fintech India Pvt. Ltd.
            </h3>
            <ul className="space-y-2">
              <li className="hover:text-cyan-400 transition duration-300">
                <a href="/about">About</a>
              </li>
              <li className="hover:text-cyan-400 transition duration-300">
                <a href="/team">Team</a>
              </li>
              <li className="hover:text-cyan-400 transition duration-300">
                <a href="/">Product</a>
              </li>
              <li className="hover:text-cyan-400 transition duration-300">
                <a href="/price">Pricing</a>
              </li>
              <li className="hover:text-cyan-400 transition duration-300">
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-cyan-400 text-lg font-semibold mb-4">
              Useful Links
            </h3>
            <ul className="space-y-2">
              <li className="hover:text-cyan-400 transition duration-300">
                <a href="/terms">Terms & Conditions</a>
              </li>
              <li className="hover:text-cyan-400 transition duration-300">
                <a href="/privacy-policy">Privacy Policy</a>
              </li>
              <li className="hover:text-cyan-400 transition duration-300">
                <a href="/refund-policy">Refund Policy</a>
              </li>
              <li className="hover:text-cyan-400 transition duration-300">
                <a href="/dmca">DMCA</a>
              </li>
              <li className="hover:text-cyan-400 transition duration-300">
                <a href="/disclaimer">Disclaimer</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-cyan-400 text-lg font-semibold  mb-4">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-cyan-400 w-10 h-10" />
                <span>
                  105-107 Shree Raj Enclave Chs Ltd Opp Family Care Hospital,
                  Near Seven Square Academy, Mira Road (E), Thane: 401107
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <FaPhoneAlt className="text-cyan-400 w-5 h-5" />
                <span>+91 81697 64722 / +91 81081 08800</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaEnvelope className="text-cyan-400 w-5 h-5" />
                <span>support@cyphersol.co.in</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-cyan-400 text-lg font-semibold mb-4">
              Follow Us
            </h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-cyan-400 text-white hover:text-black transition duration-300"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-cyan-400 text-white hover:text-black transition duration-300"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-cyan-400 text-white hover:text-black transition duration-300"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-cyan-400 text-white hover:text-black transition duration-300"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <hr className="border-gray-700" />
        <div className="py-4 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} CypherSOL Fintech India Pvt Ltd. All
          rights reserved.{""}
        </div>
      </div>
    </div>
  );
};
