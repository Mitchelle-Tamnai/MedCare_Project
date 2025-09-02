import React from 'react';
import { Users, Award, Building, Calendar } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-20">
      {/* About Hero */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">About MedCare Institute</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Dedicated to excellence in healthcare since 1985, serving our community with compassion and innovation.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                To provide exceptional, compassionate healthcare services that improve the health and well-being 
                of our community through clinical excellence, innovative treatments, and patient-centered care.
              </p>
              <p className="text-gray-600">
                We are committed to delivering the highest quality medical care while treating each patient 
                with dignity, respect, and understanding.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
              <p className="text-lg text-gray-600 mb-6">
                To be the leading healthcare institution in our region, recognized for our commitment to 
                medical excellence, innovative care delivery, and positive patient outcomes.
              </p>
              <p className="text-gray-600">
                We strive to set the standard for healthcare quality and patient satisfaction while 
                advancing medical knowledge through research and education.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Impact</h2>
            <p className="text-xl text-gray-600">Serving our community with dedication and excellence</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">50,000+</div>
              <div className="text-gray-600">Patients Served Annually</div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-teal-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">40</div>
              <div className="text-gray-600">Years of Excellence</div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="h-8 w-8 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">300+</div>
              <div className="text-gray-600">Medical Professionals</div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-purple-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">24/7</div>
              <div className="text-gray-600">Emergency Care</div>
            </div>
          </div>
        </div>
      </section>

      {/* History */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Our History</h2>
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold">
                  1985
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Foundation</h3>
                  <p className="text-gray-600">
                    MedCare Institute was founded with a vision to provide comprehensive healthcare services 
                    to our growing community.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold">
                  1995
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Expansion</h3>
                  <p className="text-gray-600">
                    Added specialized departments including cardiology, neurology, and emergency services 
                    to better serve our patients.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold">
                  2010
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Modernization</h3>
                  <p className="text-gray-600">
                    Invested in state-of-the-art medical equipment and technology to enhance diagnostic 
                    capabilities and treatment outcomes.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold">
                  2020
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Innovation</h3>
                  <p className="text-gray-600">
                    Launched telemedicine services and digital health initiatives to improve patient 
                    accessibility and care coordination.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}