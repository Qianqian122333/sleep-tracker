import { SignInButton } from "@clerk/nextjs";

const Guest = () => {
  return (
    <div className="font-sans bg-gray-100 text-gray-800">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center justify-between p-3 md:p-16 bg-gray-100 pt-20">
        <div className="flex-1 mb-8 xl:pl-10">
          <h1 className="text-2xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-slate-400 via-blue-300 to-slate-400 bg-clip-text text-transparent">
            Welcome to LunaRest
          </h1>
          <p className="md:text-xl mb-6">
            Track your sleep, improve your health, and wake up feeling refreshed
            with LunaRest.
          </p>
          <SignInButton>
            <button className="w-full md:w-auto bg-gradient-to-r from-slate-400 via-blue-300 to-slate-400 hover:from-slate-400 hover:via-blue-300 hover:to-slate-400 text-white px-4 py-2 rounded-md font-medium cursor-pointer">
              Get Started
            </button>
          </SignInButton>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <img
            src="sleep-tracker.png"
            alt="LunaRest Illustration"
            className="w-full md:max-w-md rounded-tl-3xl rounded-br-3xl shadow-lg"
          />
        </div>
      </div>

      {/* Divider */}
      <div className="h-1 bg-gray-300"></div>

      {/* Importance of Tracking Sleep Section */}
      <div className="py-16 px-8 bg-white">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
          The Importance of Tracking Sleep
        </h2>
        <div className="max-w-3xl mx-auto space-y-8">
          <div>
            <h3 className="text-xl font-bold">Understand Your Patterns</h3>
            <p className="text-gray-600">
              Regular tracking reveals your sleep and wake patterns over time,
              helping you identify habits or routines that affect rest.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold">Improve Sleep Quality</h3>
            <p className="text-gray-600">
              By recording sleep data you can test changes—bedtime, caffeine,
              environment—and measure which adjustments lead to better sleep.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold">Support Health Decisions</h3>
            <p className="text-gray-600">
              Accurate sleep records provide valuable evidence for clinicians or
              for making informed lifestyle decisions that improve long-term
              wellbeing.
            </p>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="h-1 bg-gray-300"></div>

      {/* Why Use LunaRest Section */}
      <div className="py-16 px-8 bg-gray-100">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
          Why Use LunaRest
        </h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-md shadow">
            <h3 className="text-lg font-bold mb-2">Personalized Insights</h3>
            <p className="text-gray-700">
              LunaRest turns raw sleep data into clear, actionable suggestions
              tailored to your habits so you can improve rest effectively.
            </p>
          </div>
          <div className="bg-white p-6 rounded-md shadow">
            <h3 className="text-lg font-bold mb-2">Easy Daily Tracking</h3>
            <p className="text-gray-700">
              Quick, intuitive tracking makes it simple to build a consistent
              sleep log without extra effort—so improvements are easier to
              achieve and sustain.
            </p>
          </div>
          <div className="bg-white p-6 rounded-md shadow">
            <h3 className="text-lg font-bold mb-2">Data You Can Trust</h3>
            <p className="text-gray-700">
              Reliable summaries and exportable reports help you and your
              healthcare providers make informed decisions about sleep and
              wellbeing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guest;
