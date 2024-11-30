import React from "react";
import Image from "next/image";

interface Sponsor {
  name: string;
  logoUrl: string;
}

const sponsorship: React.FC<Sponsor> = ({ name, logoUrl }) => {
  return (
    <div className="flex h-[150px] w-[150px] p-4 justify-center items-center">
      <div className="w-full h-full flex justify-center items-center">
        <Image src={logoUrl} alt="Image" width={128} height={128} />
      </div>
    </div>
  );
};

export default sponsorship;
