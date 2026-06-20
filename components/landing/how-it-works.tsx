"use client";

import { motion } from "framer-motion";
import { Search, ShoppingCart, CreditCard, Truck, Wallet, CheckCircle2, ArrowRight } from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";

const steps = [
  {
    icon: Search,
    title: "Browse & Search",
    description: "Explore thousands of products and services. Filter by category, price, and ratings.",
    color: "bg-blue-100 text-blue-600",
    step: "1",
  },
  {
    icon: ShoppingCart,
    title: "Add to Cart",
    description: "Select items you love, compare prices, and add them to your shopping cart.",
    color: "bg-purple-100 text-purple-600",
    step: "2",
  },
  {
    icon: CreditCard,
    title: "Choose Payment",
    description: "At checkout, choose how you want to pay: Pay once or Pay Small Small.",
    color: "bg-orange-100 text-orange-600",
    step: "3",
  },
  {
    icon: Truck,
    title: "Get Delivery",
    description: "Receive your order fast. Track shipment in real-time and enjoy your purchase.",
    color: "bg-[#ece825]/20 text-[#27255f]",
    step: "4",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-12 sm:py-16 md:py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-4 px-4 sm:px-0"
          >
            How it works
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base sm:text-lg md:text-xl text-gray-500 max-w-3xl mx-auto px-4 sm:px-0"
          >
            Shop with flexibility. Choose to pay once or spread payments over time. Your choice, your convenience.
          </motion.p>
        </div>

        {/* Main Flow Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 relative z-10">
          {/* Connector Arrows (Desktop) */}
          <div className="hidden lg:flex absolute top-[2.5rem] left-[12%] right-[12%] items-center justify-between -z-10">
            {[0, 1, 2].map((i) => (
              <ArrowRight key={i} className="w-8 h-8 text-gray-300" />
            ))}
          </div>

          {steps.map((step, index) => (
            <GlassCard 
              key={index} 
              delay={index * 0.1} 
              className="text-center h-full hover:border-[#27255f]/30 transition-all bg-white hover:shadow-2xl relative"
            >
              <div className="absolute -top-3 sm:-top-4 left-1/2 -translate-x-1/2 w-7 h-7 sm:w-8 sm:h-8 bg-[#27255f] rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-sm shadow-lg">
                {step.step}
              </div>
              <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-xl sm:rounded-2xl mx-auto mb-4 sm:mb-6 mt-3 sm:mt-4 flex items-center justify-center ${step.color}`}>
                <step.icon className="w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">{step.title}</h3>
              <p className="text-gray-500 leading-relaxed text-xs sm:text-sm px-2 sm:px-0">{step.description}</p>
            </GlassCard>
          ))}
        </div>

        {/* Payment Options at Checkout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="max-w-5xl mx-auto"
        >
          <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 shadow-2xl border border-gray-100">
            <div className="text-center mb-6 md:mb-8">
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-orange-100 text-orange-600 rounded-full text-xs sm:text-sm font-bold mb-3 md:mb-4">
                <CreditCard className="w-3 h-3 sm:w-4 sm:h-4" />
                Step 3: Checkout
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2 md:mb-3 px-4 sm:px-0">
                Choose Your Payment Method
              </h3>
              <p className="text-sm sm:text-base text-gray-500 px-4 sm:px-0">
                Select the payment option that works best for you
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Pay Once Option */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border-2 border-blue-200 hover:border-blue-400 transition-all"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center">
                    <CreditCard className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl sm:text-2xl font-bold text-gray-900">Pay Once</h4>
                    <p className="text-xs sm:text-sm text-gray-600">Full payment upfront</p>
                  </div>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Pay 100% of the total amount</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Get instant delivery</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">No future payments</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Multiple payment methods accepted</span>
                  </li>
                </ul>
                <div className="bg-white rounded-xl p-4 border border-blue-200">
                  <div className="text-sm text-gray-600 mb-1">Example</div>
                  <div className="text-2xl font-bold text-blue-600">GHS 200,000</div>
                  <div className="text-xs text-gray-500">Pay now, get delivery</div>
                </div>
              </motion.div>

              {/* Pay Small Small Option */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="bg-gradient-to-br from-[#27255f]/10 to-[#ece825]/20 rounded-2xl p-8 border-2 border-[#27255f]/30 hover:border-[#27255f]/50 transition-all relative overflow-hidden"
              >
                <div className="absolute top-2 right-2 bg-[#27255f] text-white text-xs font-bold px-3 py-1 rounded-full">
                  Popular
                </div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-[#27255f] rounded-2xl flex items-center justify-center">
                    <Wallet className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl sm:text-2xl font-bold text-gray-900">Pay Small Small</h4>
                    <p className="text-xs sm:text-sm text-gray-600">Flexible installments</p>
                  </div>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#27255f] mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Pay 50% upfront (GHS 100,000)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#27255f] mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Get delivery immediately</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#27255f] mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Spread remaining 50% over 180 days</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#27255f] mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Choose daily or weekly payments</span>
                  </li>
                </ul>
                <div className="bg-white rounded-xl p-4 border border-[#27255f]/20">
                  <div className="text-sm text-gray-600 mb-1">Example</div>
                  <div className="flex items-baseline gap-2 mb-2">
                    <div className="text-xl font-bold text-[#27255f]">GHS 100,000</div>
                    <div className="text-sm text-gray-500">now</div>
                  </div>
                  <div className="text-xs text-gray-500">+ GHS 100,000 over 180 days</div>
                </div>
              </motion.div>
            </div>

            {/* Flow Visualization */}
            <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-gray-200">
              <div className="text-center mb-4 md:mb-6">
                <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-1 md:mb-2 px-4 sm:px-0">Complete Shopping Flow</h4>
                <p className="text-xs sm:text-sm text-gray-500 px-4 sm:px-0">See how easy it is from start to finish</p>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:flex md:flex-row items-center justify-center gap-3 sm:gap-4 md:gap-8 px-4 sm:px-0">
                {[
                  { label: "Browse", icon: Search },
                  { label: "Add to Cart", icon: ShoppingCart },
                  { label: "Checkout", icon: CreditCard },
                  { label: "Choose Payment", icon: Wallet },
                  { label: "Delivery", icon: Truck },
                ].map((item, index) => (
                  <div key={index} className="flex flex-col items-center relative">
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-100 rounded-full flex items-center justify-center mb-1.5 sm:mb-2">
                        <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
                      </div>
                      <span className="text-[10px] sm:text-xs font-medium text-gray-600 text-center">{item.label}</span>
                    </div>
                    {/* Desktop: Show arrows between items in row layout */}
                    {index < 4 && (
                      <ArrowRight className="w-5 h-5 text-gray-300 hidden md:block absolute top-1/2 -right-6 -translate-y-1/2" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
