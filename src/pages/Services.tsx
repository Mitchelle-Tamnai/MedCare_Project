import React from 'react';
import { Shield, UserCheck, Activity, Baby, Stethoscope, Heart } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Shield,
      title: "In-Patient Services",
      description: "Comprehensive 24/7 inpatient care with comfortable private and semi-private rooms, skilled nursing staff, and coordinated medical care for complex conditions.",
      features: ["Private & Semi-Private Rooms", "24/7 Nursing Care", "Specialized Medical Units", "Patient Support Services"],
      color: "blue"
    },
    {
      icon: UserCheck,
      title: "Out-Patient Services",
      description: "Convenient outpatient care including consultations, routine check-ups, diagnostic tests, and follow-up appointments without hospital admission.",
      features: ["Same-Day Appointments", "Diagnostic Testing", "Specialist Consultations", "Follow-up Care"],
      color: "teal"
    },
    {
      icon: Activity,
      title: "Emergency Services",
      description: "24/7 emergency department with rapid response team, advanced life support, trauma care, and immediate medical attention for critical conditions.",
      features: ["24/7 Emergency Care", "Trauma Center", "Advanced Life Support", "Rapid Response Team"],
      color: "red"
    },
    {
      icon: Baby,
      title: "Prenatal & Antenatal Care",
      description: "Comprehensive maternal healthcare including pregnancy monitoring, ultrasounds, genetic counseling, birthing classes, and postpartum care.",
      features: ["Pregnancy Monitoring", "Ultrasound Services", "Genetic Counseling", "Birthing Classes"],
      color: "pink"
    },
    {
      icon: Stethoscope,
      title: "Medical Specialists",
      description: "Access to board-certified specialists in cardiology, neurology, orthopedics, oncology, gastroenterology, and other specialized medical fields.",
      features: ["Board-Certified Specialists", "Multi-Disciplinary Care", "Advanced Procedures", "Consultation Services"],
      color: "purple"
    },
    {
      icon: Heart,
      title: "Screening Services",
      description: "Preventive health screenings including mammograms, colonoscopies, cardiac screenings, cancer screenings, and comprehensive health assessments.",
      features: ["Cancer Screenings", "Cardiac Assessments", "Preventive Care", "Health Check-ups"],
      color: "green"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: "bg-blue-100 text-blue-600 hover:bg-blue-200",
      teal: "bg-teal-100 text-teal-600 hover:bg-teal-200",
      red: "bg-red-100 text-red-600 hover:bg-red-200",
      pink: "bg-pink-100 text-pink-600 hover:bg-pink-200",
      purple: "bg-purple-100 text-purple-600 hover:bg-purple-200",
      green: "bg-green-100 text-green-600 hover:bg-green-200"
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <div className="pt-20">
      {/* Services Hero */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Our Medical Services</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Comprehensive healthcare services designed to meet all your medical needs with excellence and compassion.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 ${getColorClasses(service.color)}`}>
                    <IconComponent className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Schedule Your Appointment?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Our friendly staff is ready to help you schedule an appointment or answer any questions about our services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Schedule Appointment
            </button>
            <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors">
              Call (555) 123-4567
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}