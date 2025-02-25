import { BarChart, Sparkles, Wand2 } from "lucide-react";

function Features() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 space-y-12">
        <h2 className="text-3xl p-2 sm:text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-primaryButton to-secondaryButton bg-clip-text text-transparent">
          Why Choose WriteDaily?
        </h2>

        {/* Feature 1: Daily Prompts */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 p-6 rounded-lg bg-dark border border-lightgray hover:border-primaryButton transition-colors">
            <Sparkles className="w-12 h-12 text-primaryButton mb-4" />
            <h3 className="text-xl font-semibold mb-2">Daily Prompts</h3>
            <p className="text-mediumDark">
              Get fresh writing prompts every day to spark your creativity and
              keep you motivated.
            </p>
          </div>
          <div className="flex justify-center flex-1">
            <img
              src="/prompts.svg"
              alt="Daily Prompts Illustration"
              className="w-40 h-40 sm:w-56 sm:h-56 md:w-80 md:h-80 object-contain"
            />
          </div>
        </div>

        {/* Feature 2: AI-Powered Topic Suggestions */}
        <div className="flex flex-col-reverse md:flex-row items-center gap-8">
          <div className="flex justify-center flex-1">
            <img
              src="/ai-suggestions.svg"
              alt="AI Suggestions Illustration"
              className="w-40 h-40 sm:w-56 sm:h-56 md:w-80 md:h-80 object-contain"
            />
          </div>
          <div className="flex-1 p-6 rounded-lg bg-dark border border-lightgray hover:border-primaryButton transition-colors">
            <Wand2 className="w-12 h-12 text-primaryButton mb-4" />
            <h3 className="text-xl font-semibold mb-2">
              AI-Powered Topic Suggestions
            </h3>
            <p className="text-mediumDark">
              Get AI-generated topic ideas that align with your interests and
              writing style.
            </p>
          </div>
        </div>

        {/* Feature 3: Custom Analytics */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 p-6 rounded-lg bg-dark border border-lightgray hover:border-primaryButton transition-colors">
            <BarChart className="w-12 h-12 text-primaryButton mb-4" />
            <h3 className="text-xl font-semibold mb-2">Custom Analytics</h3>
            <p className="text-mediumDark">
              Track your word count, writing frequency, and overall progress
              with detailed analytics.
            </p>
          </div>
          <div className="flex justify-center flex-1">
            <img
              src="/analytics.svg"
              alt="Custom Analytics Illustration"
              className="w-40 h-40 sm:w-56 sm:h-56 md:w-80 md:h-80 object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
