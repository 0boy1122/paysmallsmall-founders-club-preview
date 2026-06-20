 "use client";
 
 import Image from "next/image";
 import Link from "next/link";
 import { Mail, Phone, MapPin } from "lucide-react";
 
export function Footer() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  return (
    <footer className="relative bg-linear-to-br from-gray-50 via-white to-gray-50 pt-16 sm:pt-20 pb-8 border-t-2 border-gray-200 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#27255f]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#ece825]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-10 sm:mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-5 sm:mb-6">
              <Image
                src={`${basePath}/logo.png`}
                alt="Paysmallsmall logo"
                width={160}
                height={40}
                className="h-8 sm:h-10 w-auto"
              />
            </div>
            <p className="text-sm sm:text-base text-gray-600 mb-6 max-w-md leading-relaxed">
              Your trusted e-commerce platform. Shop products, find services, and enjoy secure shopping with Paysmallsmall&apos;s flexible payment options.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <div className="w-8 h-8 rounded-lg bg-[#27255f]/10 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-[#27255f]" />
                </div>
                <a
                  href="mailto:support@paysmallsmall.app"
                  className="hover:text-[#27255f] transition-colors"
                >
                  support@paysmallsmall.app
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <div className="w-8 h-8 rounded-lg bg-[#27255f]/10 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 text-[#27255f]" />
                </div>
                <a
                  href="tel:+233303978485"
                  className="hover:text-[#27255f] transition-colors"
                >
                  +233303978485
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <div className="w-8 h-8 rounded-lg bg-[#27255f]/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-[#27255f]" />
                </div>
                <span>Ghana</span>
              </div>
            </div>
          </div>

          {/* Resources Section */}
          <div>
            <h4 className="font-bold text-gray-900 mb-5 sm:mb-6 text-base sm:text-lg">Resources</h4>
            <ul className="space-y-3.5 sm:space-y-4">
              <li>
                <a href="#" className="text-sm sm:text-base text-gray-600 hover:text-[#27255f] transition-colors inline-flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#27255f]/30 group-hover:bg-[#27255f] transition-colors"></span>
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-sm sm:text-base text-gray-600 hover:text-[#27255f] transition-colors inline-flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#27255f]/30 group-hover:bg-[#27255f] transition-colors"></span>
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-sm sm:text-base text-gray-600 hover:text-[#27255f] transition-colors inline-flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#27255f]/30 group-hover:bg-[#27255f] transition-colors"></span>
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm sm:text-base text-gray-600 hover:text-[#27255f] transition-colors inline-flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#27255f]/30 group-hover:bg-[#27255f] transition-colors"></span>
                  Safety Guides
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links Section */}
          <div>
            <h4 className="font-bold text-gray-900 mb-5 sm:mb-6 text-base sm:text-lg">Quick Links</h4>
            <ul className="space-y-3.5 sm:space-y-4">
              <li>
                <Link href="/#features" className="text-sm sm:text-base text-gray-600 hover:text-[#27255f] transition-colors inline-flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#27255f]/30 group-hover:bg-[#27255f] transition-colors"></span>
                  Features
                </Link>
              </li>
              <li>
                <Link href="/#how-it-works" className="text-sm sm:text-base text-gray-600 hover:text-[#27255f] transition-colors inline-flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#27255f]/30 group-hover:bg-[#27255f] transition-colors"></span>
                  How it Works
                </Link>
              </li>
              <li>
                <Link href="/#pay-small-small" className="text-sm sm:text-base text-gray-600 hover:text-[#27255f] transition-colors inline-flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#27255f]/30 group-hover:bg-[#27255f] transition-colors"></span>
                  Pay Small Small
                </Link>
              </li>
              <li>
                <Link href="/#waitlist" className="text-sm sm:text-base text-gray-600 hover:text-[#27255f] transition-colors inline-flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#27255f]/30 group-hover:bg-[#27255f] transition-colors"></span>
                  Join Waitlist
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-200/60 pt-6 sm:pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-xs sm:text-sm text-center md:text-left">
              © 2026 Paysmallsmall. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-500">
              <span className="w-2 h-2 rounded-full bg-[#BFFF00] animate-pulse"></span>
              <span>Always Available</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
