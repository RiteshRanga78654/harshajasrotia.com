"use client";

import React  from "react";
import Link from "next/link";

import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="relative font-sans">
      <footer className="bg-[#cc0000] text-[#f4f4f4] pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4">
          {/* Main Grid Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
            
            {/* Column 1: Bio & Logo */}
            <div className="space-y-6">
              <div className="flex flex-col items-start">
                {/* <img
                  src="/assets/images/logo.png"
                  alt="Harsha Jasrotia"
                  width={120}
                  height={50}
                  className="object-contain"
                /> */}
                <Link
              href="/"
              className="text-lg md:text-xl font-semibold tracking-wide text-[#f4f4f4]"
            >
              Harsha Jasrotia
            </Link>
              </div>

              <p className="text-sm leading-7 text-[#f4f4f4]">
                Harsha Jasrotia is a seasoned operations and strategy leader,
                known for driving organizational efficiency, scalable growth,
                and cross-functional excellence through structured execution
                and people-centric leadership.
              </p>
            </div>

            {/* Column 2: Extra Links */}
            <div className="lg:pl-10">
              <h3 className="text-[#f4f4f4] text-xl font-extrabold mb-6 uppercase">
                Extra Links
              </h3>
              <ul className="space-y-3 text-[15px]">
                {[
                  "Home",
                  "The Journey",
                  "Strategic Insights",
                  "Events & Speaking",
                  "Media & Gallery",
                  "Contact",
                ].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="hover:text-[#cc0000] transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Get In Touch */}
            <div className="lg:pl-2">
              <h3 className="text-[#f4f4f4] text-xl font-extrabold mb-6 uppercase">
                Get In Touch
              </h3>

              <div className="flex items-center gap-3 mb-4">
                <FaEnvelope className="text-[#f4f4f4] shrink-0" />
                <a
                  href="mailto:connect@harshajasrotia.com"
                  className="hover:text-[#cc0000]"
                >
                  connect@harshajasrotia.com
                </a>
              </div>

              <div className="flex items-start gap-3">
                <FaPhoneAlt className="mt-1 text-[#f4f4f4] shrink-0" />
                <div className="flex flex-col">
                  <a href="tel:+919999999999" className="hover:text-[#f4f4f4]">
                    +91 99XXX XXXXX
                  </a>
                </div>
              </div>
            </div>

            {/* Column 4: Address */}
            <div>
              <h3 className="text-[#f4f4f4] text-xl font-extrabold mb-6 uppercase">
                Address
              </h3>
              <div className="flex items-start gap-3 text-[15px]">
                <FaMapMarkerAlt className="mt-1 text-[#f4f4f4] shrink-0" />
                <p>
                  Corporate Business District <br />
                  Gurugram – 122018 <br />
                  Haryana, India
                </p>
              </div>
            </div>

            {/* Column 5: Follow Me */}
            <div>
              <h3 className="text-[#f4f4f4] text-xl font-extrabold mb-6 uppercase">
                Follow Me
              </h3>

              {/* Newsletter Button */}
              <button
                style={{
                  padding: "6px 10px",
                  backgroundColor: "#b79662",
                  borderRadius: "8px",
                  color: "#fff",
                  fontSize: "12px",
                  fontWeight: "700",
                  display: "flex",
                  marginBottom: "15px",
                  gap: "10px",
                  position: "relative",
                  overflow: "hidden",
                  border: "2px solid #b79662",
                  letterSpacing: "1px",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.querySelector(".hover-fill").style.width = "100%";
                  e.currentTarget.querySelector(".btn-text").style.color = "#b79662";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.querySelector(".hover-fill").style.width = "0%";
                  e.currentTarget.querySelector(".btn-text").style.color = "#fff";
                }}
              >
                <div
                  className="hover-fill"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "0%",
                    height: "100%",
                    background: "#ffffff",
                    transition: "width 0.4s ease",
                    zIndex: -1,
                  }}
                />
                <span className="btn-text relative z-10">
                  Join Our Newsletter
                </span>
              </button>

              {/* Social Icons */}
              <div className="flex flex-wrap gap-2 mt-6 relative z-30">
                <SocialIcon Icon={FaLinkedinIn} color="bg-[#0077b5]" href="#" />
                <SocialIcon Icon={FaTwitter} color="bg-[#1da1f2]" href="#" />
                <SocialIcon Icon={FaInstagram} color="bg-[#444444]" href="#" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="bg-[#b3b3b3] py-6 mt-8 border-t border-[#b3b3b3]">
          <div className="max-w-7xl mx-auto px-4 lg:px-12 flex flex-col md:flex-row justify-between items-center text-sm text-[#222222]">
            <p>
              © {new Date().getFullYear()} Harsha Jasrotia. All Rights Reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-[#cc0000]">Disclaimer</a>
              <span>|</span>
              <a href="#" className="hover:text-[#cc0000]">Privacy Policy</a>
              <span>|</span>
              <a href="#" className="hover:text-[#cc0000]">Terms of Use</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Social Icon Component
const SocialIcon = ({ Icon, color, href }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`w-8 h-8 ${color} rounded flex items-center justify-center text-white hover:scale-110 transition-transform duration-300 relative z-50`}
  >
    <Icon size={14} />
  </a>
);

export default Footer;
