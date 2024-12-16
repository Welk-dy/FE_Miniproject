"use client";

import React, { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import useEvents from '@/hooks/useEvents';
import { Event } from '@/models/Parameter';
import { useParams, useRouter } from 'next/navigation';

const AllEvent: React.FC = () => {
  const { eventId }: { eventId: string } = useParams();
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const eventsPerPage = 6;

  const { events, loading, error, totalPages } = useEvents(currentPage, eventsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  useEffect(() => {
    // Perform side effects here if needed
  }, [currentPage]);

  if (loading) {
    return (
      <div className="flex flex-wrap gap-4">
        {Array(eventsPerPage).fill(null).map((_, index) => (
          <Skeleton key={index} height={400} width={300} />
        ))}
      </div>
    );
  }

  if (error) return <p className="text-red-500">Error loading events: {error}</p>;

  return (
    <div className="flex flex-col bg-[#EDEDED] w-screen items-center">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center mb-4">
        {events.map((event: Event, index: number) => (
          <div
            key={index}
            className="flex flex-col bg-white rounded-lg shadow-md md:w-72 lg:w-80 xl:w-96"
          >
            <img
              src={event.imageUrl}
              alt={event.title}
              className="w-full h-40 object-cover rounded-t-lg"
            />
            <div className="p-4 flex flex-col space-y-2">
              <div className="text-xl font-semibold">{event.title}</div>
              <div className="text-gray-500">
                Date: {new Date(event.eventDate).toLocaleDateString()}
              </div>
              <div
                className={`text-sm font-bold ${
                  event.tickets[0]?.availableTicket > 0
                    ? 'text-green-600'
                    : 'text-red-600'
                }`}
              >
                {event.tickets[0]?.availableTicket > 0
                  ? 'Tickets Available'
                  : 'Sold Out'}
              </div>
              <button
                className="mt-2 px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-400 w-1/3"
                onClick={() => router.push(`/${event.eventId}`)} // Updated to use event.id
              >
                Details
              </button>
            </div>
          </div>
        ))}
      </div>
      {/* Pagination Controls */}
      <div className="flex justify-center space-x-4 py-10">
        <button
          className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
          disabled={currentPage === 1}
          onClick={handlePrevPage}
        >
          Previous
        </button>
        <div className="py-2 justify-center">
          Page {currentPage} of {totalPages}
        </div>
        <button
          className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
          disabled={currentPage === totalPages}
          onClick={handleNextPage}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default AllEvent;