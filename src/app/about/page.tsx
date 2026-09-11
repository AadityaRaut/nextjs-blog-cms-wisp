import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { config } from "@/config";
import { signOgImageUrl } from "@/lib/og-image";
import Markdown from "react-markdown";

const content = `# About Me

![Aaditya](https://imagedelivery.net/lLmNeOP7HXG0OqaG97wimw/clvlugru90000o4g8ahxp069s/db7abbe3-aa5c-433e-a16d-cbf137d1c9e5.png/public)

Hey there! I'm Aaditya, an avid traveler and explorer who decided to embark on an adventure of a lifetime. After years of feeling stuck in routine, I realized that life is too short to not experience the incredible beauty this world has to offer.

So I took a leap of faith, packed my bags, and decided to see the world on my own terms – just me, my backpack, and an open road ahead.

![Aaditya](https://imagedelivery.net/lLmNeOP7HXG0OqaG97wimw/clvlugru90000o4g8ahxp069s/6b080e65-2329-4a36-ad5c-0a6af8d9aeb1.png/public)

This blog is where I'll be documenting my travels, sharing my experiences, and hopefully inspiring others to follow their wanderlust. From trekking through remote mountain villages to savoring local cuisines, I'm on a mission to immerse myself in different cultures and create memories that will last a lifetime.

Join me on this adventure, and let's explore the world together!

Let's go on an adventure!

Warmly,

Aaditya`;

export async function generateMetadata() {
  return {
    title: "About Me",
    description: "Learn more about Aaditya and travel adventures",
    openGraph: {
      title: "About Me",
      description: "Learn more about Aaditya and travel adventures",
      images: [
        signOgImageUrl({
          title: "Aaditya",
          label: "About Me",
          brand: config.blog.name,
        }),
      ],
    },
  };
}

const Page = async () => {
  return (
    <div className="container mx-auto px-5">
      <Header />
      <div className="prose lg:prose-lg dark:prose-invert m-auto mt-20 mb-10 blog-content">
        <Markdown>{content}</Markdown>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
