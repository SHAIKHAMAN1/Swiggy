import React, { useState, useEffect, useRef } from 'react';
import { FaArrowLeftLong, FaArrowRight } from "react-icons/fa6";
import Card from './Card.jsx';

const Toprestraunts = () => {
    const [restaurants, setRestaurants] = useState([]);
    const scrollRef = useRef(null);

    const fetchToprestraunts = async () => {
        const response = await fetch("http://localhost:5000/top-restaurant-chains");
        const data = await response.json();
        setRestaurants(data);
    };

    useEffect(() => {
        fetchToprestraunts();
    }, []);

    const scrollLeft = () => {
        scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    };

    const scrollRight = () => {
        scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    };

    return (
        <div id='Top' className='shadow-2xs  max-w-[1200px] mx-auto my-7'>
            <div className='flex justify-between items-center px-2'>
                <h1 className='text-2xl font-bold'>Top Restaurant Chains in Mumbai</h1>
                <div className='flex gap-2'>
                    <button
                        onClick={scrollLeft}
                        className='w-[30px] h-[30px] bg-[#e2e2e7] rounded-full flex justify-center items-center'
                    >
                        <FaArrowLeftLong className='text-lg' />
                    </button>
                    <button
                        onClick={scrollRight}
                        className='w-[30px] h-[30px] bg-[#e2e2e7] rounded-full flex justify-center items-center'
                    >
                        <FaArrowRight className='text-lg' />
                    </button>
                </div>
            </div>

            <div
                ref={scrollRef}
                className='flex gap-4 overflow-hidden mt-4 no-scrollbar px-2'
            >
                {restaurants.map((rest, index) => (
                    <Card key={index} data={rest} />
                ))}
            </div>
        </div>
    );
};

export default Toprestraunts;
