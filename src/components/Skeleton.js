import React from 'react';

export default function Skeleton() {
  return (
    <div className="w-60 h-24 border-2 rounded-md mx-auto mt-20">
      <div className="flex animate-pulse flex-row items-center h-full justify-center space-x-5">
        <div className="w-12 bg-gray-300 h-12 rounded-full " />
        <div className="flex flex-col space-y-3">
          <div className="w-36 bg-gray-300 h-6 rounded-md " />
          <div className="w-24 bg-gray-300 h-6 rounded-md " />
        </div>
      </div>
    </div>
  );
}
