import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Heart, Award } from 'lucide-react';
import Card from '../components/ui/Card';
import AnimatedSection from '../components/animations/AnimatedSection';

const About = () => {
  const values = [
    {
      icon: <Users className="w-8 h-8 text-blue-500" />,
      title: "Community First",
      description: "We believe in building strong, supportive communities where everyone can thrive."
    },
    {
      icon: <Target className="w-8 h-8 text-green-500" />,
      title: "Goal Oriented",
      description: "Every connection should have a purpose and help individuals achieve their goals."
    },
    {
      icon: <Heart className="w-8 h-8 text-red-500" />,
      title: "Authentic Relationships",
      description: "We foster genuine connections built on trust, respect, and mutual growth."
    },
    {
      icon: <Award className="w-8 h-8 text-yellow-500" />,
      title: "Excellence",
      description: "We strive for excellence in everything we do, from our platform to our service."
    }
  ];

  const team = [
    {
      name: "Alex Johnson",
      role: "CEO & Founder",
      description: "Former tech executive with 15 years of experience building communities."
    },
    {
      name: "Sarah Chen",
      role: "CTO",
      description: "Full-stack engineer passionate about creating seamless user experiences."
    },
    {
      name: "Michael Rodriguez",
      role: "Head of Design",
      description: "Design leader focused on creating intuitive and beautiful interfaces."
    }
  ];

  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About Topmate
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We're on a mission to connect people with the right mentors and experts 
            to accelerate their personal and professional growth.
          </p>
        </motion.div>
      </section>

      {/* Mission Section */}
      <AnimatedSection className="bg-gray-50 dark:bg-gray-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                At Topmate, we believe that everyone deserves access to quality mentorship 
                and expertise. Our platform bridges the gap between those seeking guidance 
                and those ready to share their knowledge.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Whether you're a student looking for career advice, a professional seeking 
                to switch fields, or an entrepreneur building your first startup, we connect 
                you with the right people at the right time.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden bg-gradient-to-br from-blue-500 to-purple-600 p-8">
                <div className="flex items-center justify-center h-full">
                  <div className="text-center text-white">
                    <div className="text-4xl font-bold mb-2">10,000+</div>
                    <div className="text-lg">Connections Made</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Values Section */}
      <AnimatedSection className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card hover className="p-6 text-center h-full">
                  <div className="flex justify-center mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {value.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Team Section */}
      <AnimatedSection className="bg-gray-50 dark:bg-gray-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              The people behind Topmate
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card hover className="p-6 text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {member.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default About;