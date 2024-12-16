export default function Popular() {
  return (
    <div className="flex flex-col bg-[#EDEDED] py-10 px-8">
      <div className="flex text-[#D6AD61] self-center text-2xl pb-10 md:text-4xl font-bold">Popular Events</div>
      <input
        type="text"
        placeholder="Search by..."
        className="p-2 border self-center w-1/4 border-gray-300 rounded-md"
      />
    </div> 
  );  
}