import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 pt-12 pb-6">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">BillVoyage</h3>
            <p className="mb-4">
              Your trusted partner for banking and utility payments. Simple,
              secure, and seamless.
            </p>
            <div className="flex space-x-4">
              <SocialIcon icon={<Facebook size={20} />} />
              <SocialIcon icon={<Twitter size={20} />} />
              <SocialIcon icon={<Instagram size={20} />} />
              <SocialIcon icon={<Linkedin size={20} />} />
            </div>
          </div>

          <div>
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

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Products</h4>
            <ul className="space-y-2">
              <FooterLink text="Accounts" />
              <FooterLink text="Credit Cards" />
              <FooterLink text="Loans" />
              <FooterLink text="Investments" />
              <FooterLink text="Insurance" />
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone size={18} className="mr-2 mt-1 flex-shrink-0" />
                <span>+880 131 635 0853</span>
              </li>
              <li className="flex items-start">
                <Mail size={18} className="mr-2 mt-1 flex-shrink-0" />
                <span>support@billvoyage.com</span>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 flex-shrink-0" />
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
