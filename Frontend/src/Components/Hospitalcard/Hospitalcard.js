import React from 'react';
import './Hospitalcard.css'; // Custom styles for 3D effects
import sadarHospitalGif from '../image/Sadar Hospital.gif';
import apollohospitalsgroup from '../image/Apollo Hospitals Group.gif';
import Rajhospital from '../image/Raj Hospital.gif';
import HillViewHospital from '../image/Hill View Hospital.gif';
import BhartiHospital from '../image/Bharti Hospital.gif';
import BhagwanMahavir  from '../image/Bhagwan Mahavir.gif';
import SanjivaniMedicare  from '../image/Sanjivani Medicare.gif';


const HospitalCard = ({ image, name, address, phone, website, mapLink }) => {
  return (
    <div className="group perspective-container">
      <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transform transition-all duration-500 ease-in-out group-hover:rotate-y-6 group-hover:rotate-x-3 group-hover:translate-z-5 overflow-hidden">
        {/* Image Section */}
        <img 
  src={image} 
  alt={name ? `${name} image` : 'Image'} 
  className="w-full h-60 object-cover transform transition-transform duration-500 group-hover:scale-110" 
/>

        {/* Content Section */}
        <div className="p-6">
          {/* Hospital Name */}
          <h3 className="text-2xl font-semibold text-gray-900 mb-3 truncate">{name}</h3>
          
          {/* Address */}
          <p className="text-sm text-gray-500 mb-2">
            <strong className="text-gray-700">Address:</strong> {address}
          </p>
          
          {/* Phone */}
          <p className="text-sm text-gray-500 mb-2">
            <strong className="text-gray-700">Phone:</strong> {phone}
          </p>

          {/* Website */}
          {website && (
            <a
              href={website}
              className="text-blue-600 font-medium underline mb-4 block hover:text-blue-800 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Website
            </a>
          )}

          {/* Button */}
          <a
            href={mapLink}
            className="inline-block w-full text-center bg-gradient-to-r from-customTeal to-customTeal text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:from-customTeal hover:to-customTeal focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on Map
          </a>
        </div>
      </div>
    </div>
  );
};

