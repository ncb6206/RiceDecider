'use client';

import Logo from '@/public/logo.svg';

const ProgressBar = () => {
  const imsi = Number(3);

  return (
    <div className="gap2 flex">
      {Array(5)
        .fill(0)
        .map((_, i) => {
          if (i - imsi < 0) {
            return <Logo key={i} fill="#E14E4B" width="30" height="30" />;
          } else {
            return <Logo key={i} fill="#FACACF" width="30" height="30" />;
          }
        })}
    </div>
  );
};

export default ProgressBar;
