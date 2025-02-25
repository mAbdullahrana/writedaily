"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Is WriteDaily completely free?",
    answer:
      "Yes! WriteDaily is 100% free with no hidden costs. Start writing today with daily prompts, AI suggestions, and more!",
  },
  {
    question: "Do I need an account to use WriteDaily?",
    answer:
      "Yes, you need to create an account to use WriteDaily. This allows you to track your progress, maintain streaks, access analytics, and receive personalized writing suggestions.",
  },
  {
    question: "How does streak tracking work?",
    answer:
      "WriteDaily tracks your writing streaks automatically. The more consistently you write, the longer your streak grows!",
  },
  {
    question: "Can I get AI-powered topic suggestions?",
    answer:
      "Yes! If you ask, our AI can suggest topics based on your interests to spark creativity and keep you writing daily.",
  },
  {
    question: "Does WriteDaily work on mobile?",
    answer:
      "Currently, WriteDaily is not fully responsive, but we are actively working on optimizing it for all devices.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12">
          FAQs
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-lightgray rounded-lg bg-dark p-4 sm:p-5 cursor-pointer transition-colors hover:border-primaryButton"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-base md:text-lg font-medium">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`w-6 h-6 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180 text-primaryButton" : ""
                  }`}
                />
              </div>
              {openIndex === index && (
                <p className="mt-3 text-sm md:text-base text-mediumDark transition-all duration-300">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
