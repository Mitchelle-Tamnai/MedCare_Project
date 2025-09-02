import React from 'react';
import { Heart, Activity, Shield, Stethoscope, Brain, Eye, Bone, Baby } from 'lucide-react';

export default function Specialists() {
  const specialists = [
    {
      icon: Heart,
      specialty: "Cardiology",
      description: "Heart and cardiovascular care",
      details: "Our cardiologists specialize in diagnosing and treating heart conditions, including coronary artery disease, heart failure, arrhythmias, and hypertension.",
      color: "red"
    },
    {
      icon: Brain,
      specialty: "Neurology",
      description: "Brain and nervous system disorders",
      details: "Expert care for neurological conditions including stroke, epilepsy, Parkinson's disease, multiple sclerosis, and headache disorders.",
      color: "blue"
    },
    {
      icon: Bone,
      specialty: "Orthopedics",
      description: "Bone, joint, and muscle care",
      details: "Comprehensive orthopedic services including joint replacement, sports medicine, spine care, and treatment of fractures and injuries.",
      color: "green"
    },
    {
      icon: Stethoscope,
      specialty: "Oncology",
      description: "Cancer treatment and care",
      details: "Advanced cancer care with medical oncology, radiation therapy, surgical oncology, and supportive care services.",
      color: "purple"
    },
    {
      icon: Baby,
      specialty: "Pediatrics",
      description: "Children's healthcare",
      details: "Specialized care for infants, children, and adolescents including routine check-ups, vaccinations, and treatment of childhood illnesses.",
      color: "pink"
    },
    {
      icon: Eye,
      specialty: "Ophthalmology",
      description: "Eye and vision care",
      details: "Complete eye care services including routine eye exams, cataract surgery, glaucoma treatment, and retinal disorders.",
      color: "teal"
    },
    {
      icon: Activity,
      specialty: "Internal Medicine",
      description: "Adult primary care",
      details: "Comprehensive primary care for adults including preventive care, chronic disease management, and coordination of specialist care.",
      color: "indigo"
    },
    {
      icon: Shield,
      specialty: "Emergency Medicine",
      description: "Critical care and trauma",
      details: "24/7 emergency care with board-certified emergency physicians, trauma specialists, and critical care teams.",
      color: "orange"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      red: "bg-red-100 text-red-600",
      blue: "bg-blue-100 text-blue-600",
      green: "bg-green-100 text-green-600",
      purple: "bg-purple-100 text-purple-600",
      pink: "bg-pink-100 text-pink-600",
      teal: "bg-teal-100 text-teal-600",
      indigo: "bg-indigo-100 text-indigo-600",
      orange: "bg-orange-100 text-orange-600"
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <div className="pt-20">
      {/* Specialists Hero */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Our Medical Specialists</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Board-certified specialists providing expert care across multiple medical disciplines with years of experience and dedication.
          </p>
        </div>
      </section>

      {/* Specialists Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {specialists.map((specialist, index) => {
              const IconComponent = specialist.icon;
              return (
                <div key={index} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${getColorClasses(specialist.color)}`}>
                    <IconComponent className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">{specialist.specialty}</h3>
                  <p className="text-gray-600 text-center mb-4">{specialist.description}</p>
                  <p className="text-sm text-gray-500 text-center">{specialist.details}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Appointment CTA */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Schedule with a Specialist</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Need to see a specialist? Our team is here to help you get the expert care you need.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Request Specialist Consultation
          </button>
        </div>
      </section>
    </div>
  );
}