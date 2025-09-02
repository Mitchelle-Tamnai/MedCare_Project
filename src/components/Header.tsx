import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Heart } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-2">
            <Heart className="h-8 w-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900">MedCare Institute</h1>
          </Link>
          <nav className="hidden md:flex space-x-8">
            <Link to="/about" className="text-gray-700 hover:text-blue-600 transition-colors">About</Link>
            <Link to="/services" className="text-gray-700 hover:text-blue-600 transition-colors">Services</Link>
            <Link to="/specialists" className="text-gray-700 hover:text-blue-600 transition-colors">Specialists</Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Phone className="h-5 w-5 text-blue-600" />
            <span className="text-gray-700 font-medium">Emergency: (555) 911-0000</span>
          </div>
        </div>
      </div>
    </header>
  );
}