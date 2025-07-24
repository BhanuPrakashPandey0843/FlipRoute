import React from 'react';
import { useNavigate } from 'react-router-dom';

// Ambulance card component
const AmbulanceCard = ({ ambulance }) => {
  const navigate = useNavigate();

  // Navigate to details page
  const handleClick = () => {
    navigate(`/ambulance/${ambulance.id}`);
    
  };

  return (
    <div
      className="bg-white p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 cursor-pointer"
      onClick={handleClick}
    >
      <div className="relative">
        <img className="w-full h-40 object-cover rounded-lg" src={ambulance.image} alt={ambulance.title} />
        <p className="absolute top-2 right-2 bg-indigo-600 text-white text-sm font-semibold py-1 px-3 rounded-lg">
          {ambulance.price ? `$${ambulance.price}` : 'FREE'}
        </p>
      </div>
      <h3 className="mt-4 text-lg font-semibold text-indigo-600">{ambulance.level}</h3>
      <h1 className="mt-2 text-xl font-bold text-gray-800">{ambulance.title}</h1>
      <div className="mt-4 space-y-2">
        <div className="flex items-center text-gray-600">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p>{ambulance.duration}</p>
        </div>
        <div className="flex items-center text-gray-600">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <p>{ambulance.parts} Parts</p>
        </div>
      </div>
      <button className="mt-4 w-full bg-customTeal text-white py-2 rounded-lg shadow-md hover:bg-customTeal focus:outline-none focus:ring-2 focus:ring-indigo-500">
        View Details
      </button>
    </div>
  );
};

// Ambulance List component
const AmbulanceList = () => {
  const navigate = useNavigate();
  const ambulances = [
    {
      id: 1,
      level: 'Beginner Friendly',
      image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      title: 'Ambulance Service 1',
      duration: '1:34:23 Minutes',
      parts: '3 Parts',
      price: 'FREE',
    },
    {
      id: 2,
      level: 'Intermediate',
      image: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80',
      title: 'Ambulance Service 2',
      duration: '2:15:42 Minutes',
      parts: '5 Parts',
      price: 12,
    },
    {
      id: 3,
      level: 'Advanced',
      image: 'https://images.unsplash.com/photo-1561835491-ed2567d96913?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80',
      title: 'Ambulance Service 3',
      duration: '1:45:12 Minutes',
      parts: '4 Parts',
      price: 50,
    },
    {
      id: 4,
      level: 'Intermediate',
      image: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80',
      title: 'Ambulance Service 4',
      duration: '2:15:42 Minutes',
      parts: '5 Parts',
      price: 20,
    },
    {
      id: 5,
      level: 'Beginner Friendly',
      image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      title: 'Ambulance Service 1',
      duration: '1:34:23 Minutes',
      parts: '3 Parts',
      price: 'FREE',
    },
    {
      id: 6,
      level: 'Intermediate',
      image: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80',
      title: 'Ambulance Service 2',
      duration: '2:15:42 Minutes',
      parts: '5 Parts',
      price: 12,
    },
    {
      id: 7,
      level: 'Advanced',
      image: 'https://images.unsplash.com/photo-1561835491-ed2567d96913?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80',
      title: 'Ambulance Service 3',
      duration: '1:45:12 Minutes',
      parts: '4 Parts',
      price: 50,
    },
    {
      id: 8,
      level: 'Intermediate',
      image: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80',
      title: 'Ambulance Service 4',
      duration: '2:15:42 Minutes',
      parts: '5 Parts',
      price: 20,
    },
  ];

  // Navigate to all ambulances page
  const handleLoadMore = () => {
    navigate('/all-ambulances');
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Available Ambulance Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {ambulances.map((ambulance) => (
          <AmbulanceCard key={ambulance.id} ambulance={ambulance} />
        ))}
      </div>
      {/* Load More Button */}
      <div className="mt-8 text-center">
        <button
          onClick={handleLoadMore}
          className="bg-customTeal text-white py-3 px-8 rounded-lg shadow-md hover:bg-customTeal focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          Load More Ambulances
        </button>
      </div>
    </div>
  );
};

export default AmbulanceList;
