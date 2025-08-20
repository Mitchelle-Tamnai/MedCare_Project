import React from 'react';
import { Phone, Mail, MapPin, Clock, Users, Heart, Shield, Stethoscope, Baby, UserCheck, Activity } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Heart className="h-8 w-8 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">MedCare Institute</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">About</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">Services</a>
              <a href="#specialists" className="text-gray-700 hover:text-blue-600 transition-colors">Specialists</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
            </nav>
            <div className="flex items-center space-x-4">
              <Phone className="h-5 w-5 text-blue-600" />
              <span className="text-gray-700 font-medium">Emergency: (555) 911-0000</span>
            </div>
          </div>
        </div>
      </header>

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

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">About MedCare Institute</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Founded with a mission to deliver world-class healthcare, MedCare Institute combines advanced medical 
              technology with compassionate patient care to ensure the best possible outcomes for our community.
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

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Our Medical Services</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer a comprehensive range of medical services to meet all your healthcare needs, 
              from routine check-ups to specialized treatments and emergency care.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* In-Patient Services */}
            <div className="bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h4 className="text-2xl font-semibold text-gray-900 mb-4">In-Patient Services</h4>
              <p className="text-gray-600 mb-6">
                Comprehensive 24/7 inpatient care with comfortable private and semi-private rooms, 
                skilled nursing staff, and coordinated medical care for complex conditions.
              </p>
              <button className="text-blue-600 font-semibold hover:text-blue-800 transition-colors">
                Learn More →
              </button>
            </div>

            {/* Out-Patient Services */}
            <div className="bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8">
              <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <UserCheck className="h-8 w-8 text-teal-600" />
              </div>
              <h4 className="text-2xl font-semibold text-gray-900 mb-4">Out-Patient Services</h4>
              <p className="text-gray-600 mb-6">
                Convenient outpatient care including consultations, routine check-ups, diagnostic tests, 
                and follow-up appointments without hospital admission.
              </p>
              <button className="text-teal-600 font-semibold hover:text-teal-800 transition-colors">
                Learn More →
              </button>
            </div>

            {/* Emergency Services */}
            <div className="bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Activity className="h-8 w-8 text-red-600" />
              </div>
              <h4 className="text-2xl font-semibold text-gray-900 mb-4">Emergency Services</h4>
              <p className="text-gray-600 mb-6">
                24/7 emergency department with rapid response team, advanced life support, 
                trauma care, and immediate medical attention for critical conditions.
              </p>
              <button className="text-red-600 font-semibold hover:text-red-800 transition-colors">
                Learn More →
              </button>
            </div>

            {/* Prenatal & Antenatal Services */}
            <div className="bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8">
              <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Baby className="h-8 w-8 text-pink-600" />
              </div>
              <h4 className="text-2xl font-semibold text-gray-900 mb-4">Prenatal & Antenatal Care</h4>
              <p className="text-gray-600 mb-6">
                Comprehensive maternal healthcare including pregnancy monitoring, ultrasounds, 
                genetic counseling, birthing classes, and postpartum care for mother and baby.
              </p>
              <button className="text-pink-600 font-semibold hover:text-pink-800 transition-colors">
                Learn More →
              </button>
            </div>

            {/* Specialists */}
            <div className="bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Stethoscope className="h-8 w-8 text-purple-600" />
              </div>
              <h4 className="text-2xl font-semibold text-gray-900 mb-4">Medical Specialists</h4>
              <p className="text-gray-600 mb-6">
                Access to board-certified specialists in cardiology, neurology, orthopedics, 
                oncology, gastroenterology, and other specialized medical fields.
              </p>
              <button className="text-purple-600 font-semibold hover:text-purple-800 transition-colors">
                Learn More →
              </button>
            </div>

            {/* Screening Services */}
            <div className="bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Activity className="h-8 w-8 text-green-600" />
              </div>
              <h4 className="text-2xl font-semibold text-gray-900 mb-4">Screening Services</h4>
              <p className="text-gray-600 mb-6">
                Preventive health screenings including mammograms, colonoscopies, cardiac screenings, 
                cancer screenings, and comprehensive health assessments.
              </p>
              <button className="text-green-600 font-semibold hover:text-green-800 transition-colors">
                Learn More →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Specialists Section */}
      <section id="specialists" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Our Medical Specialists</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our team of board-certified specialists brings extensive expertise and compassionate care 
              across multiple medical disciplines.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-red-600" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Cardiology</h4>
                <p className="text-gray-600">Heart and cardiovascular care</p>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Activity className="h-8 w-8 text-blue-600" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Neurology</h4>
                <p className="text-gray-600">Brain and nervous system disorders</p>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-green-600" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Orthopedics</h4>
                <p className="text-gray-600">Bone, joint, and muscle care</p>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Stethoscope className="h-8 w-8 text-purple-600" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Oncology</h4>
                <p className="text-gray-600">Cancer treatment and care</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-4">Contact MedCare Institute</h3>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              We're here to help you with all your healthcare needs. Contact us to schedule an appointment 
              or for any medical emergencies.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Phone</h4>
              <p className="text-blue-100">General: (555) 123-4567</p>
              <p className="text-blue-100">Emergency: (555) 911-0000</p>
            </div>
            
            <div>
              <div className="bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Email</h4>
              <p className="text-blue-100">info@medcare.com</p>
              <p className="text-blue-100">appointments@medcare.com</p>
            </div>
            
            <div>
              <div className="bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Location</h4>
              <p className="text-blue-100">123 Healthcare Drive</p>
              <p className="text-blue-100">Medical City, MC 12345</p>
            </div>
            
            <div>
              <div className="bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Hours</h4>
              <p className="text-blue-100">Mon-Fri: 7:00 AM - 8:00 PM</p>
              <p className="text-blue-100">Emergency: 24/7</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
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
                <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
                <li><a href="#specialists" className="hover:text-white transition-colors">Specialists</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="text-lg font-semibold mb-4">Services</h5>
              <ul className="space-y-2 text-gray-400">
                <li>Emergency Care</li>
                <li>In-Patient Services</li>
                <li>Out-Patient Services</li>
                <li>Maternity Care</li>
              </ul>
            </div>
            
            <div>
              <h5 className="text-lg font-semibold mb-4">Emergency</h5>
              <p className="text-gray-400 mb-2">24/7 Emergency Services</p>
              <p className="text-2xl font-bold text-red-400">(555) 911-0000</p>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 MedCare Institute. All rights reserved. | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;