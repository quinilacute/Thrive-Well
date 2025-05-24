import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import first from '../assets/images/firstbg.png';
import MB from "../assets/images/MB.png";
import GG from "../assets/images/GG.png";
const Avail = () => {
  const [avail, setAvail] = useState('');
  const [filteredDoctors, setFilteredDoctors] = useState([]);

  const doctors = [
    { id: 1, image: MB, name: "Michael Brown", title: "Specialty Doctor" },
    { id: 2, image: GG, name: "Glory George", title: "Medical Doctor" }
  ];

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setAvail(value);
    const filtered = doctors.filter((doctor) =>
      doctor.name.toLowerCase().includes(value) ||
      doctor.title.toLowerCase().includes(value)
    );
    setFilteredDoctors(filtered);
  };

  const displayedDoctors = avail ? filteredDoctors : doctors;

  return (
    <div
      className="w-full md:w-1/2 bg-cover bg-no-repeat bg-center flex items-center justify-center px-4 py-9"
      style={{
        backgroundImage: `url(${first})`,
      }}
    >
      <div className="rounded-lg shadow-lg p-6 w-60 max-w-xl bg-white/90 px-14 ">
        <h2 className="text-1xl font-bold text-center mb-6">Available Doctors</h2>

       
       

        
        <div className="space-y-4">
          {displayedDoctors.length > 0 ? (
            displayedDoctors.map((doctor) => (
              <div
                key={doctor.id}
                className="flex items-center space-x-2 border-b border-gray-200 pb-2"
              >
                <img
                  src={doctor.image }
                  alt={doctor.name}
                  className="w-8 h-8 rounded-full object-cover bg-gray-100"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{doctor.name}</h3>
                  <p className="text-gray-600 text-sm">{doctor.title}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-sm text-center">No matching doctors found.</p>
          )}
        </div>


        <div className="flex items-center border border-gray-300 rounded mb-6 px-3 py-2 bg-white shadow-sm">
          <FiSearch className="text-gray-500 mr-2" />
          <input
            type="search"
            value={avail}
            onChange={handleSearch}
            placeholder="Search available doctor"
            className="outline-none w-full text-sm"
          />
        </div>
      </div>
    </div>
  );
};

export default Avail;
