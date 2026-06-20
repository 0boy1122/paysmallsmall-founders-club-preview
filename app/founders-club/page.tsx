import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, CheckCircle2, Crown, Dumbbell, GraduationCap, ShoppingCart, Sparkles, Store, Truck, UserRound, Users } from "lucide-react";
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import { ApplicationForm } from "@/components/founders-club/application-form";

export const metadata: Metadata = {
  title: "Founder's Club | Paysmallsmall",
  description: "Join the Paysmallsmall Founder's Club and build the digital infrastructure your business needs to grow.",
};

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const packages = [
  {
    title: "E-Commerce App",
    audience: "Manufacturers, retailers, pharmacies, fashion brands and supermarkets",
    price: "GHS 18,000 - 25,000",
    image: `${basePath}/founders-club/ecommerce-app.jpg`,
    items: ["AI-powered search and filtering", "Localized payments and checkout", "Live delivery tracking"],
    icon: ShoppingCart,
  },
  {
    title: "Personal Brand App",
    audience: "Entrepreneurs, athletes, consultants, educators, public figures and creators",
    price: "GHS 10,000 - 22,000",
    image: `${basePath}/founders-club/personal-brand-app.png`,
    items: ["Curated content and notifications", "Bookings and subscriptions", "Private community features"],
    icon: UserRound,
  },
  {
    title: "Ride-Hailing & Logistics",
    audience: "Fleet owners, courier services, independent drivers and logistics providers",
    price: "GHS 30,000 - 45,000",
    image: `${basePath}/founders-club/ride-hailing-app.png`,
    items: ["GPS and smart dispatching", "Fleet dashboards and route optimization", "Split payments and safety tools"],
    icon: Truck,
  },
  {
    title: "Health & Wellness App",
    audience: "Gyms, spas, nutritionists, wellness providers and fitness consultants",
    price: "GHS 15,000 - 25,000",
    image: `${basePath}/founders-club/health-wellness-app.png`,
    items: ["Routine and meal-plan builders", "Streaming and wearable integration", "Bookings and progress tracking"],
    icon: Dumbbell,
  },
  {
    title: "Restaurant App",
    audience: "Restaurants, cloud kitchens, quick-service chains and gourmet eateries",
    price: "GHS 15,000 - 25,000",
    image: `${basePath}/founders-club/restaurant-app.png`,
    items: ["Digital menus and QR ordering", "Delivery, pickup and table booking", "Kitchen and loyalty systems"],
    icon: Store,
  },
  {
    title: "Schools & Organizations",
    audience: "Schools, universities, academies, unions, associations and community groups",
    price: "GHS 22,000 - 40,000",
    image: `${basePath}/founders-club/organizations-app.jpg`,
    items: ["Notices and fee collection", "Attendance and learning resources", "Member messaging and events"],
    icon: GraduationCap,
  },
];

const onboarding = [
  ["01", "Vetting & Selection", "We review product-market fit, founder dedication, local traction and capacity to scale."],
  ["02", "Discovery & Architecture", "A technical workshop maps data, integrations, operational flows and visual identity."],
  ["03", "Compliance & Legal", "We guide business, data protection, domain verification and IP requirements."],
  ["04", "Contract & Financing", "The SLA is signed and development begins after the first milestone payment."],
];

