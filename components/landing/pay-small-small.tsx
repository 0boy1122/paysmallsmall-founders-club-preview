"use client";

import { motion } from "framer-motion";
import { Wallet, Package, Calendar, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";

const benefits = [
  {
    icon: Wallet,
    title: "Pay 50% Now",
    description: "Pay 50% upfront as initial deposit and get your order delivered immediately.",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: Package,
    title: "Get Delivery",
    description: "Receive your products right away. No need to wait until full payment.",
    color: "bg-purple-100 text-purple-600",
  },
  {
    icon: Calendar,
    title: "180-Day Plan",
    description: "Pay the remaining 50% over 180 days. Choose daily or weekly payments that fit your budget.",
    color: "bg-orange-100 text-orange-600",
  },
  {
    icon: CheckCircle2,
    title: "Transparent Pricing",
    description: "Clear payment amounts for your chosen frequency with transparent interest/service fees shown upfront.",
    color: "bg-[#ece825]/20 text-[#27255f]",
  },
];

export function PaySmallSmall() {
  return (
    <section id="pay-small-small" className="py-12 sm:py-16 md:py-24 bg-gradient-to-br from-[#27255f]/5 via-white to-[#ece825]/5 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#27255f]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-200/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1 bg-[#27255f]/10 text-[#27255f] rounded-full text-sm font-bold mb-6"
          >
            FLEXIBLE PAYMENTS
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-4 px-4 sm:px-0"
          >
            Pay Small Small, <br className="hidden sm:block" />
            <span className="text-[#27255f]">Shop Big</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base sm:text-lg md:text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0"
          >
            Get what you need now, pay later. Pay 50% upfront as initial deposit, receive your order, and spread the remaining 50% over 180 days. Choose daily or weekly payments—whatever works best for you. Transparent pricing, no hidden surprises.
          </motion.p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <GlassCard 
              key={index} 
              delay={index * 0.1} 
              className="text-center h-full hover:border-[#27255f]/30 transition-colors bg-white hover:shadow-2xl"
            >
              <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl mx-auto mb-3 sm:mb-4 flex items-center justify-center ${benefit.color}`}>
                <benefit.icon className="w-7 h-7 sm:w-8 sm:h-8" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1.5 sm:mb-2">{benefit.title}</h3>
              <p className="text-gray-500 text-xs sm:text-sm leading-relaxed px-2 sm:px-0">{benefit.description}</p>
            </GlassCard>
          ))}
        </div>

        {/* Example Payment Plan */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="max-w-4xl mx-auto bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 shadow-2xl border border-gray-100"
        >
          <div className="text-center mb-6 md:mb-8">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2 md:mb-3 px-4 sm:px-0">
              Financial Mechanics - Example
            </h3>
            <p className="text-sm sm:text-base text-gray-500 px-4 sm:px-0">
              Flexible 180-day payment plan - choose daily or weekly installments
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#27255f]/10 to-[#ece825]/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-4 sm:mb-6 border-2 border-[#27255f]/20">
            <div className="text-center">
              <div className="text-xs sm:text-sm text-gray-600 mb-1.5 sm:mb-2">Example Purchase</div>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#27255f] mb-1">GHS 200,000</div>
              <div className="text-base sm:text-lg text-gray-700 font-semibold">Generator</div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-[#27255f]/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 border-2 border-[#27255f]/20">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#27255f] mb-1.5 sm:mb-2">GHS 200,000</div>
                <div className="text-xs sm:text-sm text-gray-600 mb-1 font-semibold">Product Price</div>
                <div className="text-[10px] sm:text-xs text-gray-500">Total Amount</div>
              </div>
            </div>
            
            <div className="bg-blue-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 border-2 border-blue-200">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-1.5 sm:mb-2">GHS 100,000</div>
                <div className="text-xs sm:text-sm text-gray-600 mb-1 font-semibold">Initial Deposit (50%)</div>
                <div className="text-[10px] sm:text-xs text-gray-500">Pay now, get delivery</div>
              </div>
            </div>
            
            <div className="bg-purple-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 border-2 border-purple-200">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-600 mb-1.5 sm:mb-2">GHS 100,000</div>
                <div className="text-xs sm:text-sm text-gray-600 mb-1 font-semibold">Remaining Balance</div>
                <div className="text-[10px] sm:text-xs text-gray-500">Pay over 180 days</div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-200 mb-4 sm:mb-6">
            <div className="text-center mb-3 sm:mb-4">
              <h4 className="font-bold text-gray-900 text-base sm:text-lg mb-1.5 sm:mb-2">Choose Your Payment Frequency</h4>
              <p className="text-xs sm:text-sm text-gray-500 mt-1.5 sm:mt-2 mb-4">Select daily or weekly - it&apos;s your choice!</p>
              
              {/* Payment Frequency Options */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div className="bg-white rounded-xl p-4 border-2 border-[#27255f]/20">
                  <div className="font-semibold text-gray-900 mb-1">Daily</div>
                  <div className="text-lg font-bold text-[#27255f]">~GHS 556/day</div>
                  <div className="text-xs text-gray-500 mt-1">180 payments</div>
                </div>
                <div className="bg-white rounded-xl p-4 border-2 border-[#27255f]/20">
                  <div className="font-semibold text-gray-900 mb-1">Weekly</div>
                  <div className="text-lg font-bold text-[#27255f]">~GHS 3,846/week</div>
                  <div className="text-xs text-gray-500 mt-1">~26 payments</div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-4 border border-gray-200">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-600 text-sm">Remaining Balance:</span>
                <span className="font-bold text-gray-900">GHS 100,000</span>
              </div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-600 text-sm">Payment Period:</span>
                <span className="font-bold text-gray-900">180 Days</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600 text-sm">Payment Frequency:</span>
                <span className="font-bold text-[#27255f]">You Choose!</span>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 rounded-2xl p-6 border-2 border-blue-200">
            <h4 className="font-bold text-gray-900 mb-4 text-center">Payment Schedule Overview</h4>
            <div className="space-y-3">
              <div className="flex items-center justify-between bg-white rounded-xl p-4 border border-gray-200">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#27255f]/10 flex items-center justify-center">
                    <Wallet className="w-5 h-5 text-[#27255f]" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Day 1 - Initial Deposit</div>
                    <div className="text-sm text-gray-500">Get your product delivered</div>
                  </div>
                </div>
                <div className="text-lg font-bold text-[#27255f]">GHS 100,000</div>
              </div>
              <div className="flex items-center justify-between bg-white rounded-xl p-4 border border-gray-200">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Days 2-181</div>
                    <div className="text-sm text-gray-500">Pay daily or weekly - your choice!</div>
                  </div>
                </div>
                <div className="text-lg font-bold text-blue-600">Flexible</div>
              </div>
            </div>
            <p className="text-center text-sm text-gray-500 mt-4">
              * Interest/service fees are calculated separately and shown transparently before you commit. Choose the payment frequency that works best for your budget.
            </p>
          </div>

          <div className="mt-8 text-center">
            <Button size="lg" className="hover:scale-105 transition-transform">
              Start Shopping
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
