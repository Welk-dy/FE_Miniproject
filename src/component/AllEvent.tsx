'use client'

import UseTestimony from '@/hooks/UseTestimony';
import { Member } from '@/types/Member';

const AllEvent: React.FC = () => {
  const { members, loading } = UseTestimony();
  if (loading) return <p>Loading...</p>;
  
  return (
    <div className="flex flex-col items-center md:pt-10 gap-6">
      <div className='text-2xl md:text-4xl font-semibold'>
        Popular Events
      </div>
      <div className="flex flex-wrap justify-center gap-4 md:gap-8">
        {members.map((member: Member, index: number) => (
          <div key={index} className="flex flex-col items-center bg-white p-4 rounded-lg shadow-xl w-72">
              <img
                  src={member.picture.large}
                  alt={`${member.name.first} ${member.name.last}`}
                  className="rounded-full w-32 h-32 mb-4"
              />
              <h3 className="text-lg font-semibold">{member.name.first} {member.name.last}</h3>
              <p className="text-gray-500 justify-center">{index === 0 ? 'Twiscode is user-friendly!' : index === 1 ? 'Exceeded our expectations!' : 'Responsive & innovative!'}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllEvent;