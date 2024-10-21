import { TimelineHistory } from '@/data/timelineHistory';

const History = () => {
  return (
    <div className="pb-10 px-4 md:px-0">
      <h2 className="text-3xl font-bold mb-8 text-center">History of Twiscode</h2>

      <ul className="space-y-6 md:space-y-4 md:space-x-1 md:flex md:justify-center md:items-center md:flex-wrap">
        {TimelineHistory.map((item, index) => (
          <li
            key={index}
            className="flex flex-col md:flex-row md:items-center md:space-x-4 bg-gray-50 rounded-lg p-4 shadow-md w-full md:w-1/2"
          >
            <span className="text-xl font-semibold text-gray-800 mb-2 md:mb-0">{item.year}</span>
            <span className="text-lg text-gray-600">{item.event}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default History;