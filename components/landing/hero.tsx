"use client";

import { motion } from "framer-motion";
import { Star, Shield, Users, Wallet, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export function Hero() {
  return (
    <section className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center pt-20 sm:pt-20 overflow-x-hidden bg-[#F9FAFB]">
      {/* Background Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#27255f]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[50%] bg-[#ece825]/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-3 sm:px-6 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12 lg:gap-16 xl:gap-20">
          
          {/* Text Content */}
          <div className="flex-1 w-full text-center lg:text-left min-w-0">
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
            
              <motion.h1
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="text-4xl sm:text-4xl md:text-5xl  font-bold text-gray-900 tracking-tight my-4 md:mb-6 leading-[1.1]"
              >
                Shop Products & <br />
                <span className="text-[#27255f]">
                  Services with{" "}
                  <span className="block sm:inline">Paysmallsmall</span>
                </span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="text-base sm:text-lg md:text-xl text-gray-500 mb-4 md:mb-6 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
              >
                Your trusted e-commerce platform. Shop deals, find professionals, and get everything you need delivered fast with Paysmallsmall&apos;s flexible payment options.
              </motion.p>
              
              {/* Pay Small Small Badge */}
              <motion.div
                initial={{ opacity: 0, x: -80, scale: 0.9 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="mb-6 md:mb-8 flex items-center justify-center lg:justify-start"
              >
                <div className="inline-flex items-center gap-2 sm:gap-3 px-3 sm:px-5 py-2 sm:py-3 bg-gradient-to-r from-[#27255f]/10 to-[#ece825]/20 rounded-xl sm:rounded-2xl border-2 border-[#27255f]/20 shadow-lg">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#27255f] flex items-center justify-center flex-shrink-0">
                    <Wallet className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs sm:text-sm font-bold text-[#27255f]">Pay Small Small</div>
                    <div className="text-[10px] sm:text-xs text-gray-600">Pay 50% now, spread the rest over 180 days</div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4"
              >
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={() => toast.info("Coming soon")}
                  className="flex-1 sm:flex-none hover:scale-105 transition-transform flex items-center justify-center gap-2"
                >
                  <Smartphone className="w-5 h-5" />
                  iOS
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={() => toast.info("Coming soon")}
                  className="flex-1 sm:flex-none hover:scale-105 transition-transform flex items-center justify-center gap-2"
                >
                  <Smartphone className="w-5 h-5" />
                  Android
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="mt-8 md:mt-12 flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 md:gap-8 border-t border-gray-200/60 pt-6 md:pt-8"
              >
                {[
                  { icon: Users, label: "10k+ Products" },
                  { icon: Shield, label: "Secure Payments" },
                  { icon: Star, label: "4.9/5 Rating" },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-30px" }}
                    transition={{ duration: 0.5, delay: 0.7 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="flex items-center gap-2 text-gray-600"
                  >
                    <item.icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#27255f]" />
                    <span className="font-medium text-sm sm:text-base">{item.label}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>

          {/* Hero Image / Visual */}
          <motion.div 
            className="flex-1 w-full max-w-lg lg:max-w-none relative min-w-0"
            initial={{ opacity: 0, x: 80, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative aspect-square md:aspect-[4/3] rounded-2xl sm:rounded-[3rem] overflow-hidden shadow-2xl shadow-[#27255f]/10 border-2 sm:border-4 border-white">
              {/* Pay Small Small Visual */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#27255f]/10 via-[#ece825]/10 to-[#27255f]/20 flex items-center justify-center p-4 sm:p-8">
                 <div className="text-center w-full">
                   <div className="w-20 h-20 sm:w-32 sm:h-32 bg-gradient-to-br from-[#27255f] to-[#27255f]/80 rounded-2xl sm:rounded-3xl shadow-2xl mx-auto mb-4 sm:mb-6 flex items-center justify-center">
                     <Wallet className="w-10 h-10 sm:w-16 sm:h-16 text-white" />
                   </div>
                   <div className="space-y-1 sm:space-y-2">
                     <p className="text-lg sm:text-2xl font-bold text-gray-900">Pay Small Small</p>
                     <p className="text-xs sm:text-sm text-gray-600">50% Now • 180 Days</p>
                   </div>
                 </div>
              </div>
              
              {/* Floating Cards */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-4 right-4 sm:top-10 sm:right-10 bg-white p-2 sm:p-4 rounded-xl sm:rounded-2xl shadow-xl border border-gray-100 flex items-center gap-2 sm:gap-3 z-20"
              >
                 <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#ece825]/20 rounded-full flex items-center justify-center">
                   <Star className="w-4 h-4 sm:w-5 sm:h-5 text-[#ece825]" fill="currentColor" />
                 </div>
                 <div>
                   <p className="font-bold text-gray-900 text-xs sm:text-sm">Top Rated</p>
                   <p className="text-[10px] sm:text-xs text-gray-500">Trusted by thousands</p>
                 </div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-4 left-4 sm:bottom-10 sm:left-10 bg-white p-2 sm:p-4 rounded-xl sm:rounded-2xl shadow-xl border border-gray-100 flex items-center gap-2 sm:gap-3 z-20"
              >
                 <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-100 rounded-full flex items-center justify-center">
                   <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-blue-700" />
                 </div>
                 <div>
                   <p className="font-bold text-gray-900 text-xs sm:text-sm">Verified</p>
                   <p className="text-[10px] sm:text-xs text-gray-500">Identity checked</p>
                 </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
