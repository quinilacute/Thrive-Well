// import React, { useState } from "react";
// import Button from "../components/Button";






// const Support = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [phone, setPhone] = useState('');
//   const [donation, setDonation] = useState('');
//   const [mes, setMes] = useState('');
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState(false);
//   const [loading, setLoading] = useState(false);

//   const handleContact = (e) => {
//     e.preventDefault();

//     if (!name || !email || !phone || !donation || !mes) {
//       setError("Please fill in all the fields");
//       setSuccess(false);
//       return;
//     }

//     if (isNaN(donation) || Number(donation) <= 0) {
//       setError("Please enter a valid donation amount.");
//       setSuccess(false);
//       return;
//     }

//     setLoading(true);
//     setTimeout(() => {
//       setLoading(false);
//       setSuccess(true);
//       setError(""); // ✅ clear error after success
//       setName("");
//       setEmail("");
//       setPhone("");
//       setDonation("");
//       setMes("");
//     }, 2000);
//   };






//   const details = [
//     {
//           id: 1, image: "", name: "phone", description: "+234-8011135610"
//     },
  
  
//     {
//       id: 2, image: "", name: "email", description: "info@Thrivewell.io"
//   },
  
  
//   {
//     id: 3, image: "", name: "website", description: "www.thrivewell.com"
//   },
  
  
//   {
//     id: 4, image: "", name: "address", description: "99 Freedom way, Lekki- Lagos"
//   }
//   ]

//   return (
//     <div>
//       <div>
//         <hr />
//         <p>Let's Help</p>
//       </div>

//       <div>
//         <h2>Support ThriveWell: Transform Lives Through Healthcare Donations</h2>
//         <p>
//           At Thrive Well, we believe that access to quality healthcare is a fundamental
//           right, not a privilege. Every day, countless individuals struggle to afford
//           life-saving treatments, essential medications, and basic medical care.
//           With your support, we can bridge this gap and bring hope to those in need.
//         </p>
//       </div>

//       <div>
//         {details.map((detail) => (
//                <div key={detail.id}>
//                <img src={detail.image} alt="image" />
//                <h3>{detail.name}</h3>
//                <p>{detail.description}</p>
//              </div>
//         ))}
//       </div>

//       <div>
//         <form onSubmit={handleContact} className="flex flex-col gap-4">
//           <input
//             id="name"
//             onChange={(e) => setName(e.target.value)}
//             value={name}
//             placeholder="Name:"
//             className="p-2 border rounded"
//             required
//           />

//           <input
//             id="email"
//             onChange={(e) => setEmail(e.target.value)}
//             value={email}
//             placeholder="Email:"
//             className="p-2 border rounded"
//             required
//           />

//           <input
//             id="phone"
//             onChange={(e) => setPhone(e.target.value)}
//             value={phone}
//             placeholder="Phone No:"
//             className="p-2 border rounded"
//             required
//           />

//           <input
//             id="donation"
//             onChange={(e) => setDonation(e.target.value)}
//             value={donation}
//             placeholder="Donation Amount:"
//             className="p-2 border rounded"
//             required
//           />

//           <textarea
//             id="message"
//             onChange={(e) => setMes(e.target.value)}
//             value={mes}
//             placeholder="Message:"
//             cols={20}
//             rows={5}
//             className="p-2 border rounded"
//             required
//           />

//           <Button type="submit">DONATE HERE</Button>
//           {loading && <p className="text-blue-500">Submitting...</p>}
//           {error && <p className="text-red-500">{error}</p>}
//           {success && <p className="text-green-600">Thank you for your support!</p>}
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Support;





import React, { useState } from "react";
import Button from "../components/Button";

const Support = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [donation, setDonation] = useState('');
  const [mes, setMes] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleContact = (e) => {
    e.preventDefault();

    if (!name || !email || !phone || !donation || !mes) {
      setError("Please fill in all the fields");
      setSuccess(false);
      return;
    }

    if (isNaN(donation) || Number(donation) <= 0) {
      setError("Please enter a valid donation amount.");
      setSuccess(false);
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setError(""); // ✅ clear error after success
      setName("");
      setEmail("");
      setPhone("");
      setDonation("");
      setMes("");
    }, 2000);
  };

  const details = [
    { id: 1, name: "phone", description: "+234-8011135610" },
    { id: 2, name: "email", description: "info@Thrivewell.io" },
    { id: 3, name: "website", description: "www.thrivewell.com" },
    { id: 4, name: "address", description: "99 Freedom way, Lekki- Lagos" }
  ];

  return (
    <div>
      <div>
        <hr />
        <p>Let's Help</p>
      </div>

      <div>
        <h2>Support ThriveWell: Transform Lives Through Healthcare Donations</h2>
        <p>
          At Thrive Well, we believe that access to quality healthcare is a fundamental
          right, not a privilege. Every day, countless individuals struggle to afford
          life-saving treatments, essential medications, and basic medical care.
          With your support, we can bridge this gap and bring hope to those in need.
        </p>
      </div>

      <div>
        {details.map(({ id, name, description }) => (
          <div key={id}>
            <h3>{name}</h3>
            <p>{description}</p>
          </div>
        ))}
      </div>

      <div>
        <form onSubmit={handleContact} className="flex flex-col gap-4">
          <input
            id="name"
            onChange={(e) => setName(e.target.value)}
            value={name}
            placeholder="Name:"
            className="p-2 border rounded"
            required
          />

          <input
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="Email:"
            className="p-2 border rounded"
            required
          />

          <input
            id="phone"
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
            placeholder="Phone No:"
            className="p-2 border rounded"
            required
          />

          <input
            id="donation"
            onChange={(e) => setDonation(e.target.value)}
            value={donation}
            placeholder="Donation Amount:"
            className="p-2 border rounded"
            required
          />

          <textarea
            id="message"
            onChange={(e) => setMes(e.target.value)}
            value={mes}
            placeholder="Message:"
            cols={20}
            rows={5}
            className="p-2 border rounded"
            required
          />

          <Button type="submit" disabled={loading}>DONATE HERE</Button>
          {loading && <p className="text-blue-500">Submitting...</p>}
          {error && <p className="text-red-500">{error}</p>}
          {success && <p className="text-green-600">Thank you for your support!</p>}
        </form>
      </div>
    </div>
  );
};

export default Support;

