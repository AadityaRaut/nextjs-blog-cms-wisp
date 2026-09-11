import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { config } from "@/config";
import { signOgImageUrl } from "@/lib/og-image";
import { ContactForm } from "./ContactForm";

export async function generateMetadata() {
  return {
    title: "Contact Us",
    description: "Get in touch with Aaditya Travels and Aaditya Corporation",
    openGraph: {
      title: "Contact Us",
      description: "Get in touch with Aaditya Travels and Aaditya Corporation",
      images: [
        signOgImageUrl({
          title: "Contact Us",
          label: "Contact",
          brand: config.blog.name,
        }),
      ],
    },
  };
}

const ContactPage = () => {
  return (
    <div className="container mx-auto px-5">
      <Header />
      <div className="max-w-5xl mx-auto my-12">
        <div className="mb-10 text-center sm:text-left">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-3">
            Contact Us
          </h1>
          <p className="text-muted-foreground text-base md:text-lg">
            Connect with Aaditya Travels for collaborations, travel advice, or general inquiries.
          </p>
        </div>
        <ContactForm />
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
