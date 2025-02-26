import CTA from "./_components/_landingPage/CTA";
import FAQ from "./_components/_landingPage/FAQ";
import Features from "./_components/_landingPage/Features";
import Footer from "./_components/_landingPage/Footer";
import Hero from "./_components/_landingPage/Hero";

export const metadata = {
  title: "DailyWrite",
  description: "Build Your Daily writing habbit with DailyWrite",
};
export default function Landing() {
  return (
    <div className=" bg-black w-full text-white min-h-screen">
      <Hero />

      <Features />

      <CTA />

      <FAQ />

      <Footer />
    </div>
  );
}
