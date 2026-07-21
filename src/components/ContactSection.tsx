"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { MapPin, Mail, Phone, Clock, Send, Check } from "lucide-react";
import { useLiveSettings } from "@/data/live-client";
import { getAdminFirestore } from "@/lib/firebase";
import { doc, getDoc, setDoc, serverTimestamp } from "firebase/firestore";


const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  company: z.string().min(2, "Company is required"),
  phone: z.string().optional(),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactForm = z.infer<typeof contactSchema>;

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const settings = useLiveSettings({
    contactPage: {
      heading: "Let's Build Your Growth Engine",
      subheading: "Our team of growth experts is ready to help accelerate your digital marketing efforts.",
      address: "100 Market Street, Suite 400<br />San Francisco, CA 94105",
      email: "hello@growthplatform.com<br />support@growthplatform.com",
      phone: "+1 (555) 123-4567<br />Mon-Fri, 9am-6pm PST",
      hours: "Monday - Friday: 9:00 AM - 6:00 PM<br />Saturday - Sunday: Closed",
      successHeading: "Message Sent!",
      successDescription: "Thanks for reaching out. Our team will get back to you within 24 hours.",
      services: [
        "SEO Optimization",
        "Google Ads",
        "Meta Ads",
        "Affiliate Marketing",
        "Performance Marketing",
        "Social Media Marketing",
        "Email Marketing",
        "Web Development",
        "Marketing Automation",
        "AI Marketing Solutions",
        "Other",
      ],
    },
  });
  const cp = settings.contactPage || {};
  const services = cp.services || [
    "SEO Optimization",
    "Google Ads",
    "Meta Ads",
    "Affiliate Marketing",
    "Performance Marketing",
    "Social Media Marketing",
    "Email Marketing",
    "Web Development",
    "Marketing Automation",
    "AI Marketing Solutions",
    "Other",
  ];

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactForm) => {
    try {
      const db = getAdminFirestore();
      const submissionsRef = doc(db, "projects", "smartlucky", "contact", "submissions");
      const currentSnap = await getDoc(submissionsRef);
      const currentItems = currentSnap.exists() ? (currentSnap.data().items as unknown[] || []) : [];
      const newItem = {
        id: `sub_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`,
        name: data.name,
        email: data.email,
        company: data.company,
        phone: data.phone,
        service: data.service,
        message: data.message,
        submittedAt: new Date().toISOString(),
      };
      await setDoc(submissionsRef, { items: [newItem, ...currentItems], updatedAt: serverTimestamp() }, { merge: true });
      setSubmitted(true);
    } catch (err) {
      console.error("Failed to save submission:", err);
      alert("Failed to send message. Please try again.");
    }
  };

  return (
    <section className="py-16 md:py-24 bg-white" aria-label="Contact us">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left - Info */}
          <div>
<span className="inline-block text-xs font-semibold text-primary uppercase tracking-widest mb-3">
            Contact
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-4">
            {cp.heading || "Let's Build Your Growth Engine"}
          </h2>
          <p className="text-gray-600 mb-8">
            {cp.subheading || "Ready to scale your business? Our team of growth experts is here to help. Reach out and let's discuss how we can accelerate your digital marketing efforts."}
          </p>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Office Address</h3>
                  <p className="text-sm text-gray-500" dangerouslySetInnerHTML={{ __html: cp.address || "100 Market Street, Suite 400<br />San Francisco, CA 94105" }} />
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Email</h3>
                  <p className="text-sm text-gray-500" dangerouslySetInnerHTML={{ __html: cp.email || "hello@growthplatform.com<br />support@growthplatform.com" }} />
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Phone</h3>
                  <p className="text-sm text-gray-500" dangerouslySetInnerHTML={{ __html: cp.phone || "+1 (555) 123-4567<br />Mon-Fri, 9am-6pm PST" }} />
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Working Hours</h3>
                  <p className="text-sm text-gray-500" dangerouslySetInnerHTML={{ __html: cp.hours || "Monday - Friday: 9:00 AM - 6:00 PM<br />Saturday - Sunday: Closed" }} />
                </div>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div>
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex items-center justify-center"
              >
                <div className="text-center bg-gray-50 rounded-2xl p-12">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {cp.successHeading || "Message Sent!"}
                  </h3>
                  <p className="text-gray-500">
                    {cp.successDescription || "We'll get back to you within 24 hours."}
                  </p>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="bg-gray-50 rounded-2xl p-6 md:p-8 space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Full Name *
                    </label>
                    <input
                      {...register("name")}
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      placeholder="John Doe"
                    />
                    {errors.name && (
                      <p className="text-xs text-red-500 mt-1">{errors.name.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Email *
                    </label>
                    <input
                      {...register("email")}
                      type="email"
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      placeholder="john@company.com"
                    />
                    {errors.email && (
                      <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Company *
                    </label>
                    <input
                      {...register("company")}
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      placeholder="Your Company"
                    />
                    {errors.company && (
                      <p className="text-xs text-red-500 mt-1">{errors.company.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Phone
                    </label>
                    <input
                      {...register("phone")}
                      type="tel"
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Service Interested In *
                  </label>
                  <select
                    {...register("service")}
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all appearance-none"
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                  {errors.service && (
                    <p className="text-xs text-red-500 mt-1">{errors.service.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Message *
                  </label>
                  <textarea
                    {...register("message")}
                    rows={4}
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
                    placeholder="Tell us about your project and goals..."
                  />
                  {errors.message && (
                    <p className="text-xs text-red-500 mt-1">{errors.message.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-white px-6 py-3.5 rounded-xl font-medium hover:bg-primary-dark transition-all hover:shadow-lg hover:shadow-primary/25 active:scale-95 flex items-center justify-center gap-2"
                >
                  Send Message
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