const HospitalList = () => {
  const hospitals = [
    {
      image: sadarHospitalGif,
      name: 'Sadar Hospital',
      address: 'Main Road, Ranchi',
      phone: '2312618, 2317882',
      website: 'https://sadarhospital.com/',
      mapLink: 'https://maps.app.goo.gl/Mp4b6MAL1vwtkzUu7',
    },
    {
      image: apollohospitalsgroup,
      name: 'Apollo Hospitals Group',
      address: 'Irba, Ranchi',
      phone: '2275717, 2275699, 2275786, 2275899',
      website: 'https://sadarhospital.com/',
      mapLink: 'https://maps.app.goo.gl/Mp4b6MAL1vwtkzUu7',
    },
    {
      image: Rajhospital,
      name: 'Raj Hospital',
      address: 'Mahatma Gandhi Main Rd, Central Mall',
      phone: '2312618, 2317882',
      website: 'https://rajhospitals.com/',
      mapLink: 'https://www.google.com/maps/place/Raj+Hospitals+(Super+Speciality+Hospital+in+the+heart+of+Ranchi+town)/@23.356524,85.322803,12z/data=!4m5!3m4!1s0x0:0xd169ee225be1478!8m2!3d23.3565244!4d85.3228035?hl=en',
    },
    {
      image: HillViewHospital,
      name: 'Hill View Hospital',
      address: 'Hill Road, Ranchi',
      phone: '09431104724',
      website: 'https://hillviewhospital.in/',
      mapLink: 'https://www.google.com/maps/place/Hill+View+Hospital+%26+Research+Center+%7C+Best+Gynecologist,+Orthopedic,+Pediatrician,+General+Surgeon+in+Ranchi/@23.3999436,85.3474446,17z/data=!4m10!1m2!2m1!1shill+view+hospital!3m6!1s0x39f4e145c5dbaf61:0xf0b5df0872611a58!8m2!3d23.3999436!4d85.3519507!15sChJoaWxsIHZpZXcgaG9zcGl0YWxaFCISaGlsbCB2aWV3IGhvc3BpdGFskgEIaG9zcGl0YWzgAQA!16s%2Fg%2F11q21dq0cj?hl=en&entry=ttu&g_ep=EgoyMDI0MDkxMS4wIKXMDSoASAFQAw%3D%3D',
    },
    {
      image: BhartiHospital,
      name: ' Bharati Hospital',
      address: 'Near Kokar Chowk, Hazaribag Road, Kokar',
      phone: '06512544133',
      website: 'https://hillviewhospital.in/',
      mapLink: 'https://www.google.com/maps/place/Bharati+Hospital+Infertility+%26+IVF+Services/@23.3999422,85.3293716,14z/data=!4m10!1m2!2m1!1sBharti+Hospital!3m6!1s0x39f4e369c089237b:0xb45b6e32a41da76!8m2!3d23.376582!4d85.3579276!15sCg9CaGFydGkgSG9zcGl0YWySAQhob3NwaXRhbOABAA!16s%2Fg%2F11fj4y26hn?hl=en&entry=ttu&g_ep=EgoyMDI0MDkxMS4wIKXMDSoASAFQAw%3D%3D',
    },
    {
      image: BhagwanMahavir,
      name: 'Bhagwan Mahavir Medica Superspecialty Hospital',
      address: ' P.H.E.D Colony,Booty More, Road, Bariatu',
      phone: '06516606000',
      website: 'https://www.medicaranchi.in/',
      mapLink: 'https://www.google.com/maps/place/Bhagwan+Mahavir+Medica+Superspecialty+Hospital/@23.3959833,85.3753402,17z/data=!3m1!4b1!4m6!3m5!1s0x39f4e3928cb775b1:0xecefe40334b3e923!8m2!3d23.3959833!4d85.3779205!16s%2Fg%2F11f121y6hg?hl=en&entry=ttu&g_ep=EgoyMDI0MDkxMS4wIKXMDSoASAFQAw%3D%3D',
    },
    {
      image: SanjivaniMedicare,
      name: 'Sanjivani Medicare',
      address: ' Ratu Ranchi',
      phone: '06515507000',
      website: 'https://www.medicaranchi.in/',
      mapLink: 'https://www.google.com/maps/place/Bhagwan+Mahavir+Medica+Superspecialty+Hospital/@23.3959833,85.3753402,17z/data=!3m1!4b1!4m6!3m5!1s0x39f4e3928cb775b1:0xecefe40334b3e923!8m2!3d23.3959833!4d85.3779205!16s%2Fg%2F11f121y6hg?hl=en&entry=ttu&g_ep=EgoyMDI0MDkxMS4wIKXMDSoASAFQAw%3D%3D',
    },
    {
      image: sadarHospitalGif,
      name: 'Sadar Hospital',
      address: 'Main Road, Ranchi',
      phone: '2312618, 2317882',
      website: 'https://sadarhospital.com/',
      mapLink: 'https://maps.app.goo.gl/Mp4b6MAL1vwtkzUu7',
    },
    {
      image: apollohospitalsgroup,
      name: 'Apollo Hospitals Group',
      address: 'Irba, Ranchi',
      phone: '2275717, 2275699, 2275786, 2275899',
      website: 'https://sadarhospital.com/',
      mapLink: 'https://maps.app.goo.gl/Mp4b6MAL1vwtkzUu7',
    },
    {
      image: Rajhospital,
      name: 'Raj Hospital',
      address: 'Mahatma Gandhi Main Rd, Central Mall',
      phone: '2312618, 2317882',
      website: 'https://rajhospitals.com/',
      mapLink: 'https://www.google.com/maps/place/Raj+Hospitals+(Super+Speciality+Hospital+in+the+heart+of+Ranchi+town)/@23.356524,85.322803,12z/data=!4m5!3m4!1s0x0:0xd169ee225be1478!8m2!3d23.3565244!4d85.3228035?hl=en',
    },
    {
      image: HillViewHospital,
      name: 'Hill View Hospital',
      address: 'Hill Road, Ranchi',
      phone: '09431104724',
      website: 'https://hillviewhospital.in/',
      mapLink: 'https://www.google.com/maps/place/Hill+View+Hospital+%26+Research+Center+%7C+Best+Gynecologist,+Orthopedic,+Pediatrician,+General+Surgeon+in+Ranchi/@23.3999436,85.3474446,17z/data=!4m10!1m2!2m1!1shill+view+hospital!3m6!1s0x39f4e145c5dbaf61:0xf0b5df0872611a58!8m2!3d23.3999436!4d85.3519507!15sChJoaWxsIHZpZXcgaG9zcGl0YWxaFCISaGlsbCB2aWV3IGhvc3BpdGFskgEIaG9zcGl0YWzgAQA!16s%2Fg%2F11q21dq0cj?hl=en&entry=ttu&g_ep=EgoyMDI0MDkxMS4wIKXMDSoASAFQAw%3D%3D',
    },
    {
      image: BhartiHospital,
      name: ' Bharati Hospital',
      address: 'Near Kokar Chowk, Hazaribag Road, Kokar',
      phone: '06512544133',
      website: 'https://hillviewhospital.in/',
      mapLink: 'https://www.google.com/maps/place/Bharati+Hospital+Infertility+%26+IVF+Services/@23.3999422,85.3293716,14z/data=!4m10!1m2!2m1!1sBharti+Hospital!3m6!1s0x39f4e369c089237b:0xb45b6e32a41da76!8m2!3d23.376582!4d85.3579276!15sCg9CaGFydGkgSG9zcGl0YWySAQhob3NwaXRhbOABAA!16s%2Fg%2F11fj4y26hn?hl=en&entry=ttu&g_ep=EgoyMDI0MDkxMS4wIKXMDSoASAFQAw%3D%3D',
    },
  ];
  
  return (
    <div className="bg-gray-100 py-12">
      <div className="text-center mb-10">
        <h1 className="font-bold text-4xl text-gray-800">Hospitals Near You</h1>
        <p className="text-gray-500 text-lg mt-2">Find hospitals and view them on Google Maps</p>
      </div>

      <div className="max-w-screen-xl mx-auto px-4 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {hospitals.map((hospital, index) => (
          <HospitalCard
            key={index}
            image={hospital.image}
            name={hospital.name}
            address={hospital.address}
            phone={hospital.phone}
            website={hospital.website}
            mapLink={hospital.mapLink}
          />
        ))}
      </div>
    </div>
  );
};

export default HospitalList;
