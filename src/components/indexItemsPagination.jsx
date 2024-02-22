import React, { useState } from 'react';
import Men from '../images/men1.png';
import { IoChevronForward, IoChevronBackSharp } from "react-icons/io5";

function IndexItemsPagination() {
    const itemsPerPage = 4; // Change this value based on your desired items per page
    const totalItems = 8;

    const [currentPage, setCurrentPage] = useState(1);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = Items.slice(startIndex, endIndex);

    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    return (
        <div className='items-center justify-center '>

          
          

            <section className='px-3 py-5 lg:px-10 '>
                <div className='itemRow grid lg:grid-cols-4 gap-0 items-center justify-center'>
                    {currentItems.map((item, index) => (
                        <div className='card  rounded shadow-lg w-5/6 h-62 hover:bg-red-400 bg-slate-100 transition duration-300' key={index}>
                            <h2 className='p-5 font-semibold text-xl'>{item.name}</h2>
                            <img className='ml-8' src={item.image} alt={`Men ${index + 1}`} />
                            <div className="button ml-16">
                                <button className='mb-5 ml-6 py-2 px-5 rounded bg-black transition-all duration-200 text-white mt-5'>{item.button}</button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <div className='items-center justify-center flex'>
                 <button className='mb-5 ml-5 py-2 px-4 rounded bg-black transition-all duration-200 text-white mt-5' onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
                 <IoChevronBackSharp/>
            </button>
            <button className='mb-5 ml-5 py-2 px-4 rounded bg-black transition-all duration-200 text-white mt-5' onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
            <IoChevronForward/>
            </button> 
            </div>

        </div>
    );
}

const Items = [
    { name: 'CITIZEN ECO-DRIVE', button: 'shop now', image: Men },
    { name: 'CITIZEN ECO-DRIVE', button: 'shop now', image: Men },
    { name: 'CITIZEN ECO-DRIVE', button: 'shop now', image: Men },
    { name: 'CITIZEN ', button: 'shop now', image: Men},
    { name: 'CITIZEN ECO-DRIVE', button: 'shop now', image: Men },
    { name: 'CITIZEN-DRIVE', button: 'shop now', image: Men },
    { name: 'CITIZEN ECO-DRIVE', button: 'shop now', image: Men },
    { name: 'CITIZEN ', button: 'shop now', image: Men},
];

export default IndexItemsPagination;
