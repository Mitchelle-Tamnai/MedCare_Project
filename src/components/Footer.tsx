import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Heart className="h-6 w-6 text-blue-400" />
              <h4 className="text-xl font-bold">MedCare Institute</h4>
            </div>
            <p className="text-gray-400">
              Providing exceptional healthcare with compassion and clinical excellence.
            </p>
          </div>
          
          <div>
            <h5 className="text-lg font-semibold mb-4">Quick Links</h5>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/specialists" className="hover:text-white transition-colors">Specialists</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h5 className="text-lg font-semibold mb-4">Services</h5>
            <ul className="space-y-2 text-gray-400">
              <li>Emergency Care</li>
              <li>Maternity Care</li>
              <li>Specialist Care</li>
            </ul>
          </div>
          
          <div>
            <h5 className="text-lg font-semibold mb-4">Emergency</h5>
            <p className="text-gray-400 mb-2">24/7 Emergency Services</p>
            <p className="text-2xl font-bold text-red-400">(+254) 07123-0000</p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 MedCare Institute. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
}