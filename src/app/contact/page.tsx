import Header from "@/components/Header";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Image from "next/image";

export const metadata = {
  title: "Contact Us",
  description: "Get in touch with GrowthPlatform. Our team of growth experts is ready to help accelerate your digital marketing efforts.",
};

export default function ContactPage() {
  return (
    <main id="main-content">
      <Header />
      <ContactSection />
      <Footer />
    </main>
  );
}
