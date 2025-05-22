import React from "react";

const Poly = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-semibold text-center mb-10">Privacy Policy</h1>

      <div className="space-y-10">
        <article className="flex justify-center text-center">
          <h2 className="text-2xl font-bold mb-3">Introduction</h2>
          <p className="leading-relaxed">
            Welcome to ThriveWell. Your privacy is important to us. This policy explains how we collect, use, and protect your personal
            information when you use our website and services.
          </p>
        </article>

        
        <article className="flex justify-center text-center">
          <h3 className="text-xl font-semibold mb-2">Information We Collect</h3>
          <h4 className="font-medium mb-2">We may collect the following types of information:</h4>
          <ul className="list-disc pl-6 space-y-1 leading-relaxed">
            <li>Personal Information: Name, email, phone number, and medical history (if provided).</li>
            <li>Health Data: Blood pressure, blood sugar levels, medication history, and other health-related inputs.</li>
            <li>Device & Usage Information: IP address, browser type, and activity logs for security purposes.</li>
          </ul>
        </article>

       
        <article className="flex justify-center text-center">
          <h3 className="text-xl font-semibold mb-2">How We Use Your Information</h3>
          <h4 className="font-medium mb-2">We use your information to:</h4>
          <ul className="list-disc pl-6 space-y-1 leading-relaxed">
            <li>✅ Provide personalized health recommendations and resources.</li>
            <li>✅ Facilitate virtual consultations and appointment bookings.</li>
            <li>✅ Improve our platform’s functionality and security.</li>
            <li>✅ Communicate updates, alerts, and health tips.</li>
          </ul>
        </article>

       
        <article className="flex justify-center text-center">
          <h3 className="text-xl font-semibold mb-2">Data Protection & Security</h3>
          <ul className="list-disc pl-6 space-y-1 leading-relaxed">
            <li>We implement strict encryption and security measures to protect your data.</li>
            <li>🔒 We do not share your personal information with third parties without your consent, except as required by law.</li>
          </ul>
        </article>

       
        <article className="flex justify-center text-center">
          <h3 className="text-xl font-semibold mb-2">Your Rights & Choices</h3>
          <h4 className="font-medium mb-2">You have the right to:</h4>
          <ul className="list-disc pl-6 space-y-1 leading-relaxed">
            <li>✔️ Access, update, or delete your personal data.</li>
            <li>✔️ Opt-out of non-essential data collection and marketing communications.</li>
            <li>✔️ Request a copy of the information we store about you.</li>
          </ul>
        </article>

    
        <article className="flex justify-center text-center">
          <h3 className="text-xl font-semibold mb-2">Cookies & Tracking</h3>
          <p className="leading-relaxed">
            We use cookies to improve user experience. You can manage cookie settings in your browser.
          </p>
        </article>

     
        <article className="flex justify-center text-center">
          <h3 className="text-xl font-semibold mb-2">Changes to This Policy</h3>
          <p className="leading-relaxed">
            We may update this policy from time to time. We will notify users of significant changes.
          </p>
        </article>

    
        <article className="flex justify-center text-center">
          <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
          <p className="leading-relaxed">
            For questions about this policy, contact us at{" "}
            <a
              href="mailto:support@thrivewell.com"
              className="text-blue-600 underline hover:text-blue-800 transition"
              aria-label="Email support at support@thrivewell.com"
            >
              support@thrivewell.com
            </a>
          </p>
        </article>
      </div>
    </div>
  );
};

export default Poly;
