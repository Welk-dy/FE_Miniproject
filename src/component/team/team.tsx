'use client'

import UseTeamMember from '@/hooks/UseTeamMember'; // Ensure this matches your hook filename

const Team: React.FC = () => {
  const { members, loading } = UseTeamMember(); // Use the correct hook name

  if (loading) return <p>Loading...</p>;

  return (
    <div className="flex flex-col items-center md:pt-10 gap-6">
      <div className='text-2xl md:text-4xl font-semibold'>
        Our Team
      </div>
      <div className="flex flex-wrap justify-center gap-4 md:gap-8">
        {members.map((member, index) => (
          <div key={index} className="flex flex-col items-center bg-white p-4 rounded-lg shadow-xl w-72">
            <img
              src={member.picture.large}
              alt={`${member.name.first} ${member.name.last}`}
              className="rounded-full w-32 h-32 mb-4"
            />
            <h3 className="text-lg font-semibold">{member.name.first} {member.name.last}</h3>
            <p className="text-gray-500">{index === 0 ? 'CEO' : index === 1 ? 'CTO' : index === 2 ? 'Product Manager' : 'Marketing Specialist'}</p>
            <p className="text-gray-500">{member.email}</p>
            <p className="text-gray-500">{member.cell}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;