export default function FoundersClubPage() {
  return (
    <main className="min-h-screen bg-white font-sans">
      <Navbar />

      <section className="relative overflow-hidden bg-[#f8f8fb] px-6 pb-20 pt-36 sm:pt-44">
        <div className="absolute -left-32 top-10 h-80 w-80 rounded-full bg-[#27255f]/10 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-[#ece825]/20 blur-3xl" />
        <div className="container relative z-10 mx-auto max-w-5xl text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#27255f] shadow-xl shadow-[#27255f]/20">
            <Crown className="h-8 w-8 text-[#ece825]" />
          </div>
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.24em] text-[#27255f]">Paysmallsmall presents</p>
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            The Founder&apos;s Club
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-gray-600 sm:text-xl">
            An exclusive digital development incubator for selected early-stage startups and founders ready to launch high-performing mobile platforms.
          </p>
          <Link href="#application" className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-[#27255f] px-7 py-4 font-semibold text-white shadow-lg transition-transform hover:scale-105">
            Apply to Join <ArrowDown className="h-5 w-5" />
          </Link>
        </div>
      </section>

      <section id="details" className="px-6 py-16 sm:py-24">
        <div className="container mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-[#27255f]">The details</p>
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">A 360-degree Digital Infrastructure Suite</h2>
            <p className="mt-5 text-lg leading-relaxed text-gray-600">
              The Founder&apos;s Club turns capital-intensive custom software development into a predictable startup investment. Members receive a customized mobile ecosystem covering frontend design, backend engineering, databases and localized payment architecture.
            </p>
          </div>
          <div className="rounded-3xl bg-[#27255f] p-8 text-white shadow-2xl sm:p-10">
            <Users className="mb-6 h-10 w-10 text-[#ece825]" />
            <h3 className="text-2xl font-bold">Every app includes</h3>
            <p className="mt-3 leading-relaxed text-white/75">
              A companion business website, an AI-powered WhatsApp chatbot with official API verification, three high-production marketing reels, plus post-build maintenance and management.
            </p>
          </div>
        </div>
      </section>

      <section id="packages" className="bg-gray-50 px-6 py-16 sm:py-24">
        <div className="container mx-auto max-w-6xl">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-[#27255f]">Packages</p>
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Mobile application ecosystems</h2>
            <p className="mt-4 text-gray-600">Pre-architected mobile app blueprints customized for your brand and operational workflow.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {packages.map(({ title, audience, price, image, items, icon: Icon }) => (
              <article key={title} className="overflow-hidden rounded-3xl border-2 border-gray-100 bg-white shadow-lg shadow-gray-200/50 transition-transform hover:-translate-y-1">
                <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                  <Image
                    src={image}
                    alt={`${title} mobile application preview`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-7">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#27255f]/10">
                    <Icon className="h-6 w-6 text-[#27255f]" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{title}</h3>
                  <p className="mt-3 min-h-24 text-sm leading-relaxed text-gray-600">Designed for: {audience}.</p>
                  <ul className="mt-6 space-y-3">
                    {items.map((item) => (
                      <li key={item} className="flex gap-3 text-sm text-gray-700">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#27255f]" /> {item}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-7 border-t border-gray-100 pt-5 text-lg font-bold text-[#27255f]">{price}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-10 rounded-3xl bg-[#ece825]/20 p-6 text-center sm:p-8">
            <Sparkles className="mx-auto mb-3 h-7 w-7 text-[#27255f]" />
            <p className="font-bold text-gray-900">Included with every package</p>
            <p className="mt-2 text-gray-700">Business website + verified WhatsApp AI chatbot + 3 marketing reels + post-build maintenance and management</p>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 sm:py-24">
        <div className="container mx-auto max-w-6xl">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-[#27255f]">How admission works</p>
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">From application to development</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {onboarding.map(([number, title, description]) => (
              <article key={number} className="flex gap-5 rounded-3xl border border-gray-100 bg-white p-6 shadow-lg shadow-gray-200/40">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#27255f] font-bold text-[#ece825]">{number}</span>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">{title}</h3>
                  <p className="mt-2 leading-relaxed text-gray-600">{description}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-8 grid gap-5 rounded-3xl bg-[#27255f] p-7 text-white sm:grid-cols-3 sm:p-9">
            <div><p className="text-2xl font-bold text-[#ece825]">12 weeks</p><p className="mt-1 text-sm text-white/70">Structured six-sprint delivery plan</p></div>
            <div><p className="text-2xl font-bold text-[#ece825]">50 / 30 / 20</p><p className="mt-1 text-sm text-white/70">Deposit, beta delivery and launch milestones</p></div>
            <div><p className="text-2xl font-bold text-[#ece825]">GHS 1,000</p><p className="mt-1 text-sm text-white/70">Monthly maintenance package after launch</p></div>
          </div>
        </div>
      </section>

      <section id="application" className="bg-gray-50 px-6 py-16 sm:py-24">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-10 text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-[#27255f]">Application to join</p>
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Tell us about your business</h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-600">Complete the form below. You will review and send your application securely through WhatsApp.</p>
          </div>
          <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-2xl shadow-gray-200/60 sm:p-10">
            <ApplicationForm />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
