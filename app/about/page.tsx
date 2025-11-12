import Link from "next/link";

const AboutPage = () => {
  return (
    <div className="font-sans bg-gray-100 text-gray-800">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-16 px-8 bg-gray-100">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-slate-400 via-blue-300 to-slate-400 bg-clip-text text-transparent">
          About LunaRest
        </h1>
        <p className="text-lg md:text-xl bg-gradient-to-r from-slate-400 via-blue-300 to-slate-400 bg-clip-text text-transparent">
          Your ultimate companion for tracking sleep and improving your health.
        </p>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-8 bg-white">
        <h2 className="text-3xl font-bold text-center mb-8">Our Mission</h2>
        <p className="text-gray-600 max-w-3xl mx-auto text-center">
          We care about your sleep, and we believe understanding your sleep is
          the first step to feeling better. LunaRest helps you learn your
          personal patterns, prioritize health, and embrace small, positive
          changes for a more energetic, balanced life.
        </p>
      </section>

      {/* Features Section */}
      <section className="py-16 px-8 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-8">
          Why Choose LunaRest?
        </h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-md shadow">
            <h3 className="text-xl font-bold mb-2">Personalized Insights</h3>
            <p className="text-gray-600">
              LunaRest turns raw sleep data into clear, actionable suggestions
              tailored to your habits so you can improve rest effectively.
            </p>
          </div>
          <div className="bg-white p-6 rounded-md shadow">
            <h3 className="text-xl font-bold mb-2">Easy Daily Tracking</h3>
            <p className="text-gray-600">
              Quick, intuitive tracking makes it simple to build a consistent
              sleep log without extra effort—so improvements are easier to
              achieve and sustain.
            </p>
          </div>
          <div className="bg-white p-6 rounded-md shadow">
            <h3 className="text-xl font-bold mb-2">Data You Can Trust</h3>
            <p className="text-gray-600">
              Reliable summaries and exportable reports help you and your
              healthcare providers make informed decisions about sleep and
              wellbeing.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 px-8 bg-white">
        <h2 className="text-3xl font-bold text-center mb-8">Our Story</h2>
        <p className="text-gray-600 max-w-3xl mx-auto text-center">
          At LunaRest, our journey began with a heartfelt wish—for everyone to
          experience nights filled with peaceful sleep and mornings greeted with
          renewed energy. We weave together the science of sleep and gentle
          design, helping you understand your rest and wake up feeling
          refreshed, day after day.
        </p>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 px-8 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-slate-400 via-blue-300 to-slate-400 bg-clip-text text-transparent">
          Ready to Sleep Better?
        </h2>
        <p className="text-lg mb-6 bg-gradient-to-r from-slate-400 via-blue-300 to-slate-400 bg-clip-text text-transparent">
          Join LunaRest today and take the first step towards better sleep and a
          healthier life.
        </p>
        <Link
          href="/sign-up"
          className="inline-block bg-white text-blue-300 hover:text-blue-400 px-6 py-3 rounded-md font-medium shadow-md transition"
        >
          Get Started
        </Link>
      </section>
    </div>
  );
};

export default AboutPage;
