import React, { useState, useEffect } from 'react';
import Card from './Card.jsx';

const Toprestraunts = () => {
  const [restaurants, setRestaurants] = useState([]);

  const fetchToprestraunts = async () => {
    const response = await fetch("http://localhost:5000/top-restaurant-chains");
    const data = await response.json();
    setRestaurants(data);
  };

  useEffect(() => {
    fetchToprestraunts();
  }, []);

  return (
    <div id='Online' className='max-w-[1200px] mx-auto my-7'>
      <div className='flex justify-between items-center px-2'>
        <h1 className='text-2xl font-bold'>Online Delivery Restaurant Chains in Mumbai</h1>
      </div>

      {/* Cards Grid */}
      <div id='crd' className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4 px-2'>
        {restaurants.map((rest, index) => (
          <Card key={index} data={rest} />
        ))}
      </div>
    </div>
  );
};

export default Toprestraunts;
