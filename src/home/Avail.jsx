// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import Button from '../components/Button';

// const Avail = () => {
//   const [avail, setAvail] = useState('');
//   const [filteredDoctors, setFilteredDoctors] = useState([]);


//   const handleSearch = (e) => {
//     const avail = toLowerCase();
//     setAvail(avail);


//   const filteredDoctors = doctors.filter((doctors) => {
//           return(
//             doctor.name.toLowercase().includes(avail) || professional.title.toLowerCase().includes(avail)
//           );
//     });

//     setFilteredDoctors(filteredDoctors);
//   };

//   const displayedDoctors = avail ? filteredDoctors : doctors;

//   const doctors = [
//     {id:1, image: "", name:"Michael Brown",  title: "Specialty Doctor"},


//     {id: 2, image: "", name:"Glory George",  title: "Medical Doctor"}
//   ]



  
//   return (
//     <div className="flex items-center mb-4">
//       <Link>
//       <input
//         type="search"
//         value={avail}
//         onChange={handleSearch}
//         placeholder="Search available doctor"
//         className="py-2 px-4 border border-gray-400 rounded"
//       />
//       </Link>

//       {filteredDoctors.map((doctor) => (
//         <div key={doctor.id}>
//           <img src={doctor.id} alt={doctor.name} />
//           <h3>{doctor.name}</h3>
//           <p>{doctor.title}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Avail;






import React, { useState } from 'react';

const Avail = () => {
  const [avail, setAvail] = useState('');
  const [filteredDoctors, setFilteredDoctors] = useState([]);

  const doctors = [
    { id: 1, image: "", name: "Michael Brown", title: "Specialty Doctor" },
    { id: 2, image: "", name: "Glory George", title: "Medical Doctor" }
  ];

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setAvail(value);

    const filtered = doctors.filter((doctor) => {
      return (
        doctor.name.toLowerCase().includes(value) ||
        doctor.title.toLowerCase().includes(value)
      );
    });

    setFilteredDoctors(filtered);
  };

  const displayedDoctors = avail ? filteredDoctors : doctors;

  return (
    <div className="p-6">
      <input
        type="search"
        value={avail}
        onChange={handleSearch}
        placeholder="Search available doctor"
        className="py-2 px-4 border border-gray-400 rounded w-full mb-4"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {displayedDoctors.map((doctor) => (
          <div
            key={doctor.id}
            className="border p-4 rounded shadow-sm hover:shadow-md transition"
          >
            <img
              src={doctor.image || "https://via.placeholder.com/100"}
              alt={doctor.name}
              className="w-24 h-24 rounded-full mb-2"
            />
            <h3 className="text-lg font-bold">{doctor.name}</h3>
            <p className="text-gray-600">{doctor.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Avail;

