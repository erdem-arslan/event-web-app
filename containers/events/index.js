"use client"
import React, { useState } from 'react';
import { Card, Filter } from '@/components';
import { Events } from '@/mocks';
import ReactPaginate from 'react-paginate';

function Page() {
    const [currentPage, setCurrentPage] = useState(0);
    const eventsPerPage = 6;
    const pageCount = Math.ceil(Events.length / eventsPerPage);

    function handlePageClick({ selected: selectedPage }) {
        setCurrentPage(selectedPage);
    }

    const selectedEvents = Events.slice(
        currentPage * eventsPerPage,
        (currentPage + 1) * eventsPerPage
    );

    return (
        <main>
            <div className='lg:w-4/5 lg:mx-auto w-full flex flex-col px-1 md:flex-row md:justify-end md:mt-16 mb-20'>
                <div className='md:h-screen md:w-[30%] lg:w-1/5 lg:static'>
                    <div className='my-5 px-2 w-full'>
                        <Filter />
                    </div>
                </div>
                <div className='md:w-[70%] lg:w-4/5'>
                    <div className='w-full flex flex-row flex-wrap'>
                        {selectedEvents.map((event, index) => (
                            <div key={index} className='w-1/2 lg:w-1/3 p-1'>
                                <Card
                                    url={event.url}
                                    image={event.image}
                                    title={event.title}
                                    date={event.date}
                                    description={event.description}
                                    location={event.location}
                                />
                            </div>
                        ))}
                    </div>
                    <div className='flex justify-center mt-5'>
                        <ReactPaginate
                            previousLabel={<span className='bg-gray-200 py-1 px-5 rounded-l-md'>Geri</span>}
                            nextLabel={<span className='bg-gray-200 py-1 px-5 rounded-r-md'>İleri</span>}
                            pageCount={pageCount}
                            onPageChange={handlePageClick}
                            breakClassName={'hidden lg:inline'}

                            containerClassName={'flex items-center'}

                            // previousLinkClassName={'text-black border-2 border-r-0 border-gray-200 bg-red-500'}
                            // nextLinkClassName={'text-black border-2 border-l-0 border-gray-200 bg-white'}

                            disabledClassName={'opacity-50 pointer-events-none'}
                            activeClassName={'bg-blue-200  pointer-events-none'}

                            pageClassName={'bg-white border-2 border-gray-200 text-black mx-2 py-1 px-3 rounded-md'}

                            marginPagesDisplayed={1}
                            pageRangeDisplayed={3}
                        />
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Page;

