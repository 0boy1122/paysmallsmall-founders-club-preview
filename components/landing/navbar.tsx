"use client";

import { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

export function Navbar() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => {
      setIsScrolled(latest > 50);
    });
    return () => unsubscribe();
  }, [scrollY]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    const targetId = href.split("#")[1];
    if (!targetId) return;
    const element = document.getElementById(targetId);

    if (element) {
      e.preventDefault();
      const headerHeight = 80; // Account for fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    
    // Close mobile menu
    setIsMobileOpen(false);
  };

  return (
    <>
      <motion.header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled ? "py-4" : "py-6"
        )}
      >
        <div className="container mx-auto px-6">
          <div
            className={cn(
              "rounded-full transition-all duration-300 flex items-center justify-between px-4 sm:px-6",
              isScrolled
                ? "bg-white/80 backdrop-blur-lg shadow-lg shadow-black/5 border border-white/20 h-14 sm:h-16"
                : "bg-transparent h-16 sm:h-20"
            )}
          >
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <Image
                src={`${basePath}/logo.png`}
                alt="Paysmallsmall logo"
                width={1000}
                height={1000}
                priority
                className=" w-auto"
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {[
                { label: "Features", id: "features" },
                { label: "How it Works", id: "how-it-works" },
                { label: "Pay Small Small", id: "pay-small-small" },
                { label: "Waitlist", id: "waitlist" },
              ].map((item) => {
                const href = `/#${item.id}`;
                return (
                  <a
                    key={item.id}
                    href={href}
                    onClick={(e) => handleNavClick(e, href)}
                    className="text-sm font-medium text-gray-600 hover:text-[#27255f] transition-colors cursor-pointer"
                  >
                    {item.label}
                  </a>
                );
              })}
              <Link
                href="/founders-club"
                className="text-sm font-semibold text-[#27255f] hover:text-[#1f1d4a] transition-colors"
              >
                Founder&apos;s Club
              </Link>
            </nav>

            {/* CTA */}
            <div className="hidden md:flex items-center gap-3">
              <Button 
                size="sm" 
                variant="outline"
                onClick={() => toast.info("Coming soon")}
                className="flex items-center gap-2"
              >
                <Smartphone className="w-4 h-4" />
                iOS
              </Button>
              <Button 
                size="sm" 
                variant="outline"
                onClick={() => toast.info("Coming soon")}
                className="flex items-center gap-2"
              >
                <Smartphone className="w-4 h-4" />
                Android
              </Button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden p-2 text-gray-600"
              onClick={() => setIsMobileOpen(!isMobileOpen)}
            >
              {isMobileOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden"
        >
          <div className="flex flex-col gap-6">
            {[
              { label: "Features", id: "features" },
              { label: "How it Works", id: "how-it-works" },
              { label: "Pay Small Small", id: "pay-small-small" },
              { label: "Waitlist", id: "waitlist" },
            ].map((item) => {
              const href = `/#${item.id}`;
              return (
                <a
                  key={item.id}
                  href={href}
                  onClick={(e) => handleNavClick(e, href)}
                  className="text-xl sm:text-2xl font-bold text-gray-900 cursor-pointer"
                >
                  {item.label}
                </a>
              );
            })}
            <Link
              href="/founders-club"
              onClick={() => setIsMobileOpen(false)}
              className="text-xl sm:text-2xl font-bold text-[#27255f]"
            >
              Founder&apos;s Club
            </Link>
            <div className="h-px bg-gray-100 my-4" />
            <Button 
              className="w-full" 
              size="lg"
              variant="outline"
              onClick={() => {
                setIsMobileOpen(false);
                toast.info("Coming soon");
              }}
            >
              <Smartphone className="mr-2 w-5 h-5" />
              iOS
            </Button>
            <Button 
              className="w-full" 
              size="lg"
              variant="outline"
              onClick={() => {
                setIsMobileOpen(false);
                toast.info("Coming soon");
              }}
            >
              <Smartphone className="mr-2 w-5 h-5" />
              Android
            </Button>
          </div>
        </motion.div>
      )}
    </>
  );
}
