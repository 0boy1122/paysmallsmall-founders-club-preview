"use client";

import { FormEvent, useState } from "react";
import { ArrowUpRight, Building2, Mail, MapPin, Phone, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_NUMBER = "233249939025";

type Application = {
  fullName: string;
  businessName: string;
  businessLocation: string;
  email: string;
  whatsappContact: string;
  callNumber: string;
  businessDetails: string;
};

const initialApplication: Application = {
  fullName: "",
  businessName: "",
  businessLocation: "",
  email: "",
  whatsappContact: "",
  callNumber: "",
  businessDetails: "",
};

const fields = [
  { name: "fullName", label: "Full Name", type: "text", icon: User },
  { name: "businessName", label: "Business Name", type: "text", icon: Building2 },
  { name: "businessLocation", label: "Business Location", type: "text", icon: MapPin },
  { name: "email", label: "Email Address", type: "email", icon: Mail },
  { name: "whatsappContact", label: "WhatsApp Contact", type: "tel", icon: Phone },
  { name: "callNumber", label: "Call Number", type: "tel", icon: Phone },
] as const;

export function ApplicationForm() {
  const [application, setApplication] = useState<Application>(initialApplication);

  const updateField = (name: keyof Application, value: string) => {
    setApplication((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const message = [
      "FOUNDER'S CLUB APPLICATION",
      "",
      `Full Name: ${application.fullName}`,
      `Business Name: ${application.businessName}`,
      `Business Location: ${application.businessLocation}`,
      `Email Address: ${application.email}`,
      `WhatsApp Contact: ${application.whatsappContact}`,
      `Call Number: ${application.callNumber}`,
      "",
      "About the business and why it needs our Digital Infrastructure Services:",
      application.businessDetails,
    ].join("\n");

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-5 md:grid-cols-2">
        {fields.map(({ name, label, type, icon: Icon }) => (
          <label key={name} className="block">
            <span className="mb-2 block text-sm font-semibold text-gray-700">
              {label} <span className="text-red-500">*</span>
            </span>
            <span className="relative block">
              <Icon className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
              <input
                required
                name={name}
                type={type}
                value={application[name]}
                onChange={(event) => updateField(name, event.target.value)}
                className="h-14 w-full rounded-2xl border-2 border-gray-200 bg-white pl-12 pr-4 text-gray-900 outline-none transition-colors focus:border-[#27255f]"
              />
            </span>
          </label>
        ))}
      </div>

      <label className="block">
        <span className="mb-2 block text-sm font-semibold text-gray-700">
          Tell us about your business and why it needs our Digital Infrastructure Services. <span className="text-red-500">*</span>
        </span>
        <textarea
          required
          name="businessDetails"
          rows={6}
          value={application.businessDetails}
          onChange={(event) => updateField("businessDetails", event.target.value)}
          className="w-full resize-y rounded-2xl border-2 border-gray-200 bg-white p-4 text-gray-900 outline-none transition-colors focus:border-[#27255f]"
        />
      </label>

      <Button type="submit" size="lg" className="w-full sm:w-auto">
        Submit
        <ArrowUpRight className="ml-2 h-5 w-5" />
      </Button>
      <p className="text-sm text-gray-500">
        Your application will open in WhatsApp for you to review and send to +233 24 993 9025.
      </p>
    </form>
  );
}
