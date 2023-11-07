'use client';

import { BounceLoader } from 'react-spinners';

const Loader = () => {
  return (
    <div className="flex h-[70vh] flex-col items-center justify-center">
      <BounceLoader size={100} color="#E14E4B" />
    </div>
  );
};

export default Loader;
