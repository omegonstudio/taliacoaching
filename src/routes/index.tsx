import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { Coaching } from "@/components/landing/Coaching";
import { About } from "@/components/landing/About";
import { Ebook } from "@/components/landing/Ebook";
import { Contact } from "@/components/landing/Contact";
import { Footer } from "@/components/landing/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Talia Alles · Hábitos saludables que podés sostener" },
      {
        name: "description",
        content:
          "eBook de Talia Alles, Health Coach. Aprendé a comprender tus hábitos y construir cambios sostenibles desde la conciencia, no desde la exigencia.",
      },
      { property: "og:title", content: "Talia Alles · Hábitos que se sostienen" },
      {
        property: "og:description",
        content:
          "Una guía práctica para transformar tu bienestar con hábitos sostenibles y conscientes.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Book",
          name: "Hábitos que se sostienen",
          author: { "@type": "Person", name: "Talia Alles", jobTitle: "Health Coach" },
          bookFormat: "https://schema.org/EBook",
          inLanguage: "es",
          about: "Hábitos saludables y sostenibles, bienestar y cambio de comportamiento",
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Coaching />
        <About />
        <Ebook />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
