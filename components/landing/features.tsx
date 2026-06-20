"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Zap, HeartHandshake, Wallet, Clock, Users, CheckCircle2, Star } from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";

const features = [
  {
    icon: ShieldCheck,
    title: "Secure Shopping",
    description: "Shop with confidence. All products are verified, and payments are processed securely through trusted gateways.",
    color: "bg-blue-100 text-blue-700",
    gradient: "from-blue-50 to-indigo-50",
  },
  {
    icon: Wallet,
    title: "Flexible Payments",
    description: "Pay once or choose Pay Small Small. Spread payments over 180 days with daily or weekly installments - choose what works for you.",
    color: "bg-[#ece825]/20 text-[#27255f]",
    gradient: "from-[#27255f]/5 to-[#ece825]/10",
  },
  {
    icon: Zap,
    title: "Fast Delivery",
    description: "Get your orders delivered quickly. Browse thousands of products and services, all available on Paysmallsmall.",
    color: "bg-orange-100 text-orange-600",
    gradient: "from-orange-50 to-amber-50",
  },
  {
    icon: HeartHandshake,
    title: "Quality Guarantee",
    description: "Not satisfied? Our customer support team ensures you get quality products and services or your money back.",
    color: "bg-pink-100 text-pink-600",
    gradient: "from-pink-50 to-rose-50",
  },
  {
    icon: Clock,
    title: "Always Available",
    description: "Shop anytime, anywhere. Paysmallsmall is always open, so you can browse and order whenever it's convenient.",
    color: "bg-purple-100 text-purple-600",
    gradient: "from-purple-50 to-violet-50",
  },
  {
    icon: Users,
    title: "Trusted Community",
    description: "Join thousands of satisfied customers. Read reviews, check ratings, and shop with confidence.",
    color: "bg-cyan-100 text-cyan-600",
    gradient: "from-cyan-50 to-blue-50",
  },
];

const stats = [
  { value: "10k+", label: "Products Available", icon: Star },
  { value: "98%", label: "Satisfaction Rate", icon: CheckCircle2 },
  { value: "500+", label: "New Items Monthly", icon: Zap },
  { value: "Always", label: "Customer Support", icon: Clock },
];

export function Features() {
  return (
    <section id="features" className="py-12 sm:py-16 md:py-24 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#27255f]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#ece825]/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1 bg-[#27255f]/10 text-[#27255f] rounded-full text-sm font-bold mb-6"
          >
            WHY CHOOSE US
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6 px-4 sm:px-0"
          >
            Shop with confidence, <br className="hidden sm:block" />
            <span className="text-[#27255f]">Get quality products & services.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base sm:text-lg md:text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0"
          >
            Your trusted e-commerce platform. Shop with Paysmallsmall in Ghana. Shop products, find services, and enjoy secure payments with fast delivery.
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => (
            <GlassCard
              key={index}
              delay={index * 0.1}
              className="group hover:border-[#27255f]/30 transition-all bg-white hover:shadow-2xl relative overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              <div className="relative z-10">
                <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl mb-4 sm:mb-6 flex items-center justify-center ${feature.color} group-hover:scale-110 transition-transform`}>
                  <feature.icon className="w-7 h-7 sm:w-8 sm:h-8" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">{feature.title}</h3>
                <p className="text-sm sm:text-base text-gray-500 leading-relaxed px-2 sm:px-0">{feature.description}</p>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="bg-gradient-to-br from-[#27255f] to-[#27255f]/90 rounded-3xl p-8 md:p-12 shadow-2xl"
        >
          <div className="text-center mb-8">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2 md:mb-3 px-4 sm:px-0">
              Trusted by Thousands
            </h3>
            <p className="text-sm sm:text-base text-white/80 px-4 sm:px-0">
              Join our growing community of satisfied customers
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="text-center"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white/20 backdrop-blur-sm rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <stat.icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                </div>
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-1 sm:mb-2">{stat.value}</div>
                <div className="text-white/80 text-xs sm:text-sm font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Additional Benefits */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-6 border-2 border-gray-100 hover:border-[#27255f] transition-all shadow-lg"
          >
            <div className="w-12 h-12 bg-[#27255f]/10 rounded-xl flex items-center justify-center mb-4">
              <CheckCircle2 className="w-6 h-6 text-[#27255f]" />
            </div>
            <h4 className="text-lg font-bold text-gray-900 mb-2">Verified Products</h4>
            <p className="text-gray-500 text-sm">All products go through quality checks before listing</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-2xl p-6 border-2 border-gray-100 hover:border-[#27255f] transition-all shadow-lg"
          >
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
              <ShieldCheck className="w-6 h-6 text-blue-600" />
            </div>
            <h4 className="text-lg font-bold text-gray-900 mb-2">Secure Payments</h4>
            <p className="text-gray-500 text-sm">Multiple secure payment options with encryption</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl p-6 border-2 border-gray-100 hover:border-[#27255f] transition-all shadow-lg"
          >
            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
              <HeartHandshake className="w-6 h-6 text-orange-600" />
            </div>
            <h4 className="text-lg font-bold text-gray-900 mb-2">Customer Support</h4>
            <p className="text-gray-500 text-sm">Always available support team ready to help you anytime</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
