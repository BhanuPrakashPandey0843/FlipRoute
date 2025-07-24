import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// Image imports or paths
import generalPhysicianImage from '../assets/generalPhysician.png';
import ophthalmologistImage from '../assets/ophthalmologist.png';
import dermatologistImage from '../assets/dermatologist.png';
import pediatricianImage from '../assets/pediatrician.png';


const SpecialitySelection = () => {
  const specialities = [
    {
      name: 'Basic Life Support Ambulance',
      img: generalPhysicianImage,
      route: '/general-physician',
    },
    {
      name: 'Air Ambulance',
      img: ophthalmologistImage,
      route: '/ophthalmologist',
    },
    {
      name: 'Boat Ambulance',
      img: dermatologistImage,
      route: '/dermatologist',
    },
    {
      name: 'Intensive Care Unit (ICU) Ambulance',
      img: pediatricianImage,
      route: '/pediatrician',
    },
   
  ];

  return (
    <div className="flex flex-col items-center p-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-10 animate-fadeInDown">Find by Speciality</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 animate-fadeInUp">
        {specialities.map((speciality) => (
          <Link
            to={speciality.route}
            key={speciality.name}
            className="flex flex-col items-center transition-transform duration-300 hover:scale-110 group"
          >
            <div className="relative w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden shadow-xl transform group-hover:rotate-12 transition-transform duration-300 ease-in-out">
              <img
                src={speciality.img}
                alt={speciality.name}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="mt-4 text-center font-medium text-lg text-gray-700 group-hover:text-indigo-600 transition-colors duration-300">
              {speciality.name}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

// PropTypes for maintainability
SpecialitySelection.propTypes = {
  specialities: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      route: PropTypes.string.isRequired,
    })
  ),
};

export default SpecialitySelection;


