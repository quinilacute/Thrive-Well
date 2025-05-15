import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi'; // ✅ Import search icon
import first from '../assets/images/firstbg.png';

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
    const filtered = doctors.filter((doctor) =>
      doctor.name.toLowerCase().includes(value) ||
      doctor.title.toLowerCase().includes(value)
    );
    setFilteredDoctors(filtered);
  };

  const displayedDoctors = avail ? filteredDoctors : doctors;

  return (
    <div
      className="bg-cover bg-no-repeat bg-center h-screen flex items-center justify-center px-4"
      style={{ backgroundImage: `url(${first})` }}
    >
      <div className="bg-white/90 rounded-lg shadow-lg p-6 w-full max-w-xl">
        <h2 className="text-2xl font-bold text-center mb-6">Available Doctors</h2>

        {/* Search Input */}
        <div className="flex items-center border border-gray-400 rounded mb-6 px-3 py-2 bg-white">
          <FiSearch className="text-gray-500 mr-2" />
          <input
            type="search"
            value={avail}
            onChange={handleSearch}
            placeholder="Search available doctor"
            className="outline-none w-full text-sm"
          />
        </div>

        {/* Doctors List */}
        <div className="space-y-4">
          {displayedDoctors.length > 0 ? (
            displayedDoctors.map((doctor) => (
              <div key={doctor.id} className="flex items-center space-x-4 border-b pb-4">
                <img
                  src={doctor.image || "https://via.placeholder.com/100"}
                  alt={doctor.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-lg font-semibold">{doctor.name}</h3>
                  <p className="text-gray-600 text-sm">{doctor.title}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-sm text-center">No matching doctors found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Avail;
