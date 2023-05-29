'use client';
import { useEffect } from 'react';
export default function Error({ error, reset }) {
  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <div className="flex-col justify-center item-center pt-10">
      <h4 className="flex justify-center text-3xl">Error fetching data</h4>
      <h5 className="flex justify-center text-2xl py-4">
        {JSON.stringify(error, null, 2)}
      </h5>
    </div>
  );
}
