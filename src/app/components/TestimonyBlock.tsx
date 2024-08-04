import React from 'react';

export interface TestimonyProps {
  name: string;
  testimony: string;
  year: string;
}

const TestimonyBlock: React.FC<TestimonyProps> = ({ name, testimony, year }) => {
  return (
    <div className="w-full h-full flex flex-col rounded-lg border border-gray-300 p-5 pb-3 m-2">
      <p>&quot; {testimony} &quot;</p>
      <div className="mt-auto text-right dp-red leading-tight">
        <h5 className='font-semibold'>{name}</h5>
        <h5>{year}</h5>
      </div>
    </div>
  );
};

export default TestimonyBlock;

