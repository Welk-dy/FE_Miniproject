const VisionMission = () => {
  return (
    <div className="py-10 bg-gray-100 px-8 md:px-0">
      <h2 className="text-3xl font-bold mb-8 text-center">Vision & Mission</h2>
      <div className="max-w-xl mx-auto text-lg space-y-6">
        
        {/* Vision Section */}
        <div>
          <h3 className="font-semibold text-xl mb-2">Vision:</h3>
          <p className="text-gray-700">
            To be a leading provider of innovative digital solutions that empower businesses and enhance user experiences.
          </p>
        </div>

        {/* Mission Section */}
        <div>
          <h3 className="font-semibold text-xl mt-5 mb-2">Mission:</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Deliver high-quality, user-centric digital products.</li>
            <li>Foster a culture of continuous learning and innovation.</li>
            <li>Maintain open communication and collaboration with clients.</li>
            <li>Adapt and evolve with emerging technologies and market trends.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default VisionMission;