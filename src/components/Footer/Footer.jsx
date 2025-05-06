import { 
  Mail,
  MapPin,
  Phone, 
} from "lucide-react";
import React from "react";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FiLinkedin } from "react-icons/fi";
import { LuFacebook } from "react-icons/lu";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 pt-12 pb-6">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mb-8">
          <div className=" flex flex-col items-center">
            <h3 className="text-2xl font-bold text-white mb-4">BillVoyage</h3>
            <p className="mb-4 max-w-[250px] text-center">
              Your trusted partner for utility payments. Simple, secure, and
              seamless.
            </p>
            <div className="flex space-x-4">
              <SocialIcon icon={<LuFacebook size={20} />} />
              <SocialIcon icon={<CiTwitter size={20} />} />
              <SocialIcon icon={<FaInstagram size={20} />} />
              <SocialIcon icon={<FiLinkedin size={20} />} />
            </div>
          </div>

          <div className=" flex flex-col items-center">
            <h4 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <FooterLink text="About Us" />
              <FooterLink text="Our Services" />
              <FooterLink text="Contact Us" />
              <FooterLink text="Careers" />
              <FooterLink text="FAQ" />
            </ul>
          </div>

          <div className="flex flex-col items-center">
            <h4 className="text-lg font-semibold text-white mb-4 mr-3">
              Products
            </h4>
            <ul className="space-y-2">
              <FooterLink text="Accounts" />
              <FooterLink text="Credit Cards" />
              <FooterLink text="Loans" />
              <FooterLink text="Investments" />
              <FooterLink text="Insurance" />
            </ul>
          </div>

          <div className=" flex flex-col items-center">
            <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start justify-center">
                <Phone size={18} className="mr-2 mt-1 flex-shrink-0" />
                <span>+880 131 635 0853</span>
              </li>
              <li className="flex items-start justify-center">
                <Mail size={18} className="mr-2 mt-1 flex-shrink-0" />
                <span>support@billvoyage.com</span>
              </li>
              <li className="flex items-center text-center">
                <span className="ml-6">
                  <MapPin size={18} className="mr-2 mt-1 flex-shrink-0" />
                </span>
                <span>123 Financial District, Dhaka 1000, Bangladesh</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 mt-6 text-sm text-center">
          <p>
            &copy; {new Date().getFullYear()} BillVoyage. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

function SocialIcon({ icon }) {
  return (
    <a
      href="#"
      className="bg-gray-700 p-2 rounded-full hover:bg-blue-600 transition-colors"
    >
      {icon}
    </a>
  );
}

function FooterLink({ text }) {
  return (
    <li>
      <a href="#" className="hover:text-white transition-colors">
        {text}
      </a>
    </li>
  );
}
