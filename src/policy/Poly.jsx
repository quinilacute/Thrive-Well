// import React from "react";


// const Poly = () => {
//     return(
//         <div>
//             <h2>Privacy Policy</h2>

//             <div>
//                 <div>
//                     <h2>Introduction</h2>
//                     <p>Welcome to ThriveWell. Your privacy is important to us. This policy explains how we collect, use, and protect your personal 
//                     information when you use our website and services.</p>
//                 </div>

//                 <div>
//                     <h3>Information We Collect</h3>
//                     <h4>We may collect the following types of information:</h4>
//                     <ul>
//                         <li>Personal Information: Name, email, phone number, and medical history (if provided).</li>
//                         <li>Health Data: Blood pressure, blood sugar levels, medication history, and other health-related inputs.</li>
//                         <li>Device & Usage Information: IP address, browser type, and activity logs for security purposes.</li>   
//                     </ul>
//                 </div>

//                 <div>
//                 <h3>How We Use Your Information</h3>

//                     <h4>We use your information to:</h4>
//                    <ul>
//                    <li>✅ Provide personalized health recommendations and resources.</li> 
//                     <li>✅ Facilitate virtual consultations and appointment bookings.</li>
//                     <li>✅ Improve our platform’s functionality and security.</li>  
//                     <li>✅ Communicate updates, alerts, and health tips.</li>
//                    </ul>
//                 </div>

//                 <div>
//                     <h3>Data Protection & Security</h3>
//                     <ul>
//                         <li>We implement strict encryption and security measures to protect your data.</li>
//                         <li> 🔒 We do not share your personal information with third parties without your consent,except as required by law.</li>
//                     </ul>
//                 </div>

//                 <div>
//                     <h3>Your Rights & Choices</h3>
//                     <h4>You have the right to: </h4>
//                     <ul>
//                         <li>✔️ Access, update, or delete your personal data.</li>
//                         <li>✔️ Opt-out of non-essential data collection and marketing communications.</li>
//                         <li>✔️ Request a copy of the information we store about you.</li>
//                     </ul>
//                 </div>

//                 <div>
//                     <h3>Cookies & Tracking</h3>
//                     <p>We use cookies to improve user experience. You can manage cookie settings in your browser.</p>
//                 </div>

//                 <div>
//                     <h3>Changes to This Policy</h3>
//                     <p>We may update this policy from time to time. We will notify users of significant changes.</p>
//                 </div>

//                 <div>
//                     <h3>Contact Us</h3>
//                     <p>For questions about this policy, contact us at 
//                     <a href="mailto:support@thrivewell.com" className="text-blue-600 underline">support@thrivewell.com</a>

//                         </p>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Poly;




import React from "react";

const Poly = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-semibold text-center mb-8">Privacy Policy</h1>

      <div className="space-y-8">
        {/* Introduction Section */}
        <section>
          <h2 className="text-2xl font-bold">Introduction</h2>
          <p>
            Welcome to ThriveWell. Your privacy is important to us. This policy explains how we collect, use, and protect your personal
            information when you use our website and services.
          </p>
        </section>

        {/* Information We Collect Section */}
        <section>
          <h3 className="text-xl font-semibold">Information We Collect</h3>
          <h4 className="font-medium">We may collect the following types of information:</h4>
          <ul className="list-disc pl-6">
            <li>Personal Information: Name, email, phone number, and medical history (if provided).</li>
            <li>Health Data: Blood pressure, blood sugar levels, medication history, and other health-related inputs.</li>
            <li>Device & Usage Information: IP address, browser type, and activity logs for security purposes.</li>
          </ul>
        </section>

        {/* How We Use Your Information Section */}
        <section>
          <h3 className="text-xl font-semibold">How We Use Your Information</h3>
          <h4 className="font-medium">We use your information to:</h4>
          <ul className="list-disc pl-6">
            <li>✅ Provide personalized health recommendations and resources.</li>
            <li>✅ Facilitate virtual consultations and appointment bookings.</li>
            <li>✅ Improve our platform’s functionality and security.</li>
            <li>✅ Communicate updates, alerts, and health tips.</li>
          </ul>
        </section>

        {/* Data Protection & Security Section */}
        <section>
          <h3 className="text-xl font-semibold">Data Protection & Security</h3>
          <ul className="list-disc pl-6">
            <li>We implement strict encryption and security measures to protect your data.</li>
            <li>🔒 We do not share your personal information with third parties without your consent, except as required by law.</li>
          </ul>
        </section>

        {/* Your Rights & Choices Section */}
        <section>
          <h3 className="text-xl font-semibold">Your Rights & Choices</h3>
          <h4 className="font-medium">You have the right to:</h4>
          <ul className="list-disc pl-6">
            <li>✔️ Access, update, or delete your personal data.</li>
            <li>✔️ Opt-out of non-essential data collection and marketing communications.</li>
            <li>✔️ Request a copy of the information we store about you.</li>
          </ul>
        </section>

        {/* Cookies & Tracking Section */}
        <section>
          <h3 className="text-xl font-semibold">Cookies & Tracking</h3>
          <p>We use cookies to improve user experience. You can manage cookie settings in your browser.</p>
        </section>

        {/* Changes to This Policy Section */}
        <section>
          <h3 className="text-xl font-semibold">Changes to This Policy</h3>
          <p>We may update this policy from time to time. We will notify users of significant changes.</p>
        </section>

        {/* Contact Us Section */}
        <section>
          <h3 className="text-xl font-semibold">Contact Us</h3>
          <p>
            For questions about this policy, contact us at{" "}
            <a href="mailto:support@thrivewell.com" className="text-blue-600 underline">
              support@thrivewell.com
            </a>
          </p>
        </section>
      </div>
    </div>
  );
};

export default Poly;
