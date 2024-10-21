'use client'

import React from 'react';
import { useTestimonial } from '@/hooks/useTestimonial'; // Ensure this matches the hook name
import { testimonialData } from '@/data/testimonialData';

const Testimonial = () => {
  const { users, loading } = useTestimonial();

  if (loading) return <p>Loading...</p>;

  return (
    <div className="flex flex-col md:flex-row gap-4 justify-center md:pb-10 pt-5 pb-10 px-8">
      {users.map((user, index) => (
        <div key={index} className="flex flex-col items-center p-4 border rounded-lg shadow-md">
          <img src={user.picture.medium} alt={`${user.name.first} ${user.name.last}`} className="rounded-full mb-2" />
          <div className="font-bold text-center">{`${user.name.first} ${user.name.last}`}</div>
          <div className='text-center'>{testimonialData[index]}</div>
        </div>
      ))}
    </div>
  );
};

export default Testimonial;