import React from 'react';
import { Users, Heart, Shield } from 'lucide-react';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold mb-6 leading-tight">
              Comprehensive Healthcare Excellence
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              MedCare Institute is a leading medical institution dedicated to providing exceptional healthcare services 
              with compassion, innovation, and clinical excellence. Our state-of-the-art facility serves patients 
              with comprehensive medical care across all specialties.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Schedule Appointment
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Emergency Services
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Why Choose MedCare Institute</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine advanced medical technology with compassionate patient care to ensure the best possible outcomes.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-10 w-10 text-blue-600" />
              </div>
              <h4 className="text-2xl font-semibold text-gray-900 mb-4">Expert Medical Team</h4>
              <p className="text-gray-600">
                Our team consists of highly qualified physicians, specialists, and healthcare professionals 
                committed to providing personalized care.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-teal-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-10 w-10 text-teal-600" />
              </div>
              <h4 className="text-2xl font-semibold text-gray-900 mb-4">Advanced Technology</h4>
              <p className="text-gray-600">
                We utilize cutting-edge medical equipment and innovative treatment methods to ensure 
                accurate diagnosis and effective treatment.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="h-10 w-10 text-green-600" />
              </div>
              <h4 className="text-2xl font-semibold text-gray-900 mb-4">Compassionate Care</h4>
              <p className="text-gray-600">
                We believe in treating not just conditions, but caring for the whole person with 
                empathy, respect, and dignity.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}