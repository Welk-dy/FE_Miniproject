import Image from 'next/image';

export default function HowService() {

  return (
    <div className="flex flex-col border-2">
        <div className='flex justify-center text-2xl md:text-4xl font-semibold'>
            Our Customers
        </div>
        <div className='flex justify-center text-2xl md:text-4xl font-semibold'>
            are our biggest fans
        </div>
        <div className='flex justify-center text-2xl md:text-4xl font-semibold'>
            <Image
                src="/cbn.png"
                width={200}
                height={200}
                className=""
                alt="cbn"
            />
        </div>
    </div>
  );
};